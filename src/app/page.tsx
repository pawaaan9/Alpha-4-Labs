import Hero from "./components/hero";
import TechMarquee from "./components/tech-marquee";
import Services from "./components/services";
import TextBand from "./components/text-band";
import Process from "./components/process";
import FeaturedWork from "./components/featured-work";
import Industries from "./components/industries";
import Engagement from "./components/engagement";
import TechStack from "./components/tech-stack";
import WhyUs from "./components/why-us";
import Faq from "./components/faq";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <FeaturedWork />
      <TextBand />
      <Process />
      <WhyUs />
      <Industries />
      <TechStack />
      <Engagement />
      <Faq />
      <Contact />
    </>
  );
}
