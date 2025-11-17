import Hero from "@/components/home/Hero";
import SocialLinks from "@/components/home/SocialLinks";
import Quote from "@/components/home/Quote";
import Experience from "@/components/home/Experience";
import CompanyLogos from "@/components/home/CompanyLogos";
import RightGradient from "@/components/effects/RightGradient";

export default function HomePage() {
  return (
    <div className="relative">
      
      <RightGradient />
      
      <Hero />
      <SocialLinks />
      <Quote />
      <Experience />
    </div>
  );
}
