"use client";

import { useState, useEffect } from "react";
import React from "react";

interface GlitchTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

export default function GlitchText({ 
  text, 
  delay = 0, 
  speed = 30,
  className = "",
  as = "span",
  style,
  children
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => " "));
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsGlitching(true);
      const chars = text.split("");
      const iterations = 15; // Number of glitch iterations per character
      let currentIteration = 0;

      const interval = setInterval(() => {
        setDisplayText(prev =>
          prev.map((char, index) => {
            if (currentIteration > iterations) {
              return chars[index];
            }
            
            // Gradually reveal the correct character
            if (currentIteration > iterations * (index / chars.length)) {
              return chars[index];
            }
            
            // Show glitch characters
            if (chars[index] === " ") return " ";
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
        );

        currentIteration++;

        if (currentIteration > iterations + chars.length) {
          clearInterval(interval);
          setDisplayText(chars);
          setIsGlitching(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, delay, speed]);

  const Component = as as React.ElementType;

  return (
    <Component className={className} style={style}>
      {displayText.join("")}
      {children}
    </Component>
  );
}

