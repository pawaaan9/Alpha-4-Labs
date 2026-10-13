import type { IconType } from "react-icons";
import { FiBookOpen, FiBriefcase, FiCalendar, FiCreditCard, FiHeart, FiShoppingBag, FiTruck, FiUsers } from "react-icons/fi";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

const industries: { name: string; desc: string; icon: IconType }[] = [
  { name: "E-commerce & Retail", desc: "Online stores, catalogues and payments", icon: FiShoppingBag },
  { name: "Hospitality & Travel", desc: "Booking engines and guest experiences", icon: FiCalendar },
  { name: "Healthcare", desc: "Patient, appointment and records systems", icon: FiHeart },
  { name: "Education", desc: "Learning platforms and resource booking", icon: FiBookOpen },
  { name: "Logistics", desc: "Tracking, scheduling and fleet tools", icon: FiTruck },
  { name: "Fintech", desc: "Secure payments and financial dashboards", icon: FiCreditCard },
  { name: "Workforce & Services", desc: "Job matching, rosters and payouts", icon: FiUsers },
  { name: "Startups & SMEs", desc: "MVPs and products built to grow", icon: FiBriefcase },
];

export default function Industries() {
  return (
    <section id="industries" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way your industry works"
          description="We bring patterns that already work in your sector, so you avoid common pitfalls and reach launch sooner."
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ name, desc, icon: Icon }, i) => (
            <Reveal key={name} delay={(i % 4) * 70} className="bg-background">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-primary">
                <Icon size={24} className="text-accent transition group-hover:text-white" />
                <h3 className="mt-6 font-bold text-white">{name}</h3>
                <p className="mt-1.5 text-sm text-muted transition group-hover:text-white/80">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
