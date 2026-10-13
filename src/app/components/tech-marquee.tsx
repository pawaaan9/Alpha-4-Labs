import { allTech } from "../data/tech";

// Infinite scrolling strip of technology logos shown under the hero.
export default function TechMarquee() {
  // Render the list twice so the -50% translate loops seamlessly.
  const items = [...allTech, ...allTech];

  return (
    <section aria-label="Technologies we use" className="border-y border-line bg-surface py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Built with modern, proven technology
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="animate-marquee flex w-max gap-12 pr-12">
          {items.map(({ name, icon: Icon }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= allTech.length}
              className="flex items-center gap-2.5 text-muted transition hover:text-white"
            >
              <Icon size={22} />
              <span className="whitespace-nowrap text-sm font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
