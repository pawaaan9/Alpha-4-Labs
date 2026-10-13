import Link from "next/link";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { navLinks } from "../data/nav";
import { services } from "../data/services";
import { site } from "../data/site";
import { works } from "../data/works";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line pt-20 text-sm text-muted">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed">{site.tagline}</p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-semibold text-white transition hover:border-primary hover:bg-primary"
          >
            Start a project <FiArrowUpRight className="transition group-hover:rotate-45" />
          </Link>
        </div>

        <FooterCol title="Services">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/services/${s.slug}`}>{s.title}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          {navLinks.map((l) => (
            <FooterLink key={l.href} href={l.href}>{l.label}</FooterLink>
          ))}
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Work">
          {works.map((w) => (
            <FooterLink key={w.slug} href={`/work/${w.slug}`}>{w.title}</FooterLink>
          ))}
          <li className="pt-3">
            <a href={`mailto:${site.email}`} className="text-white transition hover:text-accent">{site.email}</a>
          </li>
        </FooterCol>
      </div>

      {/* oversized outlined wordmark */}
      <div aria-hidden className="mx-auto mt-20 max-w-7xl select-none px-4 sm:px-6 lg:px-8">
        <p className="text-outline whitespace-nowrap text-center text-[15.5vw] font-extrabold uppercase leading-[0.8] tracking-tighter lg:text-[12.5rem]">
          Alpha4Labs
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a href="#" className="group inline-flex items-center gap-2 transition hover:text-white">
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <FiArrowUp />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-white">
        {children}
      </Link>
    </li>
  );
}
