"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#works", label: "Previous Works" },
  { href: "#services", label: "Our Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass mt-4 mb-4 flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-foreground">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
            <span className="font-extrabold tracking-tight">Alpha 4 Labs</span>
          </div>

          <button
            aria-label="Toggle menu"
            className="inline-flex items-center rounded-md px-3 py-2 text-foreground/80 ring-1 ring-white/10 hover:bg-white/5 sm:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 font-medium text-foreground/90 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="#contact"
              className="ml-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 font-semibold text-white shadow hover:opacity-95"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-4 -mt-2 mb-4 rounded-2xl p-2 glass">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-foreground/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-center font-semibold text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}