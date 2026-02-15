import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <motion.div
      className="page hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Intro */}

      <motion.h1
        initial={{ y: 40 }}
        animate={{ y: 0 }}
      >
        hi ! I am Shreyanka
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
      I love creating modern web apps and working with data to create dashboards that analyze trends, uncover insights, and drive better solutions.
      </motion.p>

      {/* Social Icons */}

      <motion.div
        className="socials"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          href="https://github.com/shreyanka511"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 5 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/shreyanka-padennavar-a6445a219"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: -5 }}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      {/* Contact */}

      <motion.div
        className="card"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <h2>Contact Me</h2>
        <p>Email: shreyanka1105@email.com</p>
      </motion.div>
    </motion.div>
  );
}
