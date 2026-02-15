import { motion } from "framer-motion";

export default function SkillBar({ name, level }: any) {
  return (
    <div>
      <p>{name}</p>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
}
