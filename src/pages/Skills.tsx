import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

import { FaReact, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Skills() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Languages */}
      <div className="skills-section">
        <div className="skills-grid">
          <SkillCard icon={<FaReact size={28} />} name="React" />
          <SkillCard icon={<SiTypescript size={28} />} name="TypeScript" />
          <SkillCard icon={<FaGolang size={28} />} name="Go" />
        </div>
      </div>

      {/* Tools */}
      <div className="skills-section">
        <div className="skills-grid">
          <SkillCard icon={<FaGitAlt size={28} />} name="Git" />
          <SkillCard icon={<FaDocker size={28} />} name="Docker" />
          <SkillCard icon={<SiPostgresql size={28} />} name="PostgreSQL" />
          <SkillCard icon={<SiMysql size={28} />} name="MySQL" />
        </div>
      </div>
    </motion.div>
  );
}