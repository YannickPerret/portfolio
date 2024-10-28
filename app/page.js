// pages/index.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
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
        <Head>
          <title>Perret Yannick - Portfolio</title>
          <meta name="description" content="Portfolio de [Votre Nom]" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>
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
