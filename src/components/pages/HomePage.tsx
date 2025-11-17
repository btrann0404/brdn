import Hero from "@/components/home/Hero";
import SocialLinks from "@/components/home/SocialLinks";
import Quote from "@/components/home/Quote";
import Experience from "@/components/home/Experience";
import RightGradient from "@/components/effects/RightGradient";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="relative">
      
      <RightGradient />
      
      <Hero />
      <SocialLinks />
      <Quote />
      <Experience />
      
      <ContactSection />
    </div>
  );
}
