import React, { useEffect } from 'react';
import FooterSection from './sections/FooterSection.jsx';
import HeroSection from './sections/HeroSection.jsx';
import RulesSection from './sections/RulesSection.jsx';
import StackSection from './sections/StackSection.jsx';
import TopBarSection from './sections/TopBarSection.jsx';

function App() {
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
    <>
      <main className="page">
        <HeroSection />
        <TopBarSection />
        <StackSection />
        <RulesSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
