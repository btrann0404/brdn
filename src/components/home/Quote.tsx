"use client";

import GlitchText from "@/components/effects/GlitchText";

export default function Quote() {
  return (
    <div className="mb-12 sm:mb-16 max-w-md border-l border-white/10 pl-3 sm:pl-4 group cursor-pointer" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <GlitchText 
        text="&quot;I don't think of myself as anyone special, and I would not know how to define myself.&quot;"
        as="p"
        delay={0}
        speed={50}
        className="text-sm sm:text-md text-white/60 group-hover:text-white/80 group-active:text-white/80 font-light leading-relaxed mb-2 italic transition-colors duration-300"
      />
      <GlitchText 
        text="— REI KAWAKUBO"
        as="p"
        delay={0}
        speed={50}
        className="text-[9px] sm:text-[10px] text-white/40 group-hover:text-white/60 group-active:text-white/60 font-light tracking-wider transition-colors duration-300"
      />
    </div>
  );
}

