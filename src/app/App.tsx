import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { Projects } from "./components/Projects";
import { UniversityProjects } from "./components/UniversityProjects";
import { Technologies } from "./components/Technologies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Projects />
      <UniversityProjects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
