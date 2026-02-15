import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <motion.div
      className="page"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Education
      </motion.h1>

      {/* College */}

      <motion.div
        className="card edu-card"
        variants={cardAnim}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px #38bdf8",
        }}
      >
        <h2>🎓</h2>
        <p><strong>Degree:</strong> B.E Computer Science</p>
        <p><strong>College:</strong>KLE Technological University</p>
        <p><strong>Year:</strong> 2021 – 2025</p>
      </motion.div>

      {/* School */}

      <motion.div
        className="card edu-card"
        variants={cardAnim}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px #38bdf8",
        }}
      >
        <h2>🏫</h2>
        <p><strong>School:</strong> KLE M.M School</p>
        <p><strong>Board:</strong> CBSE</p>
        <p><strong>Year:</strong> 2008 – 2018</p>
      </motion.div>

    </motion.div>
  );
}
