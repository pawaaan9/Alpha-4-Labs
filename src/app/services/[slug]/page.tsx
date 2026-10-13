import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import Button from "@/app/components/button";
import Contact from "@/app/components/contact";
import PageHeader from "@/app/components/page-header";
import Process from "@/app/components/process";
import Reveal from "@/app/components/reveal";
import { findServiceBySlug, services } from "@/app/data/services";
import { findTech } from "@/app/data/tech";

type ParamsPromise = Promise<{ slug: string }>; // Next.js 15 passes params as a Promise

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServicePage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) return notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        crumbs={[{ href: "/#services", label: "Services" }, { label: service.title }]}
        eyebrow="Service"
        title={service.title}
        description={service.intro}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact" arrow>
            Get a free estimate
          </Button>
          <Button href="/work" variant="secondary">
            See our work
          </Button>
        </div>
        <span
          aria-hidden
          className="absolute right-8 top-24 hidden h-40 w-40 items-center justify-center rounded-[2rem] bg-primary text-black lg:flex xl:right-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          <Icon size={64} />
        </span>
      </PageHeader>

      {/* capabilities */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What we offer</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 90}>
                <div className="group h-full rounded-3xl border border-line bg-surface p-8 transition hover:border-primary">
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  <h3 className="mt-5 text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* deliverables + tech */}
      <section className="border-y border-line bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold text-white">What you get</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl border border-line bg-background px-4 py-3.5 text-sm text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                    <FiCheck size={13} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white">Tools we use</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {service.tech.map((name) => {
                const tech = findTech(name);
                const TechIcon = tech?.icon;
                return (
                  <li key={name} className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-background px-4 py-6 text-center text-sm font-medium text-white">
                    {TechIcon && <TechIcon size={28} color={tech.color} />}
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <Process />

      {/* other services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">Other services</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {others.map(({ slug, title, icon: OtherIcon }) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-5 transition hover:border-primary"
                >
                  <div className="flex items-center justify-between">
                    <OtherIcon size={20} className="text-accent" />
                    <FiArrowUpRight className="text-muted transition group-hover:rotate-45 group-hover:text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
}
