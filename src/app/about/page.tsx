import type { Metadata } from "next";
import Contact from "../components/contact";
import Engagement from "../components/engagement";
import PageHeader from "../components/page-header";
import Reveal from "../components/reveal";
import TechMarquee from "../components/tech-marquee";
import WhyUs from "../components/why-us";

export const metadata: Metadata = {
  title: "About",
  description: "Alpha 4 Labs is a software engineering studio that designs and builds digital products for growing businesses.",
};

const values = [
  { k: "Mission", v: "Help businesses grow with software that is reliable, beautiful and genuinely useful." },
  { k: "Vision", v: "To be the engineering partner companies trust from first idea to global scale." },
  { k: "Approach", v: "Small senior teams, short feedback loops and honest communication at every step." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="About us"
        title={
          <>
            Engineers and designers who care about <span className="text-accent">outcomes</span>.
          </>
        }
        description="Alpha 4 Labs is a software engineering studio. We partner with startups and growing businesses to design, build and scale web platforms, mobile apps, cloud infrastructure and AI solutions."
      />

      {/* story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our story</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              We started Alpha 4 Labs with a simple belief: great software comes from small, senior
              teams who understand the business problem as well as the code.
            </p>
            <p>
              Instead of passing work between departments, one team takes your product from discovery
              and design through engineering, launch and ongoing improvement. That means fewer
              hand-offs, faster decisions and a product that fits how your business really works.
            </p>
            <p>
              Today we build e-commerce platforms, booking systems, business tools and AI-powered
              features for clients who want a long-term technology partner, not just a vendor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* mission / vision / approach */}
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-7xl gap-px bg-line md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.k} delay={i * 100} className="bg-background">
              <div className="h-full p-8 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">0{i + 1} / {v.k}</span>
                <p className="mt-5 text-xl font-semibold leading-snug text-white">{v.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyUs />
      <TechMarquee />
      <Engagement />
      <Contact />
    </>
  );
}
