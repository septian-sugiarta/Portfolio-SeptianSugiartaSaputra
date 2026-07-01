import About from "../sections/About.jsx";
import Contact from "../sections/Contact.jsx";
import Experience from "../sections/Experience.jsx";
import Hero from "../sections/Hero.jsx";
import Projects from "../sections/Projects.jsx";
import Skills from "../sections/Skills.jsx";

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default HomePage;
