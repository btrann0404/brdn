"use client";

import GlitchText from "@/components/effects/GlitchText";
import { ViewMode } from './types';

interface ProjectHeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ProjectHeader({ viewMode, onViewModeChange }: ProjectHeaderProps) {
  return (
    <div className="relative mb-16">
      <div className="">
        <div className="mb-2">
          <GlitchText 
            text="Projects"
            as="h1"
            delay={0}
            speed={50}
            className="font-sans text-5xl sm:text-4xl md:text-7xl lg:text-4xl font-light text-white leading-none" 
            style={{ fontFamily: 'var(--font-inter)' }}
          />
        </div>
        
        <div className="mb-8 max-w-2xl">
          <GlitchText 
            text="A collection of projects exploring design, technology, and human experience."
            as="p"
            delay={0}
            speed={50}
            className="text-sm text-white/70 font-light leading-relaxed uppercase tracking-wide font-mono"
          />
        </div>
        
        <div className="mt-8">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Choose View
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onViewModeChange('default')}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                viewMode === 'default' 
                  ? 'border-white/20 text-white/70 bg-white/5' 
                  : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
              }`}
            >
              Default
            </button>
            <button
              onClick={() => onViewModeChange('experimental')}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                viewMode === 'experimental' 
                  ? 'border-white/20 text-white/70 bg-white/5' 
                  : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
              }`}
            >
              Experimental
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

