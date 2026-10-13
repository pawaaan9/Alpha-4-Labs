import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/services";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="End-to-end engineering under one roof"
            description="Strategy, design, development and operations by one team, so your product ships faster with fewer hand-offs."
          />
          <Link href="/contact" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white">
            <span className="border-b border-primary pb-0.5">Discuss your project</span>
            <FiArrowUpRight className="text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, short, icon: Icon, tech }, i) => (
            <Reveal key={slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary"
              >
                {/* solid colour wipe on hover */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 group-hover:h-1" />

                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-xs text-muted">/0{i + 1}</span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{short}</p>

                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <p className="font-mono text-[11px] text-muted/80">{tech.slice(0, 3).join(" · ")}</p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-white transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
