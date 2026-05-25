import React from 'react';
import RawHtml from './RawHtml.jsx';

const markup = `
<!-- =========================================================
         FOOTER
         ========================================================= -->
    <div class="footnote">
      <span>36 Tech Studio · The Local AI Deployment</span>
      <span></span>
    </div>
`;

export default function FooterSection() {
  return <RawHtml html={markup} />;
}
