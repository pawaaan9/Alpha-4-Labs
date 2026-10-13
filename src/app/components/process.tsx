import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import Button from "./button";

const steps = [
  {
    title: "Discover",
    time: "Week 1",
    desc: "We learn your business, users and goals, then agree on scope, risks, budget and a clear roadmap.",
    points: ["Discovery workshop", "Requirements & scope", "Timeline & estimate"],
  },
  {
    title: "Design",
    time: "Weeks 2–3",
    desc: "User flows, wireframes and an interactive prototype you can click through before any code is written.",
    points: ["UX flows", "Clickable prototype", "Visual design"],
  },
  {
    title: "Build",
    time: "Sprints",
    desc: "Two-week agile sprints with live demos, code reviews and automated tests, so you see progress every step.",
    points: ["Sprint demos", "Code reviews", "Automated testing"],
  },
  {
    title: "Launch & grow",
    time: "Ongoing",
    desc: "A smooth go-live followed by monitoring, support and continuous improvement as your users grow.",
    points: ["Deployment", "Monitoring", "Support & new features"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr] lg:px-8">
        {/* sticky intro on desktop */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="A clear process, no surprises"
            description="Transparent from day one. You always know what is being built, why, and when it ships."
          />
          <Button href="/contact" arrow className="mt-8">
            Plan your project
          </Button>
        </div>

        <ol className="relative space-y-4 sm:border-l sm:border-line sm:pl-12">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} className="relative">
              <span className="absolute -left-[65px] top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-primary bg-background font-mono text-xs font-semibold text-accent sm:flex">
                {i + 1}
              </span>
              <div className="rounded-2xl border border-line bg-surface p-6 transition hover:border-white/20 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary font-mono text-xs font-semibold text-accent sm:hidden">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">{s.time}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-foreground/80">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
