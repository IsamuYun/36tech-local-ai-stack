import React from 'react';
import RawHtml from './RawHtml.jsx';

const markup = `
<!-- =========================================================
         HERO
         ========================================================= -->
    <section>
      <p class="eyebrow"><span class="num">01</span>&nbsp;<span>LOCAL AI DEPLOYMENT · 本地部署 · 2026</span></p>
      <div class="hero">
        <div>
          <h1>The <span class="ital">Local</span><br/>AI <span class="accent">Stack.</span></h1>
        </div>
        <div class="hero-right">
          <p class="lede">"Five layers that turn your own silicon into a private model server — no API key, no round-trip, no telemetry."</p>
          <p class="desc">A practical map of what it takes to deploy AI on hardware you own. Click any layer to expand its tools, dependencies and a copy-paste starter. Every word on this page is editable — drop in your own stack.</p>
        </div>
      </div>

      <div class="hero-foot">
        <div class="pair">
          <span class="k">LAYERS</span>
          <span class="v">05</span>
        </div>
        <div class="pair">
          <span class="k">RUNTIMES TRACKED</span>
          <span class="v">12<span class="sup">+</span></span>
        </div>
        <div class="pair">
          <span class="k">OPEN MODELS</span>
          <span class="v">240<span class="sup">+</span></span>
        </div>
        <div class="pair">
          <span class="k">LAST UPDATED</span>
          <span class="v">2026.05</span>
        </div>
        <div class="ctas">
          <a class="btn solid" href="#stack">Explore stack →</a>
          <a class="btn" href="#">GitHub</a>
        </div>
      </div>
    </section>
`;

export default function HeroSection() {
  return <RawHtml html={markup} />;
}
