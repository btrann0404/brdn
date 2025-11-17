"use client";

import { useEffect, useState } from "react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset states when opening
      setIsFadingOut(false);
      setIsVisible(true);

      // Start fade out after 2.5 seconds
      const fadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2500);

      // Close completely after 3 seconds
      const closeTimer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(closeTimer);
      };
    } else {
      setIsVisible(false);
      setIsFadingOut(false);
    }
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ pointerEvents: 'none' }}
    >
      <div className="relative">
        {/* Background blur effect */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm rounded-sm transition-opacity duration-500 ${
            isFadingOut ? 'opacity-0' : 'opacity-100 animate-[fadeIn_0.3s_ease-out]'
          }`} 
        />
        
        {/* Modal content */}
        <div 
          className={`relative border border-white/20 bg-black/80 px-12 py-8 transition-all duration-500 ${
            isFadingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-[fadeIn_0.3s_ease-out]'
          }`}
        >
          <p className="font-mono text-[14px] tracking-[0.2em] text-white/70 text-center">
            coming soon :)
          </p>
        </div>
      </div>
    </div>
  );
}

