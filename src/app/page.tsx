import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
    </>
  );
}
