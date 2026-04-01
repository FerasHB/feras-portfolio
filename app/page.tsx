import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WhyMeSection from "@/components/WhyMeSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WhyMeSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
