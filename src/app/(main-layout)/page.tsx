import { Fragment } from "react";
import HeroSection from "./_component/hero-section";
import SkillsSection from "./_component/skils-section";
import ExperiencesSection from "./_component/experience-section";
import ProjectSection from "./_component/project-section";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectSection />
    </Fragment>
  );
}
