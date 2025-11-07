"use client";

import Navigation from "@/components/global/Navigation";
import Hero from "@/components/home/Hero";
import SocialLinks from "@/components/home/SocialLinks";
import Quote from "@/components/home/Quote";
import Experience from "@/components/home/Experience";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <SocialLinks />
      <Quote />
      <Experience />
      {/* <div className="h-16"></div> */}
    </div>
  );
}
