"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-8 left-8 text-white/50 hover:text-white/90 active:text-white/90 transition-colors duration-300 text-[11px] tracking-[0.35em] cursor-pointer uppercase font-light z-50"
    >
      ← BACK
    </button>
  );
}

