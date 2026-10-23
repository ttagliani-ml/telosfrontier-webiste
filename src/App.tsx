import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Principles from "./components/Principles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Statement />
        <Services />
        <Approach />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
