"use client";

import { useEffect, useState } from "react";

// Types and deletes each word in turn, like someone typing in an editor.
export default function TypedWords({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1800; // pause on the full word
    if (deleting && text === "") delay = 250;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="whitespace-nowrap text-accent">
      {text}
      <span className="animate-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-primary align-baseline" />
    </span>
  );
}
