import Footer from "./components/footer";
import Hero from "./components/hero";
import Products from "./components/products";
import Services from "./components/services";
import Objectives from "./components/objectives";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Products />
      <Services />
      <Objectives />
      <Contact />
      <Footer />
    </div>
  );
}
