import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Alpha 4 Labs home">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-white transition group-hover:rotate-[-6deg]">
        A4
      </span>
      <span className="text-[17px] font-extrabold tracking-tight text-white">
        Alpha 4 <span className="font-medium text-muted">Labs</span>
      </span>
    </Link>
  );
}
