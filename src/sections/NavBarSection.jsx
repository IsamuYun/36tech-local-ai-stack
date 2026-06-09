import React from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Local AI', href: '/local-ai' },
  { label: 'The Stack', href: '/local-ai#stack' },
  { label: 'Docs', href: '#' },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function NavItem({ item }) {
  return (
    <li>
      <a className="topnav-link" href={item.href}>
        {item.label}
      </a>
    </li>
  );
}

export default function NavBarSection() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="localstack.dev home">
        <BrandMark />
        <span className="brand-name">
          localstack<span className="ital">.dev</span>
        </span>
      </a>

      <nav className="topnav" aria-label="Primary navigation">
        <ul className="topnav-list">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>
        <a className="topnav-cta" href="/local-ai#stack">
          Get started →
        </a>
      </nav>
    </header>
  );
}
