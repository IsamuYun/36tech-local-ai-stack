const SUPPORTED_LANGUAGES = new Set(['en', 'cn']);

export const DEFAULT_LANGUAGE = 'en';

export const PAGE_PATHS = {
  home: '/',
  services: '/services',
  works: '/works',
  'hikvision-aem-migration': '/works/hikvision-aem-migration.html',
  'local-ai': '/local-ai',
  contact: '/contact',
};

const PAGE_BY_PATH = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([page, path]) => [path, page]),
);

function cleanPathname(pathname = '/') {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  return cleanPath.toLowerCase();
}

export function getRouteState(pathname = '/') {
  const cleanPath = cleanPathname(pathname);
  const segments = cleanPath === '/' ? [] : cleanPath.slice(1).split('/');
  const firstSegment = segments[0];
  const language = SUPPORTED_LANGUAGES.has(firstSegment) ? firstSegment : DEFAULT_LANGUAGE;
  const pagePath =
    language === DEFAULT_LANGUAGE && firstSegment !== DEFAULT_LANGUAGE
      ? cleanPath
      : `/${segments.slice(1).join('/')}`.replace(/\/+$/, '') || '/';

  const normalizedPagePath = pagePath === '/home' ? '/' : pagePath;
  const page = PAGE_BY_PATH[normalizedPagePath] || 'home';

  return {
    language,
    page,
    pagePath: PAGE_PATHS[page],
  };
}

export function buildLocalizedPath(page, language = DEFAULT_LANGUAGE) {
  const pagePath = PAGE_PATHS[page] || PAGE_PATHS.home;

  if (language === 'cn') {
    return pagePath === '/' ? '/cn' : `/cn${pagePath}`;
  }

  return pagePath === '/' ? '/en' : `/en${pagePath}`;
}

export function getLanguageToggle(pathname = '/') {
  const currentRoute = getRouteState(pathname);
  const nextLanguage = currentRoute.language === 'cn' ? 'en' : 'cn';

  return {
    currentLanguage: currentRoute.language,
    nextLanguage,
    href: buildLocalizedPath(currentRoute.page, nextLanguage),
    label: nextLanguage === 'cn' ? '🇨🇳中' : '🇺🇸EN',
    ariaLabel: nextLanguage === 'cn' ? '切换到中文版本' : 'Switch to English version',
  };
}
