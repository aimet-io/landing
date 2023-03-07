import { HeroSection } from "./Hero";
import { ProjectsSection } from "@/views/Index/Projects";
import { AboutSection } from "./About";
import { ServiceSection } from "./Service";

export function IndexView() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServiceSection />
    </>
  );
}
