import { SiReact, SiTypescript, SiMysql, SiNodedotjs } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";

import projectLogo1 from "../assets/profile.jpg"; 
import projectLogo2 from "../assets/profile.jpg";

export default function Projects() {
  const projects = [
    {
      name: "Dashboard Builder",
      logo: projectLogo1,
      description: "A responsive data dashboard for analytics.",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
      github: "https://github.com/YOUR_USERNAME/dashboard-builder",
    },
    {
      name: "Inventory Manager",
      logo: projectLogo2,
      description: "Manage inventory with backend integration.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      github: "https://github.com/YOUR_USERNAME/inventory-manager",
    },
  ];

  return (
    <div className="page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            name={proj.name}
            logo={proj.logo}
            description={proj.description}
            skills={proj.skills}
            github={proj.github}
          />
        ))}
      </div>
    </div>
  );
}
