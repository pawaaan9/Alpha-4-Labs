import type { Metadata } from "next";
import Contact from "../components/contact";
import PageHeader from "../components/page-header";
import Reveal from "../components/reveal";
import WorkCard from "../components/work-card";
import { works } from "../data/works";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies of products designed and built by Alpha 4 Labs.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Work" }]}
        eyebrow="Case studies"
        title="Work we're proud of"
        description="Real products, live and in use. Explore the challenge, our approach and what we delivered for each one."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {works.map((w, i) => (
            <Reveal key={w.slug}>
              <WorkCard work={w} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
