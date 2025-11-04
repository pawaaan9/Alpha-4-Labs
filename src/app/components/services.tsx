const services = [
  {
    title: "Product Design",
    desc: "From idea to interface: research, UX, and high-fidelity design.",
  },
  {
    title: "Full‑Stack Development",
    desc: "Modern web apps with Next.js, robust APIs, and cloud-native ops.",
  },
  {
    title: "AI & Automation",
    desc: "Integrate LLMs and smart workflows to accelerate your business.",
  },
  {
    title: "DevOps & SRE",
    desc: "Observability, CI/CD, and resilient infrastructure at scale.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            End-to-end capabilities to ship exceptional digital experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="relative rounded-2xl p-6 ring-1 ring-white/10">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-5" />
              <h3 className="text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


