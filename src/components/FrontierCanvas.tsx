import { useEffect, useRef } from "react";

/**
 * Perspective field converging on a single vanishing point — the "telos".
 * Two brighter rays form the Apex peak; a floor grid streams toward the viewer.
 * Static (single frame) when the visitor prefers reduced motion.
 */
export default function FrontierCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, raf = 0;
    const start = performance.now();
    const pointer = { x: 0, y: 0 }; // -1..1
    const eased = { x: 0, y: 0 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(performance.now() + 4000);
    };

    const ease = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      eased.x += (pointer.x - eased.x) * 0.05;
      eased.y += (pointer.y - eased.y) * 0.05;

      const mobile = w < 768;
      const vx = w * (mobile ? 0.7 : 0.69) + eased.x * 28;
      const vy = h * (mobile ? 0.24 : 0.3) + eased.y * 18;
      const intro = reduce ? 1 : ease(t / 1.8);

      ctx.clearRect(0, 0, w, h);

      // Horizon
      ctx.strokeStyle = `rgba(201,204,211,${0.14 * intro})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(vx - w * intro, vy);
      ctx.lineTo(vx + w * intro, vy);
      ctx.stroke();

      // Rays fanning from the vanishing point to the bottom edge
      const span = w * 2.6;
      const rays = mobile ? 26 : 44;
      for (let i = 0; i <= rays; i++) {
        const bx = vx - span / 2 + (span * i) / rays;
        const ex = vx + (bx - vx) * intro;
        const ey = vy + (h - vy) * intro;
        ctx.strokeStyle = "rgba(201,204,211,0.075)";
        ctx.beginPath();
        ctx.moveTo(vx, vy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }

      // Floor grid streaming toward the viewer
      const lines = 16;
      const speed = reduce ? 0 : 0.08;
      for (let i = 0; i < lines; i++) {
        const z = ((i / lines + t * speed) % 1);
        const p = Math.pow(z, 2.6); // perspective spacing
        const y = vy + (h - vy) * p;
        const a = 0.02 + 0.14 * p;
        ctx.strokeStyle = `rgba(201,204,211,${a * intro})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // The Apex: two bright legs at the mark's angle
      const slope = 36 / 78;
      const legLen = (h - vy) * intro;
      const grad = ctx.createLinearGradient(0, vy, 0, h);
      grad.addColorStop(0, "rgba(241,242,245,0.85)");
      grad.addColorStop(1, "rgba(241,242,245,0.05)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(vx - legLen * slope, vy + legLen);
      ctx.lineTo(vx, vy);
      ctx.lineTo(vx + legLen * slope, vy + legLen);
      ctx.stroke();

      // The point
      const dotY = vy + Math.min(h * 0.09, 72);
      const dotIn = reduce ? 1 : ease((t - 1.1) / 0.6);
      if (dotIn > 0) {
        const r = 7 * dotIn;
        if (!reduce) {
          const pulse = (t * 0.45) % 1;
          ctx.strokeStyle = `rgba(34,228,255,${0.5 * (1 - pulse) * dotIn})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(vx, dotY, 7 + pulse * 46, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = "#22E4FF";
        ctx.shadowColor = "rgba(34,228,255,0.7)";
        ctx.shadowBlur = 24;
        ctx.beginPath();
        ctx.arc(vx, dotY, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    // Pause the loop while the hero is off screen
    const io = new IntersectionObserver(([entry]) => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(draw);
    });

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      io.observe(canvas);
    }
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
