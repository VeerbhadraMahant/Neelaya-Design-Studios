import { useState } from 'react';
import { useScrollState } from './hooks/useScrollState.js';
import CursorDot from './components/CursorDot.jsx';
import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import StatsBand from './components/StatsBand.jsx';
import Services from './components/Services.jsx';
import WorkCarousel from './components/WorkCarousel.jsx';
import Process from './components/Process.jsx';
import Studio from './components/Studio.jsx';
import Reviews from './components/Reviews.jsx';
import FAQ from './components/FAQ.jsx';
import CTABand from './components/CTABand.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const { scrolled, pastFold } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <CursorDot />

      <Header scrolled={scrolled} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="top">
        <Hero />
        <Intro />
        <StatsBand />
        <Services />
        <WorkCarousel />
        <Process />
        <Studio />
        <Reviews />
        <FAQ />
        <CTABand />
        <Contact />
      </main>

      <Footer />
      <BackToTop visible={pastFold} />
    </>
  );
}
