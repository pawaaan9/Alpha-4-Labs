"use client";

import { useEffect, useState } from "react";

type Line = { text: string; tone?: "cmd" | "ok" | "muted" | "accent" };

const script: Line[] = [
  { text: "$ alpha4 new your-idea", tone: "cmd" },
  { text: "› discovery workshop .......... done", tone: "muted" },
  { text: "› ux flows & prototype ........ done", tone: "muted" },
  { text: "› design system ............... done", tone: "muted" },
  { text: "$ alpha4 build --web --mobile", tone: "cmd" },
  { text: "✓ 248 tests passed", tone: "ok" },
  { text: "✓ security & performance checks", tone: "ok" },
  { text: "$ alpha4 deploy --prod", tone: "cmd" },
  { text: "✓ live at https://your-product.com", tone: "accent" },
];

const toneClass = {
  cmd: "text-white",
  ok: "text-emerald-400",
  muted: "text-muted",
  accent: "text-accent",
};

// A terminal that "runs" the delivery process line by line, then loops.
export default function Terminal() {
  const [count, setCount] = useState(script.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i = i >= script.length + 4 ? 0 : i + 1; // hold the finished output briefly, then restart
      setCount(Math.min(i, script.length));
    }, 650);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">~/alpha4labs — zsh</span>
      </div>
      <div className="h-[300px] px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
        {script.slice(0, count).map((l, i) => (
          <p key={i} className={toneClass[l.tone ?? "muted"]}>
            {l.text}
          </p>
        ))}
        <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
      </div>
    </div>
  );
}
