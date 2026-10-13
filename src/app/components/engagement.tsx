import { FiCheck } from "react-icons/fi";
import Button from "./button";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const models = [
  {
    name: "Fixed-scope project",
    best: "Best for well-defined products and websites",
    points: ["Agreed scope, price and timeline", "Clickable prototype before build", "Launch, hand-off and warranty period"],
    featured: false,
  },
  {
    name: "Dedicated team",
    best: "Best for growing products and startups",
    points: ["Designers and engineers working as your team", "Flexible scope, sprint-by-sprint", "Monthly billing, scale up or down"],
    featured: true,
  },
  {
    name: "Support & maintenance",
    best: "Best for live products that need care",
    points: ["Bug fixes and security updates", "Monitoring and uptime checks", "Small improvements every month"],
    featured: false,
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ways to work together"
          title="Flexible engagement models"
          description="Choose the model that fits your stage and budget. You can always switch as your needs change."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  m.featured ? "border-primary bg-primary text-black" : "border-line bg-surface"
                }`}
              >
                {m.featured && (
                  <span className="mb-5 w-fit rounded-full bg-black px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                    Most popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${m.featured ? "text-black" : "text-white"}`}>{m.name}</h3>
                <p className={`mt-2 text-sm ${m.featured ? "text-black/70" : "text-muted"}`}>{m.best}</p>
                <ul className="mt-8 space-y-3.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          m.featured ? "bg-black text-primary" : "bg-surface-2 text-accent"
                        }`}
                      >
                        <FiCheck size={12} />
                      </span>
                      <span className={m.featured ? "text-black" : "text-foreground/85"}>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href="/contact" variant={m.featured ? "dark" : "secondary"} arrow className="w-full">
                    Get a quote
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
