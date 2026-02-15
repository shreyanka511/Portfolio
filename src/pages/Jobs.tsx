import { motion } from "framer-motion";

export default function Jobs() {
  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>Jobs</h1>
      <div className="card">Your work experience</div>
    </motion.div>
  );
}
