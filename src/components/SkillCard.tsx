import { motion } from "framer-motion";

export default function SkillCard({ icon, name }: any) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.1 }}
    >
      <div className="skill-icon">{icon}</div>
      <p>{name}</p>
    </motion.div>
  );
}
