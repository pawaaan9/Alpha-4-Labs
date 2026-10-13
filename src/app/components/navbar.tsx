"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiChevronDown, FiMail, FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/nav";
import { services } from "../data/services";
import { site } from "../data/site";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* top info bar */}
      <div
        className={`hidden overflow-hidden border-b border-line bg-background text-xs text-muted transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 border-transparent" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Now taking on new projects
          </p>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition hover:text-white">
            <FiMail /> {site.email}
          </a>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || megaOpen ? "border-line bg-background/95 backdrop-blur" : "border-transparent bg-transparent"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <ul className="hidden items-center gap-1 text-sm lg:flex">
            <li onMouseEnter={() => setMegaOpen(true)}>
              <button
                type="button"
                aria-expanded={megaOpen}
                onClick={() => setMegaOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 font-medium transition hover:text-white ${
                  megaOpen || pathname.startsWith("/services") ? "text-white" : "text-muted"
                }`}
              >
                Services
                <FiChevronDown className={`transition ${megaOpen ? "rotate-180" : ""}`} />
              </button>
            </li>
            {navLinks.map((link) => (
              <li key={link.href} onMouseEnter={() => setMegaOpen(false)}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 font-medium transition hover:text-white ${
                    isActive(link.href) ? "text-white" : "text-muted"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-[23px] left-4 right-4 h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-primary-hover"
            >
              Contact us
              <FiArrowRight className="transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center rounded-lg border border-line p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        {/* services mega menu (desktop) */}
        {megaOpen && (
          <div className="hidden border-t border-line lg:block">
            <div className="mx-auto grid max-w-7xl grid-cols-[1fr_300px] gap-8 px-8 py-8">
              <ul className="grid grid-cols-3 gap-2">
                {services.map(({ slug, title, short, icon: Icon }) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="group flex gap-4 rounded-xl p-4 transition hover:bg-surface-2"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent transition group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{title}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">{short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-between rounded-2xl bg-primary p-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-black/60">Not sure where to start?</p>
                  <p className="mt-3 text-lg font-bold leading-snug text-black">
                    Tell us about your idea and we&rsquo;ll suggest the right approach.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                >
                  Book a free call <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* full-screen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden">
          <div className="px-4 py-8 sm:px-6">
            <p className="eyebrow">Services</p>
            <ul className="mt-4 grid gap-1 sm:grid-cols-2">
              {services.map(({ slug, title, icon: Icon }) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-white hover:bg-surface-2"
                  >
                    <Icon className="text-accent" /> {title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-8 border-t border-line pt-6">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 py-3 text-3xl font-bold text-white"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-black"
            >
              Contact us <FiArrowRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
