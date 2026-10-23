import Logo from "./Logo";
import { site } from "../config";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="wrap flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo size="lg" />
          <p className="mt-6 max-w-[36ch] text-[15px] text-smoke">
            Digital transformation, technology consultancy and AI development.
          </p>
          <address className="mt-6 text-sm not-italic leading-relaxed text-smoke">
            {site.name}
            {site.legalAddress.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div className="flex flex-col gap-4 text-[15px] md:items-end">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
            <a href="#services" className="hover:text-bright">Services</a>
            <a href="#approach" className="hover:text-bright">Approach</a>
            <a href="#principles" className="hover:text-bright">Principles</a>
            <a href="#contact" className="hover:text-bright">Contact</a>
            {site.linkedin && (
              <a href={site.linkedin} className="hover:text-bright" rel="noopener" target="_blank">
                LinkedIn
              </a>
            )}
          </nav>
          <p className="text-sm text-smoke">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
