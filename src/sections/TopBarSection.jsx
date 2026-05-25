import React from 'react';
import RawHtml from './RawHtml.jsx';

const markup = `
<header class="topbar">
      <div class="brand">
        <span class="brand-mark"><span></span><span></span><span></span></span>
        <span class="brand-name">localstack<span class="ital">.dev</span></span>
      </div>
      <nav class="topnav">
        <span class="links" style="display:flex; gap:28px;">
          <a href="#stack">The Stack</a>
          <a href="#">Models</a>
          <a href="#">Runtime</a>
          <a href="#">Docs</a>
        </span>
        <a class="pill" href="#">Get started →</a>
      </nav>
    </header>
`;

export default function TopBarSection() {
  return <RawHtml html={markup} />;
}
