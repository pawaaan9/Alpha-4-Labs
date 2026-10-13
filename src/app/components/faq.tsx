import { FiPlus } from "react-icons/fi";
import { faqs } from "../data/faq";
import { site } from "../data/site";
import SectionHeading from "./section-heading";

export default function Faq() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, answered"
            description="Can't find what you're looking for? Send us a message and we'll get back to you within one business day."
          />
          <a href={`mailto:${site.email}`} className="mt-6 inline-block border-b border-primary pb-0.5 text-sm font-semibold text-white">
            {site.email}
          </a>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-white">
                {f.q}
                <span className="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-accent transition group-open:border-primary group-open:bg-primary group-open:text-white">
                  <FiPlus />
                </span>
              </summary>
              <p className="pb-6 pr-14 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
