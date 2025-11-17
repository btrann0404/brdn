"use client";

export default function CornerAccents() {
  return (
    <>
      {/* Top left corner */}
      <div className="fixed top-2 left-2 select-none pointer-events-none z-0">
        <pre className="text-[10px] leading-[10px] text-white/25 font-mono">
{`┌──────
│
│`}
        </pre>
      </div>

      {/* Top right corner */}
      <div className="fixed top-2 right-2 select-none pointer-events-none z-0">
        <pre className="text-[10px] leading-[10px] text-white/25 font-mono">
{`──────┐
      │
      │`}
        </pre>
      </div>

      {/* Bottom left corner */}
      <div className="fixed bottom-2 left-2 select-none pointer-events-none z-0">
        <pre className="text-[10px] leading-[10px] text-white/25 font-mono">
{`│
│
└──────`}
        </pre>
      </div>

      {/* Bottom right corner */}
      <div className="fixed bottom-2 right-2 select-none pointer-events-none z-0">
        <pre className="text-[10px] leading-[10px] text-white/25 font-mono">
{`      │
      │
──────┘`}
        </pre>
      </div>
    </>
  );
}

