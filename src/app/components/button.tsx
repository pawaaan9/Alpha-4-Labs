import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "dark";
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

const styles = {
  primary: "bg-primary text-black hover:bg-primary-hover",
  secondary: "border border-line text-white hover:border-white/30 hover:bg-white/5",
  light: "bg-white text-background hover:bg-white/90",
  dark: "bg-black text-white hover:bg-black/80",
};

export default function Button({ href, children, variant = "primary", arrow, external, className = "" }: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <FiArrowRight className="transition group-hover:translate-x-1" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
