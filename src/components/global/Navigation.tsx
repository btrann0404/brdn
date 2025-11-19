"use client";

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(`/${path}`);
  };

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `relative tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-500 ${
      active 
        ? 'text-white/90 pointer-events-none' 
        : 'text-white/40 hover:text-white/90 active:text-white/90 sm:hover:tracking-[0.25em] cursor-pointer'
    }`;
  };

  return (
    <div className="fixed top-6 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 backdrop-blur-sm bg-black/10 px-3 py-2 sm:px-4 sm:py-3 rounded-sm">
      <div className="flex flex-row gap-3.5 sm:gap-4 md:gap-6 text-[10px] sm:text-[10px] md:text-[11px]">
        <a href="/" className={linkClass('/')}>
          {isActive('/') && <span className="absolute -left-2 sm:-left-3 top-[2px] text-white/60 text-[7px] sm:text-[8px]">✦</span>}
          HOME
        </a>
        <a href="/about" className={linkClass('about')}>
          {isActive('about') && <span className="absolute -left-2 sm:-left-3 top-[2px] text-white/60 text-[7px] sm:text-[8px]">✦</span>}
          ABOUT
        </a>
        <a href="/projects" className={linkClass('projects')}>
          {isActive('projects') && <span className="absolute -left-2 sm:-left-3 top-[2px] text-white/60 text-[7px] sm:text-[8px]">✦</span>}
          PROJECTS
        </a>
        <a href="/collection" className={linkClass('collection')}>
          {isActive('collection') && <span className="absolute -left-2 sm:-left-3 top-[2px] text-white/60 text-[7px] sm:text-[8px]">✦</span>}
          COLLECTION
        </a>
      </div>
    </div>
  );
}

