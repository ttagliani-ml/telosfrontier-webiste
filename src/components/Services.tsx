const services = [
  {
    title: "Digital transformation",
    body: "Rewire how your company runs. We rebuild processes, platforms and data around where you are going, not where you have been.",
    items: [
      "Process redesign and automation",
      "Legacy system modernisation",
      "Cloud migration",
      "Data platforms and governance",
      "Change enablement for your teams",
    ],
  },
  {
    title: "Technology consultancy",
    body: "Clear-eyed advice from people who build. We help leadership make technology decisions that hold up for years, not quarters.",
    items: [
      "Technology strategy and roadmaps",
      "Architecture reviews",
      "Vendor and platform selection",
      "Fractional CTO",
      "Technical due diligence",
    ],
  },
  {
    title: "AI development",
    body: "Custom AI trained on your data and wired into your systems, from the first model to production at scale.",
    items: [
      "LLM agents and copilots",
      "Machine learning on proprietary data",
      "Intelligent document processing",
      "Forecasting and predictive analytics",
      "MLOps and model governance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <h2 className="section-title max-w-[16ch] [text-wrap:balance]">Three disciplines, one aim.</h2>
        <p className="mt-6 max-w-[52ch] text-smoke">
          Most clients come to us for one and stay for all three — because transformation, technology decisions and AI
          only pay off when they are designed together.
        </p>

        <ul className="mt-16 border-b border-line">
          {services.map((s) => (
            <li
              key={s.title}
              className="group grid gap-6 border-t border-line py-10 transition-colors duration-300 hover:bg-graphite/60 sm:py-12 lg:grid-cols-12 lg:gap-10 lg:px-4"
            >
              <h3 className="flex items-start gap-4 text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] lg:col-span-5">
                <span
                  className="mt-[0.4em] h-3 w-3 shrink-0 rounded-full border border-cyan transition-colors duration-300 group-hover:bg-cyan"
                  aria-hidden="true"
                />
                {s.title}
              </h3>
              <p className="max-w-[44ch] text-chrome lg:col-span-4">{s.body}</p>
              <ul className="space-y-2 text-[15px] text-smoke lg:col-span-3">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
