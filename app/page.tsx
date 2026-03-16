import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { Contact } from "@/components/contact";
import { SocialSidebar } from "@/components/social-sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SocialSidebar />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectsSection />
      <Contact />
    </div>
  );
}
