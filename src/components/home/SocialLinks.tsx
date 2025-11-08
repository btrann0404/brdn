"use client";

import GlitchText from "@/components/effects/GlitchText";

export default function SocialLinks() {
  return (
    <div className="font-mono text-[10px] md:text-xs mb-8">
      <div className="flex items-center gap-3 flex-wrap">
        <a 
          href="https://github.com/btrann0404" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/50 font-light hover:text-white/80 active:text-white/80 transition-colors duration-300"
        >
          <GlitchText text="GITHUB" delay={0} speed={50} />
        </a>
        <span className="text-white/20">·</span>
        <a 
          href="https://linkedin.com/in/btrann0404" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/50 font-light hover:text-white/80 active:text-white/80 transition-colors duration-300"
        >
          <GlitchText text="LINKEDIN" delay={0} speed={50} />
        </a>
        <span className="text-white/20">·</span>
        <a 
          href="https://x.com/brdntran" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/50 font-light hover:text-white/80 active:text-white/80 transition-colors duration-300"
        >
          <GlitchText text="X" delay={0} speed={50} />
        </a>
        <span className="text-white/20">·</span>
        <a 
          href="tranbrandon04@gmail.com" 
          className="text-white/50 font-light hover:text-white/80 active:text-white/80 transition-colors duration-300"
        >
          <GlitchText text="EMAIL" delay={0} speed={50} />
        </a>
      </div>
    </div>
  );
}

