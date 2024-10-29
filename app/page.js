// pages/index.js
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Resume from "@components/Resume";

export default function Home() {
  return (
      <>
        <main className={`font-[family-name:var(--font-robot-slab-regular]`}>
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </>
  );
}
