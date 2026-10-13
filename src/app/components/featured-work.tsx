import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { works } from "../data/works";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import WorkCard from "./work-card";

export default function FeaturedWork() {
  return (
    <section id="works" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Products we've shipped"
            description="Real products, live and in use. Each one comes with a full case study."
          />
          <Link href="/work" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white">
            <span className="border-b border-primary pb-0.5">All projects</span>
            <FiArrowUpRight className="text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 space-y-6">
          {works.slice(0, 3).map((w, i) => (
            <Reveal key={w.slug}>
              <WorkCard work={w} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
