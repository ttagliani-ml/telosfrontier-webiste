import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#principles", label: "Principles" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-obsidian/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" aria-label="Telos Frontier, back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-chrome transition-colors hover:text-bright">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary min-h-[44px] px-5">
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-[2px] w-6 bg-bright transition-transform duration-200 ${open ? "rotate-45" : "-translate-y-[5px]"}`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-bright transition-transform duration-200 ${open ? "-rotate-45" : "translate-y-[5px]"}`}
          />
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line md:hidden">
        <div className="wrap flex flex-col py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-xl text-bright"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-6">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
