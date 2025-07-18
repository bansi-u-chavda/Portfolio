import { Navbar } from "../components/ui/Navbar";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { StarBackground } from "@/components/ui/StarBackground";
import { HeroSection } from "../components/ui/HeroSection";
import { AboutSection } from "../components/ui/AboutSection";
import { SkillsSection } from "../components/ui/SkillsSection";
import { ProjectsSection } from "../components/ui/ProjectsSection";
import { ContactSection } from "../components/ui/ContactSection";
import { Footer } from "@/components/ui/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};