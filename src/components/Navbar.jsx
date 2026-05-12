import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <header className="navbar">

      {/* LOGO */}

      <div className="logo">
        &lt;/&gt; AYAT360
      </div>

      {/* DESKTOP NAV */}

      <nav className="desktop-nav">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#services">
          Services
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>

      {/* RIGHT SIDE */}

      <div className="nav-right">

        <ThemeToggle />

        <div className="nav-icons">

          <a
            href="https://github.com/Ayat360"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aregbe-adekunle-7265b3361"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:aregbeadekunle@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* MOBILE MENU BTN */}

        <button
          className="menu-btn"

          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </button>

      </div>

      {/* MOBILE RADIAL MENU */}

      <div
        className={
          menuOpen
            ? "mobile-wheel active"
            : "mobile-wheel"
        }
      >

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>

        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </div>

    </header>
  );
}