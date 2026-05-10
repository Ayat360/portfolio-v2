import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Counter from "./Counter";
import FloatingIcons from "./FloatingIcons";

import Reveal from "./Reveal";

import heroImage from "../assets/images/hero-character.png";

export default function Hero() {

  const [text] = useTypewriter({
    words: [
      "Modern Websites",
      "Premium Interfaces",
      "React Applications",
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <section className="hero section-card" id="home">
        <FloatingIcons />
      <Reveal>
        <div className="hero-left">

          <motion.span
            className="hero-tag"
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            Available For Work
          </motion.span>

          <h1>
            I Build <span>{text}</span>
            <Cursor />
          </h1>

          <p>
            Crafting immersive digital experiences with
            modern frontend technologies and premium UI design.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download CV
            </button>

          </div>

        </div>
      </Reveal>

      <Reveal>
        <div className="hero-center">
          <img src={heroImage} alt="Hero" />
        </div>
      </Reveal>

      <Reveal>
        <div className="hero-right">

          <div className="stat-card">
            <h2>
              <Counter end={50} />+
            </h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h2>
              <Counter end={20} />+
            </h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h2>
              <Counter end={2} />+
            </h2>
            <p>Years Experience</p>
          </div>

        </div>
      </Reveal>

    </section>
  );
}