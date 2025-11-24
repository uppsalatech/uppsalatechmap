import { themes, defaultTheme } from '../config/themes';

export function getCurrentTheme(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const urlTheme = urlParams.get('theme');

  if (urlTheme && themes[urlTheme]) {
    localStorage.setItem('theme', urlTheme);
    return urlTheme;
  }

  const storedTheme = localStorage.getItem('theme');
  if (storedTheme && themes[storedTheme]) {
    return storedTheme;
  }

  return defaultTheme;
}

export function applyTheme(themeId: string) {
  const theme = themes[themeId];
  if (!theme) return;

  // Update header
  const header = document.querySelector('header');
  if (header) {
    header.className = `${themeId}-header`;
  }

  // Update all theme-targeted elements
  document.querySelectorAll('[data-theme-target="card"]').forEach(el => {
    el.className = `card ${themeId}-card`;
  });

  document.querySelectorAll('[data-theme-target="name"]').forEach(el => {
    el.className = `name ${themeId}-name`;
  });

  document.querySelectorAll('[data-theme-target="jobs"]').forEach(el => {
    el.className = `jobs_url ${themeId}-jobs`;
  });

  document.querySelectorAll('[data-theme-target="title"]').forEach(el => {
    el.className = `${themeId}-title`;
  });

  document.querySelectorAll('[data-theme-target="stat-badge"]').forEach((el, index) => {
    const baseClass = index === 0 ? 'stat-badge' : 'stat-badge hiring-badge';
    el.className = `${baseClass} ${themeId}-stat-badge`;
  });

  document.querySelectorAll('[data-theme-target="link"]').forEach(el => {
    (el as HTMLElement).className = `${themeId}-link`;
  });
}

export function animateCounter(element: Element, target: number) {
  let current = 0;
  const increment = Math.ceil(target / 30);
  const duration = 1000;
  const stepTime = duration / (target / increment);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toString();
      clearInterval(timer);
    } else {
      element.textContent = current.toString();
    }
  }, stepTime);
}
