import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            Purpose-built tools to help you deliver delightful digital products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow group-hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full bg-white/5">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{p.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-white">
                    View product
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


