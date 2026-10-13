export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string; // public path
};

export const products: Product[] = [
  {
    slug: "hotel-booking-system",
    title: "Hotel Booking System",
    description: "A complete platform for reservations, availability, and channel management.",
    image: "/products/hotel.svg",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    description: "EMR, appointments, billing, and inventory in one secure solution.",
    image: "/products/hospital.svg",
  },
  {
    slug: "hard-labor-booking-system",
    title: "Hard Labor Booking System",
    description: "Match skilled labor with demand; scheduling, tracking, and payouts.",
    image: "/products/labor.svg",
  },
  {
    slug: "learning-material-booking-system",
    title: "Learning Material Booking System",
    description: "Reserve and distribute educational resources with audit-friendly tracking.",
    image: "/products/learning.svg",
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}


