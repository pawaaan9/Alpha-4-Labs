import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProductBySlug, products } from "@/app/data/products";

type ParamsPromise = Promise<{ slug: string }>; // Next.js 15 passes params as a Promise

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: ParamsPromise }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-sm text-foreground/70 hover:text-white">← Back to home</Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
        <div className="self-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{product.title}</h1>
          <p className="mt-4 text-foreground/80">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white">Request demo</a>
            <Link href={"/#products"} className="rounded-full px-6 py-3 font-semibold text-foreground/90 ring-1 ring-white/15 hover:bg-white/5">More products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


