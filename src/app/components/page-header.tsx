import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

type Props = {
  crumbs: { href?: string; label: string }[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
};

// Top banner for inner pages: breadcrumbs, big title and intro.
export default function PageHeader({ crumbs, eyebrow, title, description, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted">
            <li>
              <Link href="/" className="transition hover:text-white">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <FiChevronRight />
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="eyebrow mt-12">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
        )}
        <h1 className={`${eyebrow ? "mt-5" : "mt-12"} max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl`}>
          {title}
        </h1>
        {description && <p className="desc mt-6 max-w-2xl">{description}</p>}
        {children}
      </div>
    </section>
  );
}
