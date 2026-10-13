import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../data/site";
import Button from "./button";
import Reveal from "./reveal";

// Closing call-to-action banner, shown at the bottom of most pages.
export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-primary px-6 py-16 sm:px-14 sm:py-20">
            {/* decorative rings */}
            <span aria-hidden className="absolute -right-28 -top-28 -z-10 h-96 w-96 rounded-full border-[56px] border-black/10" />
            <span aria-hidden className="absolute -bottom-16 right-56 -z-10 h-40 w-40 rounded-full border-[20px] border-black/10" />

            <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-black/65">Let&rsquo;s work together</p>
                <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-black sm:text-6xl">
                  Have an idea?
                  <br />
                  Let&rsquo;s build it.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-black/75">
                  Tell us about your project and we will come back with ideas, a plan and a clear
                  estimate. No obligation.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Button href="/contact" variant="dark" arrow className="w-full sm:w-auto">
                  Start a project
                </Button>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-black"
                >
                  {site.email}
                  <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
