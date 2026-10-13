import Link from "next/link";

// The A4 monogram: an orange A leg split from a white leg by a diagonal cut,
// with one bar acting as both the A's crossbar and the 4's bar.
// White parts use currentColor. Keep in sync with src/app/icon.svg and public/brand/.
export function LogoMark({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="1 5 51.5 30" className={`w-auto ${className}`} aria-hidden>
      <path fill="currentColor" d="M14 6h8l12 28h-8Z" />
      <path className="fill-primary" d="M2 34h8l7-16.33L13 8.33Z" />
      <path fill="currentColor" d="M16.29 24H51.5v6H13.71Z" />
      <path fill="currentColor" fillRule="evenodd" d="M41.5 6h6v18h4v6h-4v4h-6v-4h-7.7v-6Z M38 24H41.5v-8.2Z" />
    </svg>
  );
}

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const large = size === "lg";
  return (
    <Link href="/" aria-label="Alpha4 Labs home" className="group inline-flex shrink-0 items-center gap-3 text-white">
      <LogoMark className={`${large ? "h-10" : "h-8"} transition duration-300 group-hover:-translate-y-0.5`} />
      <span aria-hidden className={`${large ? "h-9" : "h-8"} w-px bg-line`} />
      <span className="flex flex-col leading-none">
        <span className={`${large ? "text-xl" : "text-[17px]"} font-extrabold tracking-[0.04em]`}>ALPHA4</span>
        <span className={`${large ? "mt-1.5 text-[10px]" : "mt-1 text-[9px]"} font-semibold tracking-[0.5em] text-primary`}>
          LABS
        </span>
      </span>
    </Link>
  );
}
