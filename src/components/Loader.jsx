import { motion } from "framer-motion";

export default function Loader() {

  return (

    <motion.div
      className="loader-screen"

      initial={{ opacity: 1 }}

      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >

      <motion.div
        className="loader-content"

        initial={{
          scale: 0.8,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}
      >

        <motion.h1
          animate={{
            opacity: [0.4, 1, 0.4],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          PROXIMA A3
        </motion.h1>

        <div className="loader-bar">

          <motion.div
            className="loader-progress"

            initial={{ width: 0 }}

            animate={{ width: "100%" }}

            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />

        </div>

      </motion.div>

    </motion.div>
  );
}