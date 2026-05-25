import React from 'react';
import RawHtml from './RawHtml.jsx';

const markup = `
<!-- =========================================================
         DEPENDENCY STRIP
         ========================================================= -->
    <section class="deps">
      <div class="item">
        <div class="k">RULE 01</div>
        <h3>Each layer has a unique role.</h3>
        <p>Don't try to make your runtime do RAG, or your model do retrieval. Sharp boundaries make every layer replaceable.</p>
      </div>
      <div class="item">
        <div class="k">RULE 02</div>
        <h3>Each layer depends on the one below.</h3>
        <p>Pick the bottom of the stack first — hardware sets the ceiling — because every layer above it inherits those constraints.</p>
      </div>
      <div class="item">
        <div class="k">RULE 03</div>
        <h3>Together they're a system.</h3>
        <p>A great model on the wrong runtime feels slow. A weak model with great context feels smart. The system wins, not any one layer.</p>
      </div>
      <div class="item">
        <div class="k">RULE 04</div>
        <h3>From energy to impact.</h3>
        <p>Local AI runs on all five. Master one a quarter and in 15 months you own the full stack — no cloud bill required.</p>
      </div>
    </section>
`;

export default function RulesSection() {
  return <RawHtml html={markup} />;
}
