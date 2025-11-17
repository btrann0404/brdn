"use client";

export default function RightGradient() {
  return (
    <div className="fixed right-0 top-0 h-full w-2/3 pointer-events-none z-0">
      {/* Grid pattern with gradient mask */}
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Grid pattern */}
          <pattern 
            id="grid" 
            width="25" 
            height="25" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 25 0 L 0 0 0 25" 
              fill="none" 
              stroke="#3a3a3a" 
              strokeWidth="0.5"
            >
              {/* More visible opacity animation */}
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.5"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
          
          {/* Gradient mask - fades from left (transparent) to right (visible) */}
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="3%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          
          {/* Mask to apply gradient */}
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#gridGradient)" />
          </mask>
        </defs>
        
        {/* Apply grid with mask */}
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>
    </div>
  );
}

