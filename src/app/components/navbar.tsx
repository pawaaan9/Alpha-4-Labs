"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { navLinks } from "../data/nav";
import { services } from "../data/services";
import { site } from "../data/site";
import Logo from "./logo";

type Pill = { left: number; width: number } | null;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pill, setPill] = useState<Pill>(null); // hover highlight that glides between links

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 24);
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  // Escape closes any open menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock page scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);
  const movePill = (e: React.MouseEvent<HTMLElement>) =>
    setPill({ left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth });

  const solid = scrolled || megaOpen || mobileOpen;

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      {/* floating pill bar */}
      <div
        className={`relative flex h-[60px] items-center justify-between rounded-full border pl-4 pr-2 transition-all duration-500 sm:pl-5 ${
          solid
            ? "border-line bg-surface/90 shadow-2xl shadow-black/60 backdrop-blur-xl"
            : "border-white/[0.06] bg-white/[0.02] backdrop-blur-md"
        }`}
        onMouseLeave={() => {
          setMegaOpen(false);
          setPill(null);
        }}
      >
        <Logo />

        {/* desktop links */}
        <ul className="relative hidden items-center text-sm lg:flex">
          <span
            aria-hidden
            className={`absolute top-1/2 h-10 -translate-y-1/2 rounded-full bg-white/[0.07] transition-all duration-300 ease-out ${
              pill ? "opacity-100" : "opacity-0"
            }`}
            style={pill ? { left: pill.left, width: pill.width } : undefined}
          />
          <li
            onMouseEnter={(e) => {
              movePill(e);
              setMegaOpen(true);
            }}
          >
            <button
              type="button"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}
              className={`relative z-10 flex items-center gap-1 px-4 py-2.5 font-medium transition hover:text-white ${
                megaOpen || pathname.startsWith("/services") ? "text-white" : "text-muted"
              }`}
            >
              Services
              <FiChevronDown className={`transition duration-300 ${megaOpen ? "rotate-180 text-primary" : ""}`} />
            </button>
          </li>
          {navLinks.map((link) => (
            <li
              key={link.href}
              onMouseEnter={(e) => {
                movePill(e);
                setMegaOpen(false);
              }}
            >
              <Link
                href={link.href}
                className={`relative z-10 block px-4 py-2.5 font-medium transition hover:text-white ${
                  isActive(link.href) ? "text-white" : "text-muted"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* desktop CTA: label + arrow bubble that turns on hover */}
          <Link
            href="/contact"
            className="group hidden h-11 items-center gap-3 rounded-full bg-primary pl-5 pr-1.5 text-sm font-semibold text-black transition hover:bg-primary-hover lg:inline-flex"
          >
            Let&rsquo;s talk
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-primary transition duration-300 group-hover:-rotate-45">
              <FiArrowRight />
            </span>
          </Link>

          {/* mobile: two-line menu button that morphs into an X */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition lg:hidden ${
              mobileOpen ? "bg-primary" : "bg-white/[0.06] hover:bg-white/10"
            }`}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full transition-all duration-300 ${
                  mobileOpen ? "top-[5px] rotate-45 bg-black" : "top-0 bg-white"
                }`}
              />
              <span
                className={`absolute right-0 h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen ? "bottom-[5px] w-5 -rotate-45 bg-black" : "bottom-0 w-3 bg-white"
                }`}
              />
            </span>
          </button>
        </div>

        {/* reading progress along the bottom edge of the pill */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-x-8 -bottom-px h-px origin-left bg-primary transition-opacity duration-300 ${
            scrolled && !mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `scaleX(${progress})` }}
        />

        {/* services mega menu (desktop) */}
        {megaOpen && (
          <div className="absolute inset-x-0 top-full hidden pt-3 lg:block">
            <div className="animate-float-in grid grid-cols-[1fr_280px] gap-3 rounded-3xl border border-line bg-surface/95 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <ul className="grid grid-cols-2 gap-1 xl:grid-cols-3">
                {services.map(({ slug, title, short, icon: Icon }, i) => (
                  <li key={slug} className="animate-float-in" style={{ animationDelay: `${i * 35}ms` }}>
                    <Link
                      href={`/services/${slug}`}
                      className="group flex gap-4 rounded-2xl p-4 transition hover:bg-white/[0.04]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-accent transition duration-300 group-hover:rotate-[-8deg] group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-white">
                          {title}
                          <FiArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted">{short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6">
                <span aria-hidden className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full border-[28px] border-black/10" />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-wider text-black/60">Not sure where to start?</p>
                  <p className="mt-3 text-lg font-bold leading-snug text-black">
                    Tell us about your idea and we&rsquo;ll suggest the right approach.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                >
                  Book a free call <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* full-screen mobile menu (sits behind the pill so the close button stays on top) */}
      {mobileOpen && (
        <div className="fixed inset-0 -z-10 overflow-y-auto bg-background lg:hidden">
          <div aria-hidden className="bg-grid absolute inset-0" />
          <nav className="relative flex min-h-full flex-col px-5 pb-8 pt-28 sm:px-8">
            <p className="eyebrow animate-float-in">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Menu
            </p>

            <ul className="mt-4">
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
                <li key={link.href} className="animate-float-in" style={{ animationDelay: `${60 + i * 60}ms` }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between border-b border-line py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-primary">0{i + 1}</span>
                      <span
                        className={`text-4xl font-extrabold tracking-tight transition group-hover:text-primary sm:text-5xl ${
                          isActive(link.href) ? "text-primary" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                    <FiArrowUpRight size={22} className="text-muted transition group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="animate-float-in mt-10" style={{ animationDelay: "420ms" }}>
              <p className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Services
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {services.map(({ slug, title, icon: Icon }) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-4 text-sm font-medium text-white transition active:border-primary"
                    >
                      <Icon size={18} className="text-primary" />
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="animate-float-in relative mt-10 overflow-hidden rounded-3xl bg-primary p-6"
              style={{ animationDelay: "500ms" }}
            >
              <span aria-hidden className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full border-[24px] border-black/10" />
              <p className="relative text-2xl font-extrabold leading-tight text-black">Have a project in mind?</p>
              <a href={`mailto:${site.email}`} className="relative mt-2 block text-sm font-medium text-black/70">
                {site.email}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Start a project <FiArrowRight />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
