"use client";

import { ViewMode } from './types';

interface ProjectHeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ProjectHeader({ viewMode, onViewModeChange }: ProjectHeaderProps) {
  return (
    <div className="relative mb-6 sm:mb-8 touch-auto">
      <div className="pt-4">
        <div className="mb-8 sm:mb-12">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-white/30 mb-3 sm:mb-4">
            Choose View
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onViewModeChange('default')}
              className={`font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border transition-all duration-300 ${
                viewMode === 'default' 
                  ? 'border-white/20 text-white/70 bg-white/5' 
                  : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
              }`}
            >
              Default
            </button>
            <button
              onClick={() => onViewModeChange('experimental')}
              className={`font-mono text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border transition-all duration-300 ${
                viewMode === 'experimental' 
                  ? 'border-white/20 text-white/70 bg-white/5' 
                  : 'border-white/10 text-white/30 hover:border-white/20 hover:text-white/50'
              }`}
            >
              Experimental
            </button>
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8 max-w-2xl space-y-2">
          <p className="text-white/70 font-light leading-[1.9] text-[14px] sm:text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            A collection of projects exploring design, technology, and human experience.
          </p>
          <p className="text-white/60 font-light leading-[1.9] text-[13px] sm:text-[14px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Not all projects added yet, still work in progress...
          </p>
        </div>
      </div>
    </div>
  );
}

