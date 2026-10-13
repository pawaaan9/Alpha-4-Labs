import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* decorative outline */}
        <div className="pointer-events-none absolute -right-24 top-[-80px] h-[600px] w-[600px] rounded-[48px] border border-white/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-white/10">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
              Alpha 4 Labs
            </span>
            <h1 className="mt-5 heading-display font-extrabold text-white">
              Discover the beauty of innovation
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                for the real world
              </span>
            </h1>
            <p className="mt-5 max-w-xl desc">
              We build immersive, intelligent products and services that help
              businesses move faster, smarter, and with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#works"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow hover:opacity-95"
              >
                View our work
              </a>
              <a
                href="#contact"
                className="rounded-full px-6 py-3 font-semibold text-foreground/90 ring-1 ring-white/15 hover:bg-white/5"
              >
                Contact us
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm md:max-w-none">
            <div className="relative aspect-square w-full max-w-md rounded-3xl border border-white/10 p-8 md:ms-auto">
              <Image
                src="/hero.png"
                alt="Alpha 4 Labs VR hero"
                width={520}
                height={520}
                className="mx-auto rounded-2xl drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


