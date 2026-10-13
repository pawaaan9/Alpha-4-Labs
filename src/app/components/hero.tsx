import { FiArrowDown, FiCheckCircle, FiZap } from "react-icons/fi";
import Button from "./button";
import Terminal from "./terminal";
import TypedWords from "./typed-words";

const words = ["web platforms", "mobile apps", "AI systems", "cloud infra", "custom software"];

const highlights = [
  { k: "End-to-end", v: "Strategy to support" },
  { k: "Senior team", v: "No hand-offs" },
  { k: "You own it", v: "Full code ownership" },
];

// Rotating circular label drawn with an SVG text path.
function SpinningBadge() {
  return (
    <div className="absolute -left-14 -top-14 hidden h-32 w-32 items-center justify-center rounded-full border border-line bg-background xl:flex">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-muted font-mono text-[8.5px] uppercase tracking-[0.2em]">
          <textPath href="#badge-circle">Design · Build · Launch · Scale ·</textPath>
        </text>
      </svg>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
        <FiArrowDown />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Software engineering studio
            </span>

            <h1 className="heading-display mt-6 font-extrabold text-white">
              We design &amp; build
              <br />
              <TypedWords words={words} />
              <br />
              <span className="text-outline">that perform.</span>
            </h1>

            <p className="desc mt-7 max-w-xl">
              Alpha 4 Labs partners with businesses to turn ideas into reliable digital products. One
              senior team covering design, engineering, cloud and AI, from the first sketch to launch
              and beyond.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" arrow>
                Start a project
              </Button>
              <Button href="/work" variant="secondary">
                Explore our work
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
              {highlights.map((h) => (
                <div key={h.k} className="px-4 py-4 first:pl-0">
                  <dt className="text-sm font-bold text-white">{h.k}</dt>
                  <dd className="mt-1 text-xs text-muted">{h.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <SpinningBadge />
            <Terminal />

            <div className="animate-float absolute -bottom-7 -left-3 flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3 shadow-xl shadow-black/40 sm:-left-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
                <FiCheckCircle size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Deployed to production</p>
                <p className="text-xs text-muted">CI/CD pipeline passed</p>
              </div>
            </div>

            <div className="animate-float-delayed absolute -right-3 -top-5 flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 shadow-xl shadow-black/40 sm:-right-6">
              <FiZap className="text-white" size={15} />
              <span className="text-xs font-semibold text-white">Built for performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
