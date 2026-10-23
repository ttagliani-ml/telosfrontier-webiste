const principles = [
  {
    title: "Built around your business",
    body: "No generic frameworks. Every engagement is designed around your market, your stack, your people and the resources you actually have.",
  },
  {
    title: "Your data, your IP",
    body: "Everything we build is integrated into your systems and owned by you. Models trained on your data stay yours — no competitor gets them.",
  },
  {
    title: "Accountable to outcomes",
    body: "We agree on what success looks like before we start, then report against it. We measure impact delivered, not hours billed.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="border-t border-line py-24 sm:py-32">
      <div className="wrap">
        <h2 className="section-title max-w-[18ch]">What you can hold us to.</h2>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="bg-obsidian py-8 md:px-8 md:py-4 md:first:pl-0">
              <h3 className="text-xl font-semibold leading-snug tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-4 max-w-[38ch] text-smoke">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
