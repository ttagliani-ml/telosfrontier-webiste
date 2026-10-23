import logoUrl from "../assets/logo-horizontal-dark.svg";

type MarkProps = { className?: string; peak?: string; dot?: string; title?: string };

/** The Apex mark: a peak (the frontier) with the target point (the telos) inside it. */
export function Mark({ className, peak = "#C9CCD3", dot = "#22E4FF", title }: MarkProps) {
  return (
    <svg
      viewBox="6 12 88 78"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path d="M6 90 L42 12 H58 L94 90 H72 L50 40 L28 90 Z" fill={peak} />
      <circle cx="50" cy="74" r="8" fill={dot} />
    </svg>
  );
}

/** Horizontal lockup (outlined artwork) used in the nav and footer. */
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <img
      src={logoUrl}
      alt="Telos Frontier"
      className={size === "lg" ? "h-12 w-auto" : "h-8 w-auto"}
      width={376}
      height={78}
    />
  );
}
