import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

export default function FloatingIcons() {

  const icons = [
    {
      icon: <FaReact />,
      className: "icon-1",
    },

    {
      icon: <FaHtml5 />,
      className: "icon-2",
    },

    {
      icon: <FaCss3Alt />,
      className: "icon-3",
    },

    {
      icon: <FaJs />,
      className: "icon-4",
    },

    {
      icon: <FaFigma />,
      className: "icon-5",
    },

    {
      icon: <FaGithub />,
      className: "icon-6",
    },
  ];

  return (
    <div className="floating-icons">

      {icons.map((item, index) => (

        <motion.div
          key={index}

          className={`floating-icon ${item.className}`}

          animate={{
            y: [0, -20, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 4 + index,
          }}
        >

          {item.icon}

        </motion.div>

      ))}

    </div>
  );
}