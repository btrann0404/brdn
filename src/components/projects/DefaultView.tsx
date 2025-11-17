"use client";

import Image from "next/image";
import { Project } from './types';

interface DefaultViewProps {
  projects: Project[];
  visibleRows: Set<number>;
}

export default function DefaultView({ projects, visibleRows }: DefaultViewProps) {
  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {projects.map((project, index) => {
          const rowIndex = Math.floor(index / 2);
          const isRowVisible = visibleRows.has(rowIndex);
          
          return (
            <div
              key={project.name}
              data-project-index={index}
              className="group cursor-pointer"
              style={{
                opacity: isRowVisible ? 1 : 0,
                transform: isRowVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease-out, transform 0.8s ease-out`
              }}
              onClick={() => alert(`View ${project.name} case study`)}
            >
              <div className="mb-8 flex items-baseline justify-between">
                <div>
                  <h3 
                    className="text-white font-light tracking-tight mb-1"
                    style={{ 
                      fontFamily: 'Helvetica Neue, Arial, sans-serif',
                      fontSize: '24px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {project.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
                    {project.category}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative w-full aspect-video bg-black/40 border border-white/[0.08] overflow-hidden group-hover:border-white/[0.12] transition-all duration-500">
                <div className="relative w-full h-full flex items-center justify-center p-16 md:p-20">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.logo}
                      alt={project.alt}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>

              <p 
                className="text-white/40 font-light mt-4"
                style={{ 
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.005em',
                  lineHeight: '1.6'
                }}
              >
                {project.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

