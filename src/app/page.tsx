import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
