export type Work = {
  slug: string; // URL: /work/<slug>
  title: string;
  category: string;
  summary: string; // short line for cards
  image: string; // public path
  href?: string; // link to the live project
  tags: string[];
  services: string[]; // what we delivered
  stack: string[]; // names matching data/tech.ts
  overview: string;
  challenge: string;
  solution: string;
  features: { title: string; desc: string }[];
  quote?: string; // a line from the product itself or the client
};

// Add or edit previous works here. Each entry gets its own case-study page.
export const works: Work[] = [
  {
    slug: "aroma-notes",
    title: "Aroma Notes",
    category: "E-commerce",
    summary:
      "Online store for exclusive artisanal perfumes, with curated collections, layering bundles and instalment payments for the Sri Lankan market.",
    image: "/works/aromanotes.png",
    href: "https://www.aromanotes.lk/",
    tags: ["E-commerce", "Next.js", "Firebase", "Responsive web"],
    services: ["UI/UX Design", "Web Development", "E-commerce", "Hosting & deployment"],
    stack: ["Next.js", "React", "Firebase"],
    overview:
      "Aroma Notes is a Sri Lankan fragrance brand selling exclusive artisanal perfumes and decants. They needed an online store that feels as premium as their products and makes it easy for customers to discover, compare and buy fragrances in LKR.",
    challenge:
      "Perfume is hard to sell online: customers can't smell the product. The store had to tell a story around every scent, highlight best sellers and new arrivals, support bundles of smaller decants, and make premium pricing approachable for local shoppers.",
    solution:
      "We built a fast, image-led storefront on Next.js with products and media served from Firebase. Curated sections guide discovery, layering combos bundle decants into a single order, Payzy instalment pricing appears on every product, and WhatsApp and social links keep customers one tap away from the team.",
    features: [
      { title: "Curated collections", desc: "Best Sellers, New Arrivals and Masterpiece Fragrances sections guide shoppers to the right scent." },
      { title: "Layering bundles", desc: "“Better Together” combos group 10ml decants into one bundle that ships together." },
      { title: "Instalment pricing", desc: "Payzy 4-instalment amounts shown on every product to make premium perfumes accessible." },
      { title: "Brand-led browsing", desc: "Fragrances organised by house, including Tom Ford, Dior, Creed, YSL, Versace and more." },
      { title: "Sale pricing in LKR", desc: "Clear original and discounted prices in Sri Lankan rupees on every product card." },
      { title: "Social & WhatsApp", desc: "Direct WhatsApp ordering plus Instagram, Facebook and TikTok links for a social-first audience." },
    ],
    quote: "Where every scent tells a story.",
  },
];

export function findWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
