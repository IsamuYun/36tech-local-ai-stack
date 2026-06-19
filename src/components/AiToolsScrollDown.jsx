import React from 'react';
import ScrollDownButton from './ScrollDownButton.jsx';

export default function AiToolsScrollDown({
  href = '#ai-tools-in-focus',
  ariaLabel = 'Scroll to the next section',
}) {
  return (
    <div className="home-ai-scroll-control">
      <div className="home-ai-container">
        <div className="home-ai-reveal home-ai-hero-cta home-ai-hero-cta-row">
          <ScrollDownButton
            href={href}
            ariaLabel={ariaLabel}
            color="var(--home-ai-fg)"
            focusColor="var(--home-ai-accent)"
          />
        </div>
      </div>
    </div>
  );
}
