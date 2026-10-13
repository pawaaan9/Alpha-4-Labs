import Image from "next/image";
import { works } from "../data/works";

export default function PreviousWorks() {
  return (
    <section id="works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Previous Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            A selection of projects we have designed and delivered for our clients.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => {
            const card = (
              <div className="h-full overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow group-hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full bg-white/5">
                  <Image src={w.image} alt={w.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-6" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">{w.category}</span>
                  <h3 className="mt-1 text-white font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{w.description}</p>
                </div>
              </div>
            );
            return w.href ? (
              <a key={w.title} href={w.href} target="_blank" rel="noopener noreferrer" className="group">{card}</a>
            ) : (
              <div key={w.title} className="group">{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
