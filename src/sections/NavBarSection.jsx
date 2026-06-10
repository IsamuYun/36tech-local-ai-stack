import React from 'react';
import { FileText, Home, Layers3, Cpu } from 'lucide-react';
import faviconIcon from '../assets/icon/favicon.ico';

const navItems = [
  { label: 'Home', href: '/', Icon: Home },
  { label: 'Local AI', href: '/local-ai', Icon: Cpu },
  { label: 'The Stack', href: '/local-ai#stack', Icon: Layers3 },
  { label: 'Docs', href: '#', Icon: FileText },
];

function NavItem({ item }) {
  const Icon = item.Icon;

  return (
    <li>
      <a className="topnav-link" href={item.href}>
        <Icon className="topnav-icon" aria-hidden="true" />
        {item.label}
      </a>
    </li>
  );
}

export default function NavBarSection() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="36 tech studio home">
        <img className="brand-icon" src={faviconIcon} alt="" aria-hidden="true" />
        <span className="brand-name">
          AI Tools by Karl
        </span>
      </a>

      <nav className="topnav" aria-label="Primary navigation">
        <ul className="topnav-list">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </ul>
        <a className="topnav-cta" href="/cn" aria-label="切换到中文页面">
          <span className="topnav-flag" aria-hidden="true">
            🇨🇳
          </span>
          <span>中</span>
        </a>
      </nav>
    </header>
  );
}
