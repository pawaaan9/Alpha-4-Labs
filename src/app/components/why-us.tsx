import { FiEye, FiHeart, FiKey, FiMessageCircle, FiShield, FiTrendingUp } from "react-icons/fi";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Alpha 4 Labs"
          title="A technology partner, not just a vendor"
          description="We care about the outcome as much as the code. These principles shape everything we build."
        />

        {/* bento grid */}
        <div className="mt-14 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 sm:p-10">
              <span aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[40px] border-black/10" />
              <span aria-hidden className="absolute -bottom-6 right-20 h-24 w-24 rounded-full border-[14px] border-black/10" />
              <FiTrendingUp size={30} className="text-black" />
              <div className="relative mt-16 max-w-xl">
                <h3 className="text-3xl font-extrabold text-black sm:text-4xl">Innovation first</h3>
                <p className="mt-4 text-base leading-relaxed text-black/75">
                  We keep experimenting with new tools and approaches, including AI, so our partners
                  stay ahead. You get modern solutions without the risk of chasing hype.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={80}>
            <Card icon={<FiHeart size={22} />} title="Human-centered" desc="We design products people genuinely enjoy using, tested with real users." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <Card icon={<FiShield size={22} />} title="Quality at speed" desc="Ship fast without compromising security, reliability or maintainability." />
          </Reveal>
          <Reveal className="md:col-span-2">
            <Card icon={<FiEye size={22} />} title="Full transparency" desc="Shared boards, sprint demos and honest updates. No black boxes." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={80}>
            <Card icon={<FiMessageCircle size={22} />} title="Direct communication" desc="Talk directly to the people building your product, not a chain of managers." />
          </Reveal>
          <Reveal className="md:col-span-2" delay={160}>
            <Card icon={<FiKey size={22} />} title="You own everything" desc="Source code, designs and accounts are yours, handed over with documentation." />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-surface p-7 transition hover:border-white/20">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent transition group-hover:bg-primary group-hover:text-black">
        {icon}
      </span>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
      </div>
    </div>
  );
}
