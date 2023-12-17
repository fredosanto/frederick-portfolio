import { SocialBar } from "../components/layout/SocialBar";
import { ProjectSection } from "../components/projects/ProjectSection";
import "../styles/main.scss";
import "../styles/projects.scss";

export function Projects() {
  return (
    <div className="container project-container">
      <SocialBar />
      <ProjectSection />
    </div>
  );
}
