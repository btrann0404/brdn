"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  work: string;
}

const experiences: Experience[] = [
  {
    company: "Roche",
    role: "Software",
    work: "Healthcare diagnostics and patient care solutions",
  },
  {
    company: "SocGen",
    role: "Software",
    work: "Financial trading platforms and data systems",
  },
  {
    company: "UC Irvine",
    role: "Research",
    work: "Software engineering and system design studies",
  },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="min-h-screen overflow-y-auto">
      {/* Hero Section */}
      <section className="flex shrink-0 items-start my-8 justify-between gap-8 px-6 pt-1 pb-4 sm:px-8 sm:pt-2 sm:pb-6 md:px-16 lg:px-24">
        <div className="flex-1">
          <h1 className="mb-2 text-2xl font-medium text-white sm:mb-3 sm:text-xl md:text-2xl">
            Software Engineer
          </h1>
          
          <p className="mb-2 text-sm text-gray-500 sm:mb-3 sm:text-base">
            <span className="text-white">Brandon</span> is{" "}
            <Link href="/about" className="text-white hover:opacity-70">
              &#123; about &#125;
            </Link>
            . He has experience in{" "}
            <Link href="/work" className="text-white hover:opacity-70">
              &#123; work &#125;
            </Link>{" "}
            and has made{" "}
            <Link href="/projects" className="text-white hover:opacity-70">
              &#123; projects &#125;
            </Link>
            .<br />
            Feel free to reach out at{" "}
            <Link href="/contact" className="text-white hover:opacity-70">
              &#123;contact&#125;
            </Link>
            .
          </p>

          <p className="mb-4 text-xs text-gray-500 sm:mb-6 sm:text-sm">
            Currently he is studying{" "}
            <span className="text-white">Computer Science</span> at{" "}
            <span className="text-white italic">University of California, Irvine</span>
          </p>

          <div className="space-y-0.5 text-xs text-white sm:space-y-1 sm:text-sm">
            <div className="hover:opacity-70">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                ↳ Linkedin
              </a>
            </div>
            <div className="hover:opacity-70">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                ↳ Github
              </a>
            </div>
            <div className="hover:opacity-70">
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                ↳ Spotify
              </a>
            </div>
            <div className="hover:opacity-70">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                ↳ X
              </a>
            </div>
          </div>
        </div>

        <div 
          className="hidden md:block relative w-[350px] h-[260px] lg:h-[330px] xl:h-[420px] opacity-75 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/home_brdn.png"
            alt="Brandon Tran"
            fill
            className={`object-contain object-bottom transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            priority
          />
          <Image
            src="/home_brdn2.png"
            alt="Brandon Tran"
            fill
            className={`object-contain object-bottom transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </section>

      <div className="shrink-0 border-t border-white/10 mx-4"></div>

      <section className="flex min-h-0 flex-1 items-start justify-end my-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="inline-block text-right">
          <p className="text-md leading-tight sm:text-lg sm:leading-tight md:text-xl md:leading-tight lg:text-2xl lg:leading-tight xl:text-3xl xl:leading-tight">
            <span className="text-gray-500">I am a</span>{" "}
            <span className="text-white">software engineer</span>{" "}
            <span className="text-gray-500">based in SF Bay Area.</span>
            <br />
            <span className="text-gray-500">I engineer with</span>{" "}
            <span className="text-white">innovation</span>{" "}
            <span className="text-gray-500">and</span>{" "}
            <span className="text-white">impact</span>{" "}
            <span className="text-gray-500">in mind.</span>
            <br />
            <span className="text-gray-500">Worked previously at</span>{" "}
            <span className="italic text-white">SocGen</span>{" "}
            <span className="text-gray-500">and</span>{" "}
            <span className="italic text-white">Roche</span>
            <span className="text-gray-500">.</span>
          </p>
        </div>
      </section>
      {/* Footer spacer */}
      <div className="h-32"></div>
    </div>
  );
}
