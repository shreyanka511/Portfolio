import { motion } from "framer-motion";
import { BiMailSend } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
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
        Hi ! I am Shreyanka
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
      I like building modern web apps and working with data to create dashboards that show trends and useful insights.I’m also passionate about DevOps practices and working with Docker to streamline development and deployment workflows.
      </motion.p>
      <br></br>

      {/* Social Icons */}

      {/* <motion.div
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

        <motion.a
          href="mailto:shreyanka1105@gmail.com"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 5 }}
        >
          <CiMail />
        </motion.a>
      </motion.div> */}

      {/* Contact */}

      <motion.div
        className="card"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <h2>Let's Connect</h2>
        {/* <p><a href="mailto:shreyanka1105@gmail.com">shreyanka1105@gmail.com</a></p> */}
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

        <motion.a
          href="mailto:shreyanka1105@gmail.com"
          target="_blank"
          whileHover={{ scale: 1.3, rotate: 5 }}
        >
          <CiMail />
        </motion.a>
      </motion.div>
      </motion.div>
    </motion.div>
  );
}
