"use client";

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-8 left-8 z-50 font-mono text-[11px] tracking-[0.3em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300"
    >
      ← back
    </button>
  );
}
