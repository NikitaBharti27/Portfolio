import { FloatingNav } from "@/ui/floating-navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Training from "@/components/Training";
import Certificates from "@/components/Certificates";
import ThemeToggle from "@/components/ThemeToggle";

// We will redefine navItems inline to match the new sections exactly
const APP_NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center overflow-x-hidden items-center flex-col mx-auto selection:bg-orange-500/30">
      <FloatingNav navItems={APP_NAV_ITEMS} />
      
      <div className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Training />

        <Contact />
        <Footer />
        <ThemeToggle />
      </div>
    </main>
  );
}
