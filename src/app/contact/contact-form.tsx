"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { services } from "../data/services";
import { site } from "../data/site";

const budgets = ["Under $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];

// There is no backend yet, so the form opens the visitor's email app with the
// details pre-filled. Swap handleSubmit for an API call when one is available.
export default function ContactForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

  const toggle = (title: string) =>
    setInterests((cur) => (cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title]));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "-"}`,
      `Interested in: ${interests.join(", ") || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = `New project enquiry from ${data.get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition ${
      active ? "border-primary bg-primary text-black" : "border-line text-muted hover:border-white/30 hover:text-white"
    }`;

  const input =
    "w-full rounded-xl border border-line bg-background px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-10">
      <fieldset>
        <legend className="text-sm font-semibold text-white">I&rsquo;m interested in</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((s) => (
            <button type="button" key={s.slug} onClick={() => toggle(s.title)} aria-pressed={interests.includes(s.title)} className={chip(interests.includes(s.title))}>
              {s.title}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-white">Estimated budget</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button type="button" key={b} onClick={() => setBudget(b)} aria-pressed={budget === b} className={chip(budget === b)}>
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-white">Your name *</span>
          <input name="name" required className={`${input} mt-2`} placeholder="Jane Perera" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white">Email *</span>
          <input name="email" type="email" required className={`${input} mt-2`} placeholder="jane@company.com" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-white">Company</span>
          <input name="company" className={`${input} mt-2`} placeholder="Company name (optional)" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-white">Tell us about your project *</span>
          <textarea name="message" required rows={5} className={`${input} mt-2 resize-y`} placeholder="What are you building, who is it for, and when do you need it?" />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-black transition hover:bg-primary-hover sm:w-auto"
      >
        Send message
        <FiSend className="transition group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
