import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <Hero />
      <Proof />

      {/* two faint warm pools, far apart, so the long scroll isn't flat black */}
      <div className="relative">
        <div
          aria-hidden
          className="glow-page pointer-events-none absolute inset-0"
        />

        <About />
        <Experience />
        <Projects />
        <Reviews />
        <Skills />
        <Contact />
        <Footer />
      </div>

      <ContactModal />
    </main>
  );
}
