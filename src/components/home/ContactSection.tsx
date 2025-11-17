"use client";

import { useState } from "react";
import GlitchText from "@/components/effects/GlitchText";
import ComingSoonModal from "@/components/effects/ComingSoonModal";

export default function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If modal is already showing, restart it by changing key
    if (showModal) {
      setModalKey(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="lg:fixed lg:right-8 lg:bottom-8 lg:z-10 max-w-sm mt-16 lg:mt-0">
        <div className="space-y-6">
          <div className="font-mono text-[12px] leading-[1.8] tracking-wide text-white/40">
            <GlitchText 
              text="Open to connecting"
              as="span"
              delay={0}
              speed={50}
            />
            <br />
            <GlitchText 
              text="and chatting about"
              as="span"
              delay={0}
              speed={50}
            />
            <br />
            <GlitchText 
              text="projects, ideas,"
              as="span"
              delay={0}
              speed={50}
            />
            <br />
            <GlitchText 
              text="or opportunities."
              as="span"
              delay={0}
              speed={50}
            />
          </div>
          
          <div className="space-y-2">
            <button
              onClick={handleClick}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
              </svg>
              <GlitchText 
                text="Schedule a chat"
                as="span"
                delay={0}
                speed={50}
              />
            </button>
            <button
              onClick={handleClick}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/>
              </svg>
              <GlitchText 
                text="Leave a note"
                as="span"
                delay={0}
                speed={50}
              />
            </button>
            <button
              onClick={handleClick}
              className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2"/>
              </svg>
              <GlitchText 
                text="Request for resume"
                as="span"
                delay={0}
                speed={50}
              />
            </button>
          </div>
        </div>
      </div>

      <ComingSoonModal key={modalKey} isOpen={showModal} onClose={handleClose} />
    </>
  );
}

