import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Technologies" },
    // { to: "/resume", label: "Resume" },
    // { to: "/jobs", label: "Jobs" },
    { to: "/projects", label: "Builds" },
    // { to: "/education", label: "Education" },
  ];

  return (
    <nav className="nav">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
    
      </motion.h2>

      <div>
        {links.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={link.to}>{link.label}</Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
