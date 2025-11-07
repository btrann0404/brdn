"use client";

import GlitchText from "@/components/effects/GlitchText";

export default function Navigation() {
  return (
    <div className="fixed top-8 right-8 group">
      <div className="relative">
        <div className="text-white/50 hover:text-white/80 transition-colors duration-300 text-[11px] tracking-[0.35em] cursor-pointer text-right uppercase font-light">
          <GlitchText text="INDEX" delay={0} speed={50} />
        </div>
        <div className="absolute -bottom-0.5 right-0 w-0 group-hover:w-full h-px bg-white/20 transition-all duration-500"></div>
      </div>
      
      <div className="absolute top-10 right-0 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 flex flex-col gap-4 text-[11px] tracking-[0.2em] pt-4">
        <div className="relative group/item">
          <div className="absolute right-0 -mr-3 top-1/2 -translate-y-1/2 w-0 group-hover/item:w-1.5 h-px bg-white/30 transition-all duration-300"></div>
          <a href="#home" className="text-white/40 hover:text-white/90 hover:tracking-[0.25em] transition-all duration-300 text-right block">
            ABOUT
          </a>
        </div>
        <div className="relative group/item">
          <div className="absolute right-0 -mr-3 top-1/2 -translate-y-1/2 w-0 group-hover/item:w-1.5 h-px bg-white/30 transition-all duration-300"></div>
          <a href="#work" className="text-white/40 hover:text-white/90 hover:tracking-[0.25em] transition-all duration-300 text-right block">
            PROJECTS
          </a>
        </div>
        <div className="relative group/item">
          <div className="absolute right-0 -mr-3 top-1/2 -translate-y-1/2 w-0 group-hover/item:w-1.5 h-px bg-white/30 transition-all duration-300"></div>
          <a href="#about" className="text-white/40 hover:text-white/90 hover:tracking-[0.25em] transition-all duration-300 text-right block">
            COLLECTION
          </a>
        </div>
      </div>
    </div>
  );
}

