"use client";

import GlitchText from "@/components/effects/GlitchText";

export default function Experience() {
  const experiences = [
    {
      id: "01",
      company: "Societe Generale",
      role: "Software",
      year: "25"
    },
    {
      id: "02",
      company: "Roche Diagnostics",
      role: "Software",
      year: "24"
    },
    {
      id: "03",
      company: "UC Irvine - Computer Sciences",
      role: "Research",
      year: "24"
    },
    {
      id: "04",
      company: "WanderWith",
      role: "Software",
      year: "23"
    },
  ];

  return (
    <div className="mb-8 max-w-md">
      <div className="mb-4 flex flex-row justify-between">
        <GlitchText 
          text="Past Experience"
          as="p"
          delay={0}
          speed={50}
          className="font-mono text-[12px] tracking-[0.35em] text-white/70 font-light uppercase"
        />
        <GlitchText 
          text="Year"
          as="p"
          delay={0}
          speed={50}
          className="font-mono text-[12px] tracking-[0.35em] text-white/70 font-light uppercase"
        />
      </div>
      
      <div className="space-y-4 font-mono">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="group relative cursor-pointer transition-all duration-300 hover:opacity-100 active:opacity-100 opacity-90 md:opacity-80">
            <GlitchText
              text={exp.id}
              as="span"
              delay={0}
              speed={50}
              className="absolute top-0 text-4xl text-white/0 group-hover:text-white/25 group-active:text-white/25 leading-none transition-colors duration-500"
            />
            {/* Small ASCII arrow on hover */}
            <pre className="absolute -left-4 top-1 text-[10px] text-white/0 group-hover:text-white/30 transition-colors duration-300 font-mono select-none pointer-events-none">
              →
            </pre>
            <div className="flex items-start justify-between">
              <div>
                <GlitchText 
                  text={exp.company}
                  as="p"
                  delay={0}
                  speed={50}
                  className="text-sm text-white/70 group-hover:text-white/90 group-active:text-white/90 font-light transition-colors duration-300"
                />
                <GlitchText 
                  text={exp.role}
                  as="p"
                  delay={0}
                  speed={50}
                  className="text-[10px] text-white/50 group-hover:text-white/70 group-active:text-white/70 font-light tracking-wide transition-colors duration-300"
                />
              </div>
              <GlitchText
                text={exp.year}
                as="span"
                delay={0}
                speed={50}
                className="text-[11px] text-white/25 group-hover:text-white/60 group-active:text-white/60 pt-0.5 relative z-10 transition-colors duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

