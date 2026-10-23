export default function Statement() {
  return (
    <section className="border-t border-line py-24 sm:py-32" aria-label="Who we are">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl font-light text-bright">τέλος</p>
          <p className="mt-2 max-w-[30ch] text-smoke">
            <em>télos</em>, noun — the purpose a thing exists to fulfil; the end it is aimed at.
          </p>
        </div>
        <div className="lg:col-span-8">
          <p className="font-display text-[clamp(1.6rem,3.3vw,2.9rem)] font-normal leading-[1.15] tracking-[-0.015em] text-bright [text-wrap:balance]">
            Most transformations stall between the strategy deck and the shipped system. That gap is our frontier.
          </p>
          <p className="mt-8 max-w-[52ch] text-lg text-chrome">
            We start by defining what you are really aiming at. Then we engineer the shortest credible path to it, and
            build it with you.
          </p>
        </div>
      </div>
    </section>
  );
}
