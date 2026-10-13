import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { Work } from "../data/works";

// Large horizontal card linking to a project's case-study page.
export default function WorkCard({ work, index = 0 }: { work: Work; index?: number }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:border-primary md:grid-cols-[1.1fr_1fr]"
    >
      {/* visual */}
      <div className="bg-dots relative aspect-[16/11] overflow-hidden border-b border-line bg-surface-2 md:aspect-auto md:min-h-[420px] md:border-b-0 md:border-r">
        <span className="absolute left-5 top-5 z-10 rounded-full border border-line bg-background px-3 py-1 font-mono text-[11px] text-muted">
          {String(index + 1).padStart(2, "0")} / {work.category}
        </span>
        <div className="absolute inset-14 transition duration-700 group-hover:scale-105">
          <Image src={work.image} alt={`${work.title} logo`} fill sizes="(min-width: 768px) 45vw, 90vw" className="object-contain" />
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col p-8 sm:p-10">
        <h3 className="text-3xl font-extrabold text-white sm:text-4xl">{work.title}</h3>
        <p className="desc mt-4">{work.summary}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Services</dt>
            <dd className="mt-2 space-y-1 text-foreground/90">
              {work.services.slice(0, 3).map((s) => (
                <p key={s}>{s}</p>
              ))}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Stack</dt>
            <dd className="mt-2 space-y-1 text-foreground/90">
              {work.stack.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </dd>
          </div>
        </dl>

        <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-white">
          <span className="border-b border-primary pb-0.5">View case study</span>
          <FiArrowUpRight className="text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
