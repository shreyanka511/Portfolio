import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Skills</h1>

      <div className="skills-grid">

        <SkillCard icon={<FaReact />} name="React" /> <br></br>
        <SkillCard icon={<SiTypescript />} name="TypeScript" />
        <SkillCard icon={<SiJavascript />} name="JavaScript" />
        <SkillCard icon={<FaNodeJs />} name="Node.js" />
        <SkillCard icon={<SiMysql />} name="MySQL" />
        <SkillCard icon={<FaGitAlt />} name="Git" />
        <SkillCard icon={<FaDatabase />} name="Databases" />

      </div>
    </motion.div>
  );
}
