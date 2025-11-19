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
    return `relative text-[11px] tracking-[0.2em] uppercase transition-all duration-500 ${
      active 
        ? 'text-white/90 pointer-events-none' 
        : 'text-white/40 hover:text-white/90 active:text-white/90 hover:tracking-[0.25em] cursor-pointer'
    }`;
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="flex flex-row gap-6">
        <a href="/" className={linkClass('/')}>
          {isActive('/') && <span className="absolute -left-3 top-[2px] text-white/60 text-[8px]">✦</span>}
          HOME
        </a>
        <a href="/about" className={linkClass('about')}>
          {isActive('about') && <span className="absolute -left-3 top-[2px] text-white/60 text-[8px]">✦</span>}
          ABOUT
        </a>
        <a href="/projects" className={linkClass('projects')}>
          {isActive('projects') && <span className="absolute -left-3 top-[2px] text-white/60 text-[8px]">✦</span>}
          PROJECTS
        </a>
        <a href="/collection" className={linkClass('collection')}>
          {isActive('collection') && <span className="absolute -left-3 top-[2px] text-white/60 text-[8px]">✦</span>}
          COLLECTION
        </a>
      </div>
    </div>
  );
}

