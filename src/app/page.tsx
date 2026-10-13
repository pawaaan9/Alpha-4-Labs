import Footer from "./components/footer";
import Hero from "./components/hero";
import PreviousWorks from "./components/previous-works";
import Services from "./components/services";
import Objectives from "./components/objectives";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PreviousWorks />
      <Services />
      <Objectives />
      <Contact />
      <Footer />
    </div>
  );
}
