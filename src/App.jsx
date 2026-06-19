import React, { useEffect } from 'react';
import FooterSection from './sections/FooterSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import EnHomeSection from './sections/en/home/HomeSection.jsx';
import CnHomeSection from './sections/cn/home/HomeSection.jsx';
import CnAboutSection from './sections/cn/AboutSection.jsx';
import EnAboutSection from './sections/en/AboutSection.jsx';
import EnServicesSection from './sections/en/ServicesSection.jsx';
import RulesSection from './sections/RulesSection.jsx';
import StackSection from './sections/StackSection.jsx';
import NavBarSection from './sections/NavBarSection.jsx';
import EnContactSection from './sections/en/contact/ContactSection.jsx';
import CnContactSection from './sections/cn/contact/ContactSection.jsx';
import WorksSection from './sections/WorksSection.jsx';
import CnAiTrainerCaseStudySection from './sections/cn/works/AiTrainerCaseStudySection.jsx';
import CnHikvisionAemMigrationSection from './sections/cn/works/HikvisionAemMigrationSection.jsx';
import EnHikvisionAemMigrationSection from './sections/en/works/HikvisionAemMigrationSection.jsx';
import EnAiTrainerCaseStudySection from './sections/en/works/AiTrainerCaseStudySection.jsx';
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

function ServicesPage({ language }) {
  return (
    <main className="page page-services">
      <HeroSection />
      <NavBarSection />
      <EnServicesSection language={language} />
      <FooterSection />
    </main>
  );
}

function AboutPage({ language }) {
  const AboutSection = language === 'cn' ? CnAboutSection : EnAboutSection;

  return (
    <main className="page page-about">
      <HeroSection />
      <NavBarSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}

function ContactPage({ language }) {
  const ContactSection = language === 'cn' ? CnContactSection : EnContactSection;

  return (
    <main className="page page-contact">
      <NavBarSection />
      <ContactSection />
    </main>
  );
}

function WorksPage({ language }) {
  return (
    <main className="page page-works">
      <NavBarSection />
      <WorksSection language={language} />
      <FooterSection />
    </main>
  );
}

function HikvisionAemMigrationPage({ language }) {
  const HikvisionAemMigrationSection = language === 'cn'
    ? CnHikvisionAemMigrationSection
    : EnHikvisionAemMigrationSection;

  return (
    <main className="page page-hikvision-aem-migration">
      <NavBarSection />
      <HikvisionAemMigrationSection />
      <FooterSection />
    </main>
  );
}

function AiTrainerPage({ language }) {
  const AiTrainerCaseStudySection = language === 'cn'
    ? CnAiTrainerCaseStudySection
    : EnAiTrainerCaseStudySection;

  return (
    <main className="page page-ai-trainer">
      <NavBarSection />
      <AiTrainerCaseStudySection />
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

  if (currentPage === 'services') {
    return <ServicesPage language={currentRoute.language} />;
  }

  if (currentPage === 'about') {
    return <AboutPage language={currentRoute.language} />;
  }

  if (currentPage === 'contact') {
    return <ContactPage language={currentRoute.language} />;
  }

  if (currentPage === 'works') {
    return <WorksPage language={currentRoute.language} />;
  }

  if (currentPage === 'hikvision-aem-migration') {
    return <HikvisionAemMigrationPage language={currentRoute.language} />;
  }

  if (currentPage === 'ai-trainer') {
    return <AiTrainerPage language={currentRoute.language} />;
  }

  return <HomePage />;
}

export default App;
