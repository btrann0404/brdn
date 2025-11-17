"use client";

import { ViewMode } from './types';

interface ProjectHeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function ProjectHeader({ viewMode, onViewModeChange }: ProjectHeaderProps) {
  return (
    <div className="relative mb-8">
      <div className="pt-4">
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-4">
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
        
        <div className="mb-8 max-w-2xl">
          <p className="text-white/70 font-light leading-[1.9] text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            A collection of projects exploring design, technology, and human experience.
          </p>
          <p className="text-white/70 font-light leading-[1.9] text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Not all projects added yet, still work in progress...
          </p>
        </div>
      </div>
    </div>
  );
}

