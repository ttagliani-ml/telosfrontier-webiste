import FrontierCanvas from "./FrontierCanvas";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] overflow-hidden">
      <FrontierCanvas />
      {/* keeps the headline legible where rays cross it */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_85%,rgba(14,14,16,0.85),rgba(14,14,16,0)_60%)]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10 flex flex-col justify-end pb-16 pt-32 sm:pb-24">
        <p className="rise mb-8 max-w-[34ch] text-[15px] text-smoke sm:text-base" style={{ animationDelay: "200ms" }}>
          Digital transformation, technology consultancy and AI development.
        </p>
        <h1
          className="rise font-display text-[clamp(3.1rem,10.5vw,9.5rem)] font-bold leading-[0.92] tracking-[-0.035em]"
          style={{ animationDelay: "350ms" }}
        >
          Aim higher.
          <br />
          Land it.
        </h1>
        <div
          className="rise mt-10 flex flex-col gap-8 sm:mt-12 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: "650ms" }}
        >
          <p className="max-w-[46ch] text-lg leading-relaxed text-chrome">
            Telos Frontier takes ambitious companies from purpose to production — rebuilding how they operate, deciding
            what technology to bet on, and shipping AI that earns its place.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a href="#services" className="btn-ghost">
              See what we do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
