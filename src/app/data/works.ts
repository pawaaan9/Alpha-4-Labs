export type Work = {
  title: string;
  category: string;
  description: string;
  image: string; // public path
  href?: string; // optional link to the live project / case study
};

// Add or edit previous works here; the section on the home page renders from this list.
export const works: Work[] = [
  {
    title: "Aroma Notes",
    category: "E-commerce",
    description: "Online store for exclusive artisanal perfumes, with LKR pricing for the Sri Lankan market.",
    image: "/works/aromanotes.png",
    href: "https://www.aromanotes.lk/",
  },
];
