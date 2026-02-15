import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div className="page" initial={{ y: 50 }} animate={{ y: 0 }}>
      <h1>Resume</h1>

      <iframe
        src="/resume.pdf"
        width="100%"
        height="600px"
        style={{ borderRadius: "12px" }}
      />
    </motion.div>
  );
}
