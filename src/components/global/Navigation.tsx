"use client";

export default function Navigation() {
  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="flex flex-row gap-6 text-[11px] tracking-[0.2em]">
        <a href="/" className="text-white/40 hover:text-white/90 active:text-white/90 hover:tracking-[0.25em] transition-all duration-300 uppercase">
          HOME
        </a>
        <a href="about" className="text-white/40 hover:text-white/90 active:text-white/90 hover:tracking-[0.25em] transition-all duration-300 uppercase">
          ABOUT
        </a>
        <a href="projects" className="text-white/40 hover:text-white/90 active:text-white/90 hover:tracking-[0.25em] transition-all duration-300 uppercase">
          PROJECTS
        </a>
        <a href="collection" className="text-white/40 hover:text-white/90 active:text-white/90 hover:tracking-[0.25em] transition-all duration-300 uppercase">
          COLLECTION
        </a>
      </div>
    </div>
  );
}

