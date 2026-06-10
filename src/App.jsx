import React, { useEffect } from 'react';
import FooterSection from './sections/FooterSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AiToolsSection from './sections/home/AiToolsSection.jsx';
import CnAiToolsSection from './sections/cn/AiToolsSection.jsx';
import RulesSection from './sections/RulesSection.jsx';
import StackSection from './sections/StackSection.jsx';
import NavBarSection from './sections/NavBarSection.jsx';

function HomePage() {
  return (
    <main className="page page-home">
      <HeroSection />
      <NavBarSection />
      <AiToolsSection />
      <FooterSection />
    </main>
  );
}

function CnHomePage() {
  return (
    <main className="page page-home page-home-cn">
      <HeroSection />
      <NavBarSection />
      <CnAiToolsSection />
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

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  if (path === '/cn') {
    return 'cn';
  }

  if (path === '/local-ai') {
    return 'local-ai';
  }

  return 'home';
}

function App() {
  const currentPage = getCurrentPage();

  if (currentPage === 'local-ai') {
    return <LocalAiPage />;
  }

  if (currentPage === 'cn') {
    return <CnHomePage />;
  }

  return <HomePage />;
}

export default App;
