import "./../styles.css";

interface Project {
  name: string;
  description: string;
  skills: string[];
  github?: string;
}

const projects: Project[] = [
  {
    name: "Performance Analysis of QAM in 802.11be",
    description:
      "Analyzed and compared QAM performance and data transmission efficiency in Wi-Fi 7 vs Wi-Fi 6 networks.",
    skills: ["Networking", "MATLAB", "Data Visualization"],
    github: "https://github.com/shreyanka511/Performance-Analysis-using-QAM",
  },
];

export default function Projects() {
  return (
    <div className="page">
      <div className="projects-list">
        {projects.map((proj) => (
          <div key={proj.name} className="project-card">
            <h2 className="project-name">{proj.name}</h2>
            <p className="project-description">{proj.description}</p>
            <p className="project-skills">
              <strong>Skills:</strong> {proj.skills.join(", ")}
            </p>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
