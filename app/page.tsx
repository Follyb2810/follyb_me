import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="lg:flex lg:gap-12">
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <HeroSection />
          </header>

          <main className="lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </div>
      </main>
    </div>
  );
}
