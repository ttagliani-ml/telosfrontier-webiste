const steps = [
  {
    title: "Define the telos",
    body: "Working sessions with your leadership and teams. We pin down the outcome that matters and how we will measure it.",
  },
  {
    title: "Map the frontier",
    body: "We audit your stack, data and processes, then design the shortest credible path from where you are to that outcome.",
  },
  {
    title: "Build in the open",
    body: "Agile delivery with working software every sprint and constant touchpoints, so there are no surprises at the end.",
  },
  {
    title: "Land and scale",
    body: "We deploy, hand over and train your people — and stay accountable until the impact shows up in your numbers.",
  },
];

// Each step sits higher than the last: the path climbs toward the apex.
const lift = ["lg:mb-0", "lg:mb-16", "lg:mb-32", "lg:mb-48"];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line bg-graphite py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="section-title lg:col-span-6">From purpose to production.</h2>
          <p className="max-w-[48ch] text-smoke lg:col-span-5 lg:col-start-8 lg:self-end">
            Four stages, the same in a three-week sprint or a two-year programme. Each one ends with something you can
            use, not a report about something you might.
          </p>
        </div>

        <ol className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-4 lg:items-end lg:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`relative border-l border-line pl-6 lg:border-l-0 lg:border-t lg:pr-8 lg:pt-8 ${lift[i]} ${
                i > 0 ? "lg:pl-8" : "lg:pl-0"
              } ${i === steps.length - 1 ? "lg:border-t-cyan" : "lg:border-t-chrome/50"}`}
            >
              {i > 0 && (
                // the riser: climbs from the previous stage's level to this one
                <span className="absolute left-0 top-0 hidden h-16 w-px bg-chrome/50 lg:block" aria-hidden="true" />
              )}
              {i === steps.length - 1 && (
                <span
                  className="absolute -top-[7px] right-0 hidden h-3.5 w-3.5 rounded-full bg-cyan shadow-[0_0_20px_rgba(34,228,255,0.7)] lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="font-display text-sm font-light text-cyan">Stage {i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] sm:text-2xl">{s.title}</h3>
              <p className="mt-4 max-w-[34ch] text-[15px] text-smoke">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
