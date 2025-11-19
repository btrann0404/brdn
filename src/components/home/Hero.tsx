"use client";

import GlitchText from "@/components/effects/GlitchText";

export default function Hero() {
  return (
    <>
      <div className=" ">
        <GlitchText 
          text="Brandon Tran"
          as="h1"
          delay={0}
          speed={50}
          className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-light text-white leading-none mb-4" 
          style={{ fontFamily: 'var(--font-inter)' }}
        />
      </div>

      <div className="mb-2 max-w-2xl flex flex-col">
        <GlitchText 
          text="Software Engineer building with innovation and impact in mind."
          as="p"
          delay={0}
          speed={50}
          className="text-xs sm:text-sm text-white/70 font-light leading-relaxed uppercase tracking-wide font-mono"
        />
      </div>
    </>
  );
}

