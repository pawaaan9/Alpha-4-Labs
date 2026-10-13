"use client";

import { useState } from "react";
import { techGroups } from "../data/tech";
import SectionHeading from "./section-heading";

// Tabbed tech stack: pick a layer on the left, see its tools on the right.
export default function TechStack() {
  const [active, setActive] = useState(0);
  const group = techGroups[active];

  return (
    <section id="tech" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="The right tools for every layer"
          description="Proven, well-supported technology, so what we build is fast today and easy to maintain tomorrow."
        />

        <div className="mt-14 grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[280px_1fr]">
          {/* tabs */}
          <div
            role="tablist"
            aria-label="Technology categories"
            className="grid grid-cols-3 gap-1 border-b border-line p-2 sm:flex sm:overflow-x-auto sm:p-3 lg:flex-col lg:border-b-0 lg:border-r"
          >
            {techGroups.map((g, i) => (
              <button
                key={g.title}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`flex shrink-0 items-center justify-center gap-6 rounded-xl px-2 py-2.5 text-center text-xs font-semibold transition sm:justify-between sm:px-4 sm:py-3 sm:text-left sm:text-sm ${
                  i === active ? "bg-primary text-black" : "text-muted hover:bg-surface-2 hover:text-white"
                }`}
              >
                {g.title}
                <span className={`hidden font-mono text-[11px] sm:inline ${i === active ? "text-black/60" : "text-muted/70"}`}>
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* panel */}
          <div role="tabpanel" className="bg-dots p-5 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-bold text-white">{group.title}</h3>
              <p className="text-sm text-muted">{group.description}</p>
            </div>

            <ul key={group.title} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {group.items.map(({ name, icon: Icon, color }, i) => (
                <li
                  key={name}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="animate-float-in group flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-background px-3 py-5 sm:px-4 sm:py-7 text-center transition hover:-translate-y-1 hover:border-white/25"
                >
                  <Icon size={34} color={color} className="transition group-hover:scale-110" />
                  <span className="text-sm font-medium text-foreground/90">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
