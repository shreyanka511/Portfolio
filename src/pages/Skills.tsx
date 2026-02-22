import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

import {
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Skills() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
     

      <div className="skills-grid">

        <SkillCard icon={<FaReact />} name="React" />
        <SkillCard icon={<SiTypescript />} name="TypeScript" />
        <SkillCard icon={<FaGitAlt />} name="Git" />
      <SkillCard icon={<FaGolang />} name="Go" />
      <SkillCard icon={<FaDocker />} name="Docker" />
      <SkillCard icon={<SiPostgresql />} name="PostgreSQL" />
      <SkillCard icon={<SiMysql />} name="MySQL" />
      </div>
    </motion.div>
  );
}
