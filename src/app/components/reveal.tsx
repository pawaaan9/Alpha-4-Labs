"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  as?: "div" | "li" | "article" | "section";
};

// Fades and slides its children in the first time they scroll into view.
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
