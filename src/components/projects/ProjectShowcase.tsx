"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectPosition, ViewMode } from './types';
import { projects } from './data';
import ProjectHeader from './ProjectHeader';
import DefaultView from './DefaultView';
import ExperimentalView from './ExperimentalView';
import ComingSoonModal from '@/components/effects/ComingSoonModal';

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<ProjectPosition[]>([]);
  const [dragging, setDragging] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('default');
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const [showScrollHint, setShowScrollHint] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  useEffect(() => {
    const newPositions = projects.map((_, index) => {
      const rand = Math.random();
      
      let width, height;
      
      if (rand > 0.7) {
        width = 420;
        height = 300;
      } else if (rand > 0.4) {
        width = 280;
        height = 420;
      } else {
        width = 320;
        height = 440;
      }
      
      const cols = 3;
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      const colWidth = 28;
      const colGap = 2;
      const rowHeight = 460;
      
      const totalWidth = (colWidth * cols) + (colGap * (cols - 1));
      const centerOffset = (100 - totalWidth) / 2;
      
      const baseX = centerOffset + (col * (colWidth + colGap));
      const baseY = row * rowHeight + 30;
      
      const offsetX = (Math.random() - 0.5) * 8;
      const offsetY = (Math.random() - 0.5) * 50;
      
      return {
        x: baseX + offsetX,
        y: baseY + offsetY,
        rotation: (Math.random() - 0.5) * 8,
        scale: 0.95 + Math.random() * 0.1,
        width,
        height
      };
    });
    setPositions(newPositions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const windowHeight = window.innerHeight;
      
      if (window.scrollY > 50 && showScrollHint) {
        setShowScrollHint(false);
      }
      
      const newVisibleRows = new Set<number>();
      const projectCards = sectionRef.current.querySelectorAll('[data-project-index]');
      
      projectCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const index = parseInt(card.getAttribute('data-project-index') || '0');
        const rowIndex = Math.floor(index / 2);
        
        if (rect.top < windowHeight * 0.85) {
          newVisibleRows.add(rowIndex);
        }
      });
      
      setVisibleRows(newVisibleRows);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, showScrollHint]);

  const dragStateRef = useRef<{ 
    isDragging: boolean; 
    index: number; 
    offsetX: number; 
    offsetY: number;
    element: HTMLElement | null;
    startPos: { x: number; y: number };
  }>({
    isDragging: false,
    index: -1,
    offsetX: 0,
    offsetY: 0,
    element: null,
    startPos: { x: 0, y: 0 }
  });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!dragStateRef.current.isDragging || !dragStateRef.current.element || !sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const newX = ((e.clientX - rect.left - dragStateRef.current.offsetX) / rect.width) * 100;
      const newY = e.clientY - rect.top - dragStateRef.current.offsetY;
      
      const clampedX = Math.max(0, Math.min(88, newX));
      const clampedY = Math.max(0, Math.min(1400, newY));
      
      dragStateRef.current.element.style.left = `${clampedX}%`;
      dragStateRef.current.element.style.top = `${clampedY}px`;
      
      dragStateRef.current.startPos = { x: clampedX, y: clampedY };
    };

    const handleGlobalMouseUp = () => {
      if (dragStateRef.current.isDragging) {
        const index = dragStateRef.current.index;
        const finalPos = dragStateRef.current.startPos;
        
        setPositions(prev => prev.map((pos, i) => 
          i === index 
            ? { ...pos, x: finalPos.x, y: finalPos.y } 
            : pos
        ));
        
        dragStateRef.current.isDragging = false;
        dragStateRef.current.element = null;
        setDragging(null);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    if (e.button !== 0 || !sectionRef.current) return;
    e.preventDefault();
    
    const element = e.currentTarget as HTMLElement;
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const pos = positions[index];
    
    const elementLeft = (pos.x / 100) * sectionRect.width;
    const elementTop = pos.y;
    
    dragStateRef.current = {
      isDragging: true,
      index,
      offsetX: e.clientX - sectionRect.left - elementLeft,
      offsetY: e.clientY - sectionRect.top - elementTop,
      element,
      startPos: { x: pos.x, y: pos.y }
    };
    
    setDragging(index);
  };

  const handleProjectClick = () => {
    // If modal is already showing, restart it by changing key
    if (showModal) {
      setModalKey(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full overflow-visible"
    >
      <ProjectHeader viewMode={viewMode} onViewModeChange={setViewMode} />

      <div 
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        style={{
          opacity: showScrollHint ? 0.08 : 0,
          transition: 'opacity 1s ease-out 0.8s',
          pointerEvents: 'none'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
          className="w-6 h-6 text-white"
          style={{
            animation: 'gentleBounce 2s ease-in-out infinite'
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
      `}} />

      {viewMode === 'default' && (
        <DefaultView 
          projects={projects} 
          visibleRows={visibleRows}
          onProjectClick={handleProjectClick}
        />
      )}

      {viewMode === 'experimental' && (
        <ExperimentalView 
          projects={projects} 
          positions={positions}
          visibleRows={visibleRows}
          dragging={dragging}
          onMouseDown={handleMouseDown}
          onProjectClick={handleProjectClick}
        />
      )}

      <ComingSoonModal key={modalKey} isOpen={showModal} onClose={handleModalClose} />
    </div>
  );
}

