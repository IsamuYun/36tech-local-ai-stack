import React from 'react';
import { Home, Info, Layers3, Cpu, Send, Album, GraduationCap } from 'lucide-react';
import faviconIcon from '../assets/icon/favicon.ico';
import { buildLocalizedPath, getLanguageToggle, getRouteState } from '../routes.js';

const navItems = [
  { page: 'home', label: { en: 'Home', cn: '首页' }, Icon: Home },
  { page: 'about', label: { en: 'About Us', cn: '关于' }, Icon: Info },
  { page: 'services', label: { en: 'Services', cn: '服务' }, Icon: Layers3 },
  { page: 'works', label: { en: 'Works', cn: '作品' }, Icon: Album },
  { page: 'ai-trainer', label: { en: 'AI Trainer', cn: 'AI 培训' }, Icon: GraduationCap },
  { page: 'local-ai', label: { en: 'Local AI', cn: '本地 AI' }, Icon: Cpu },
  { page: 'contact', label: { en: 'Contact', cn: '联系' }, Icon: Send },
];

function NavItem({ item, currentLanguage, currentPage }) {
  const Icon = item.Icon;
  const isCurrent = item.page === currentPage;

  return (
    <li>
      <a
        className="topnav-link"
        href={buildLocalizedPath(item.page, currentLanguage)}
        aria-current={isCurrent ? 'page' : undefined}
      >
        <Icon className="topnav-icon" aria-hidden="true" />
        {item.label[currentLanguage]}
      </a>
    </li>
  );
}

export default function NavBarSection() {
  const pathname = window.location.pathname;
  const route = getRouteState(pathname);
  const languageToggle = getLanguageToggle(pathname);

  return (
    <header className="topbar">
      <a
        className="brand"
        href={buildLocalizedPath('home', route.language)}
        aria-label="36 tech studio home"
      >
        <img className="brand-icon" src={faviconIcon} alt="" aria-hidden="true" />
        <span className="brand-name">
          AI-Powered by 36 Tech
        </span>
      </a>

      <nav className="topnav" aria-label="Primary navigation">
        <ul className="topnav-list">
          {navItems.map((item) => (
            <NavItem
              key={item.page}
              item={item}
              currentLanguage={route.language}
              currentPage={route.page}
            />
          ))}
        </ul>
        <a className="topnav-cta" href={languageToggle.href} aria-label={languageToggle.ariaLabel}>
          <span>{languageToggle.label}</span>
        </a>
      </nav>
    </header>
  );
}
