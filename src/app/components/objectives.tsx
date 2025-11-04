const objectives = [
  {
    title: "Innovation First",
    desc: "Relentless experimentation to keep our partners ahead.",
  },
  {
    title: "Human‑centered",
    desc: "Design products that people love to use.",
  },
  {
    title: "Quality at Speed",
    desc: "Ship fast without compromising reliability.",
  },
];

function SparkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-accent">
      <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" strokeWidth="1.5" />
    </svg>
  );
}

export default function Objectives() {
  return (
    <section id="objectives" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Objectives</h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            Guiding principles that shape everything we build.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {objectives.map((o) => (
            <div key={o.title} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                  <SparkIcon />
                </span>
                <h3 className="text-white">{o.title}</h3>
              </div>
              <p className="mt-2 text-sm text-foreground/75">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


