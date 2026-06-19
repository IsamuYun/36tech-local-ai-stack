import React from 'react';
import '../css/scroll-down-button.css';

export default function ScrollDownButton({
  href,
  ariaLabel = 'Scroll to the next section',
  className = '',
  color,
  focusColor,
  style,
  ...props
}) {
  const scrollDownStyle = {
    ...(color ? { '--scroll-down-color': color } : {}),
    ...(focusColor ? { '--scroll-down-focus-color': focusColor } : {}),
    ...style,
  };

  return (
    <a
      className={`scroll-down-button ${className}`.trim()}
      href={href}
      aria-label={ariaLabel}
      style={scrollDownStyle}
      {...props}
    >
      <span aria-hidden="true" />
    </a>
  );
}
