import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiCheck } from "react-icons/fi";
import Button from "@/app/components/button";
import Contact from "@/app/components/contact";
import PageHeader from "@/app/components/page-header";
import Reveal from "@/app/components/reveal";
import { findTech } from "@/app/data/tech";
import { findWorkBySlug, works } from "@/app/data/works";

type ParamsPromise = Promise<{ slug: string }>; // Next.js 15 passes params as a Promise

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const work = findWorkBySlug(slug);
  if (!work) return {};
  return { title: `${work.title} case study`, description: work.summary };
}

export default async function WorkDetailPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const work = findWorkBySlug(slug);
  if (!work) return notFound();

  const index = works.findIndex((w) => w.slug === work.slug);
  const next = works.length > 1 ? works[(index + 1) % works.length] : undefined;

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/work", label: "Work" }, { label: work.title }]}
        eyebrow={`Case study · ${work.category}`}
        title={work.title}
        description={work.summary}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {work.href && (
            <Button href={work.href} external arrow>
              Visit live site
            </Button>
          )}
          <Button href="/work" variant="secondary">
            <FiArrowLeft /> All projects
          </Button>
        </div>
      </PageHeader>

      {/* project facts */}
      <section className="border-b border-line">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
          <Fact label="Client" value={work.title} />
          <Fact label="Industry" value={work.category} />
          <Fact label="Services" value={work.services.join(", ")} />
          <Fact
            label="Live site"
            value={
              work.href ? (
                <a href={work.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white hover:text-accent">
                  {new URL(work.href).hostname.replace("www.", "")} <FiArrowUpRight />
                </a>
              ) : (
                "Private"
              )
            }
          />
        </dl>
      </section>

      {/* hero visual */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-dots relative aspect-[16/9] overflow-hidden rounded-3xl border border-line bg-surface sm:aspect-[21/9]">
              <div className="absolute inset-10 sm:inset-16">
                <Image src={work.image} alt={`${work.title} logo`} fill priority sizes="90vw" className="object-contain" />
              </div>
              {work.tags.length > 0 && (
                <ul className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                  {work.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-background px-3 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* overview / challenge / solution */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              The story
            </p>
            <ul className="mt-6 space-y-2 border-l border-line font-mono text-xs">
              {["Overview", "Challenge", "Solution", "Key features", "Tech stack"].map((s) => (
                <li key={s}>
                  <a href={`#${s.toLowerCase().replace(" ", "-")}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-muted transition hover:border-primary hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-16">
            <StoryBlock id="overview" title="Overview" text={work.overview} />
            <div className="grid gap-5 md:grid-cols-2">
              <Reveal>
                <div id="challenge" className="h-full scroll-mt-32 rounded-3xl border border-line bg-surface p-8">
                  <span className="font-mono text-xs text-muted">01 / Challenge</span>
                  <h2 className="mt-4 text-2xl font-bold text-white">The challenge</h2>
                  <p className="mt-4 leading-relaxed text-muted">{work.challenge}</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div id="solution" className="h-full scroll-mt-32 rounded-3xl bg-primary p-8">
                  <span className="font-mono text-xs text-black/60">02 / Solution</span>
                  <h2 className="mt-4 text-2xl font-bold text-black">Our solution</h2>
                  <p className="mt-4 leading-relaxed text-black/80">{work.solution}</p>
                </div>
              </Reveal>
            </div>

            {/* features */}
            <div id="key-features" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white">Key features</h2>
              <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                {work.features.map((f) => (
                  <div key={f.title} className="bg-background p-7">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-accent">
                      <FiCheck size={14} />
                    </span>
                    <h3 className="mt-5 font-bold text-white">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* stack */}
            <div id="tech-stack" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white">Tech stack</h2>
              <ul className="mt-8 flex flex-wrap gap-3">
                {work.stack.map((name) => {
                  const tech = findTech(name);
                  const Icon = tech?.icon;
                  return (
                    <li key={name} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-3.5 text-sm font-medium text-white">
                      {Icon && <Icon size={20} color={tech.color} />}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* quote */}
      {work.quote && (
        <section className="border-y border-line py-24">
          <Reveal className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="font-mono text-6xl leading-none text-primary">&ldquo;</span>
            <p className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-5xl">{work.quote}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">{work.title}</p>
          </Reveal>
        </section>
      )}

      {/* next project */}
      {next && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6 rounded-3xl border border-line bg-surface p-8 transition hover:border-primary">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Next project</p>
                <p className="mt-2 text-3xl font-extrabold text-white">{next.title}</p>
              </div>
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-white transition group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                <FiArrowUpRight size={22} />
              </span>
            </Link>
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-background px-4 py-6 sm:px-6 lg:px-8">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-2 text-sm font-medium text-white">{value}</dd>
    </div>
  );
}

function StoryBlock({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <Reveal>
      <div id={id} className="scroll-mt-32">
        <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{text}</p>
      </div>
    </Reveal>
  );
}
