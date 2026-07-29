import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Loader />
      <CustomCursor />
      <Navbar />
      <Hero />

      {/* two faint warm pools, far apart, so the long scroll isn't flat black */}
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-clay/10 absolute top-[18%] -left-52 h-[34rem] w-[34rem] rounded-full blur-[150px]" />
          <div className="bg-ember/8 absolute top-[68%] -right-52 h-[34rem] w-[34rem] rounded-full blur-[150px]" />
        </div>

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
