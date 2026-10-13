import type { Metadata } from "next";
import { FiClock, FiFileText, FiMail, FiMessageSquare } from "react-icons/fi";
import Faq from "../components/faq";
import PageHeader from "../components/page-header";
import { site } from "../data/site";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Alpha 4 Labs about your project and get a clear plan and estimate.",
};

const nextSteps = [
  { icon: FiMessageSquare, title: "We reply within 1 business day", desc: "A real person reads every message." },
  { icon: FiClock, title: "30-minute discovery call", desc: "We learn about your goals, users and timeline." },
  { icon: FiFileText, title: "Proposal & estimate", desc: "A clear scope, timeline and price. No obligation." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Let's build something great together"
        description="Share a few details about your project and we'll get back to you with ideas, a plan and an estimate."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-3xl bg-primary p-8">
              <FiMail size={24} className="text-white" />
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-white/75">Prefer email?</p>
              <a href={`mailto:${site.email}`} className="mt-2 block break-all text-xl font-bold text-white hover:underline">
                {site.email}
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="font-bold text-white">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map(({ icon: Icon, title, desc }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        <span className="mr-2 font-mono text-xs text-muted">0{i + 1}</span>
                        {title}
                      </p>
                      <p className="mt-1 text-sm text-muted">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <Faq />
    </>
  );
}
