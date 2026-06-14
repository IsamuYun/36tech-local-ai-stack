import React, { useEffect } from 'react';
import FooterSection from './sections/FooterSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import EnHomeSection from './sections/en/home/HomeSection.jsx';
import CnHomeSection from './sections/cn/home/HomeSection.jsx';
import RulesSection from './sections/RulesSection.jsx';
import StackSection from './sections/StackSection.jsx';
import NavBarSection from './sections/NavBarSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import WorksSection from './sections/WorksSection.jsx';
import { getRouteState } from './routes.js';

function HomePage() {
  return (
    <main className="page page-home">
      <HeroSection />
      <NavBarSection />
      <EnHomeSection />
      <FooterSection />
    </main>
  );
}

function CnHomePage() {
  return (
    <main className="page page-home page-home-cn">
      <HeroSection />
      <NavBarSection />
      <CnHomeSection />
      <FooterSection />
    </main>
  );
}

function LocalAiPage() {
  useEffect(() => {
    const disposers = [];

    const firstLayer = document.querySelector('.layer');
    firstLayer?.classList.add('open');

    document.querySelectorAll('[data-toggle]').forEach((face) => {
      const onClick = (event) => {
        face.closest('.layer')?.classList.toggle('open');
      };
      face.addEventListener('click', onClick);
      disposers.push(() => face.removeEventListener('click', onClick));
    });

    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'e') {
        event.preventDefault();
        document.querySelectorAll('.layer').forEach((layer) => layer.classList.add('open'));
      }
      if ((event.metaKey || event.ctrlKey) && event.key === '.') {
        event.preventDefault();
        document.querySelectorAll('.layer').forEach((layer) => layer.classList.remove('open'));
      }
    };
    document.addEventListener('keydown', onKeyDown);
    disposers.push(() => document.removeEventListener('keydown', onKeyDown));

    return () => disposers.forEach((dispose) => dispose());
  }, []);

  return (
    <main className="page page-local-ai">
      <HeroSection />
      <NavBarSection />
      <StackSection />
      <RulesSection />
      <FooterSection />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="page page-contact">
      <NavBarSection />
      <ContactSection />
    </main>
  );
}

function WorksPage() {
  return (
    <main className="page page-works">
      <NavBarSection />
      <WorksSection />
      <FooterSection />
    </main>
  );
}

function getCurrentRoute() {
  return getRouteState(window.location.pathname);
}

function App() {
  const currentRoute = getCurrentRoute();
  const currentPage = currentRoute.page;

  if (currentPage === 'home' && currentRoute.language === 'cn') {
    return <CnHomePage />;
  }

  if (currentPage === 'local-ai') {
    return <LocalAiPage />;
  }

  if (currentPage === 'contact') {
    return <ContactPage />;
  }

  if (currentPage === 'works') {
    return <WorksPage />;
  }

  return <HomePage />;
}

export default App;
