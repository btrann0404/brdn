"use client";

import Image from "next/image";
import { Project, ProjectPosition } from './types';

interface ExperimentalViewProps {
  projects: Project[];
  positions: ProjectPosition[];
  visibleRows: Set<number>;
  dragging: number | null;
  zIndexOrder: number[];
  onMouseDown: (e: React.MouseEvent, index: number) => void;
  onTouchStart: (e: React.TouchEvent, index: number) => void;
  onProjectClick: () => void;
}

export default function ExperimentalView({ 
  projects, 
  positions, 
  visibleRows, 
  dragging,
  zIndexOrder,
  onMouseDown,
  onTouchStart,
  onProjectClick
}: ExperimentalViewProps) {
  return (
    <>
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 pt-16 sm:pt-32 pb-12">
        <p 
          className="text-white/40 font-light text-[12px] sm:text-[13px]"
          style={{ 
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            letterSpacing: '0.01em',
            lineHeight: '1.6'
          }}
        >
          <span className="hidden sm:inline">Drag and rearrange the cards to explore the collection.</span>
          <span className="sm:hidden">Tap and drag cards to explore the collection.</span>
          <br />
          <span className="text-white/20 text-[11px] sm:text-xs">Each card is interactive and can be repositioned.</span>
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 px-4 sm:px-0 touch-pan-y min-h-[2400px] sm:min-h-[1600px]">
        {positions.length > 0 && projects.map((project, index) => {
          const pos = positions[index];
          const rowIndex = Math.floor(index / 2);
          const isRowVisible = visibleRows.has(rowIndex);
          
          // Calculate z-index based on position in interaction queue
          const orderIndex = zIndexOrder.indexOf(index);
          let calculatedZIndex;
          if (dragging === index) {
            calculatedZIndex = 9999; // Currently dragging - highest
          } else if (orderIndex !== -1) {
            calculatedZIndex = 100 + orderIndex; // In queue - stack based on order
          } else {
            calculatedZIndex = 10 + index; // Default - base layer
          }
          
          return (
            <div
              key={project.name}
              data-project-index={index}
              className="absolute cursor-move group"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}px`,
                transform: dragging === index 
                  ? `rotate(${pos.rotation}deg) scale(${pos.scale * 1.05})` 
                  : `rotate(${pos.rotation}deg) scale(${pos.scale})`,
                width: `${pos.width}px`,
                height: `${pos.height}px`,
                opacity: isRowVisible ? 1 : 0,
                transition: dragging === index ? 'none' : `opacity 0.8s ease-out`,
                zIndex: calculatedZIndex,
                willChange: dragging === index ? 'left, top, transform' : 'auto',
                touchAction: dragging === index ? 'none' : 'pan-y'
              }}
              onMouseDown={(e) => onMouseDown(e, index)}
              onTouchStart={(e) => onTouchStart(e, index)}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black -m-2">
                  <div className="absolute inset-0 border-2 border-zinc-700/30" />
                  <div className="absolute inset-1 border border-zinc-600/20" />
                </div>
                
                <div 
                  className="relative w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border-2 border-zinc-700/40 shadow-[8px_8px_20px_rgba(0,0,0,0.6)] group-hover:shadow-[10px_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-radial from-white/3 via-transparent to-transparent pointer-events-none z-10" />
                  
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 font-mono text-[8px] sm:text-[9px] text-white/40 tracking-wider z-20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 w-2 sm:w-3 h-2 sm:h-3 border-t border-l border-zinc-600/40 z-20" />
                  <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 sm:w-3 h-2 sm:h-3 border-t border-r border-zinc-600/40 z-20" />
                  
                  <div className="relative flex items-center justify-center px-4 sm:px-8 pt-8 sm:pt-14 pb-4 sm:pb-6" style={{ height: '68%' }}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={project.alt}
                        fill
                        className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        sizes={`${pos.width}px`}
                        draggable={false}
                      />
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
                  </div>
                  
                  <div 
                    className="absolute bottom-0 left-0 right-0 px-3 sm:px-6 py-3 sm:py-5 bg-gradient-to-br from-zinc-900/90 via-black/95 to-zinc-950/90 backdrop-blur-sm border-t border-zinc-700/30"
                  >
                    <div className="mb-2 sm:mb-3">
                      <h3 
                        className="leading-tight mb-1 text-white/90 font-light tracking-wide"
                        style={{ 
                          fontFamily: 'Georgia, serif',
                          fontSize: pos.width > 250 ? (pos.width > 320 ? '18px' : '14px') : '12px',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="font-mono text-[6px] sm:text-[7px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40">
                        {project.category}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-zinc-700/30">
                      <span className="font-mono text-[7px] sm:text-[8px] text-white/30 tracking-wider">
                        {project.year}
                      </span>
                      <button 
                        className="font-mono text-[6px] sm:text-[7px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/50 hover:text-white/80 underline underline-offset-2 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          onProjectClick();
                        }}
                      >
                        View →
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 w-2 sm:w-3 h-2 sm:h-3 border-b border-l border-zinc-600/40 z-20" />
                  <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 w-2 sm:w-3 h-2 sm:h-3 border-b border-r border-zinc-600/40 z-20" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-md mx-auto mt-24">
        <p className="font-mono text-[8px] tracking-[0.35em] uppercase text-white/25 text-center">
          Drag to rearrange · Click to explore
        </p>
      </div>
    </>
  );
}

