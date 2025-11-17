"use client";

import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="pt-4 flex flex-col lg:flex-row gap-16 lg:gap-20 w-full items-start justify-between">
      {/* Left Column - Text Content */}
      <div className="max-w-3xl flex-1">
        {/* Philosophy Section */}
        <div className="mb-16 space-y-6">
          <p className="text-white/80 font-light leading-[1.9] text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            I focus on developing with purpose, translating user needs to reliable services one step at a time. I'm not special by design; the difference is curiosity in action and comfort with experiments. Clarity in code states intent for users and for the future, and that's why I believe software thrives—because it moves us toward the future we're trying to build.
          </p>
        </div>

        {/* Background Section */}
        <div className="mb-16 border-l border-white/10 pl-6 space-y-6">
          <p className="text-white/80 font-light leading-[1.9] text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            I grew up learning by making and designing my own art. With a designer mindset and a habit of building creatively, seeing software turn ideas into reality gave me the conviction to build tools that are durable and elegant.
          </p>
          
          <p className="text-white/80 font-light leading-[1.9] text-[15px]" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Currently a Computer Science student at UC Irvine with prior software roles at Société Générale and Roche, and experience taking projects from ideation to products in clubs and hackathons. At the moment, I'm building software for a non-profit and developing projects in pursuit of clarity and impact.
          </p>
        </div>

        {/* Personal Section */}
        <div className="pt-12 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 mb-5">
            Beyond Code
          </p>
          <p className="text-white/80 font-light leading-[1.9] text-[14px] italic" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            When not working in cafés, I stay active through the gym, basketball, running, bouldering, and pickleball. In my free time, I explore fashion, discover new music, and pick up challenging new hobbies.
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="lg:w-96 flex-shrink-0">
        <div className="group sticky top-24">
          {/* Minimalist Frame */}
          <div className="border border-white/20 p-5 bg-black/20">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/about/aboutpic.png"
                alt="Childhood photo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          {/* Caption */}
          <p className="mt-4 font-mono text-[10px] tracking-[0.1em] text-white/40 text-center italic" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            the boy that didn&apos;t know any better
          </p>
        </div>
      </div>
    </div>
  );
}