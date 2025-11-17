"use client";

export default function ContactSection() {
  return (
    <div className="lg:fixed lg:right-8 lg:bottom-8 lg:z-10 max-w-sm mt-16 lg:mt-0">
      <div className="space-y-6">
        <p className="font-mono text-[12px] leading-[1.8] tracking-wide text-white/40">
          Open to connecting<br />
          and chatting about<br />
          projects, ideas,<br />
          or opportunities.
        </p>
        
        <div className="space-y-2">
          <a
            href="https://cal.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
          >
            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
            </svg>
            Schedule a chat
          </a>
          <a
            href=""
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
          >
            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/>
            </svg>
            Leave a note
          </a>
          <a
            href="mailto:your-email@example.com?subject=Resume Request"
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
          >
            <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2"/>
            </svg>
            Request for resume
          </a>
        </div>
      </div>
    </div>
  );
}

