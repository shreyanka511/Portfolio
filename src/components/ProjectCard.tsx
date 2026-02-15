import { motion } from "framer-motion";
import type { JSX } from "react";
import { FaGithub } from "react-icons/fa";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface ProjectCardProps {
  name: string;
  logo: string; // path to project image/logo
  description: string;
  skills: Skill[];
  github: string;
}

export default function ProjectCard({
  name,
  logo,
  description,
  skills,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px #38bdf8" }}
    >
      <div className="project-header">
        <img src={logo} alt={name} className="project-logo" />
        <h3>{name}</h3>
      </div>

      <p>{description}</p>

      <div className="skills-icons">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="skill-icon"
            title={skill.name} // hover tooltip
            whileHover={{ scale: 1.3 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>

      <a href={github} target="_blank" className="github-link">
        <FaGithub /> View Code
      </a>
    </motion.div>
  );
}
