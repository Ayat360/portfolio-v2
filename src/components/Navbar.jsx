import { useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="logo">
        &lt;/&gt; PROXIMA A3
      </div>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

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
          href="#clients"
          onClick={() => setMenuOpen(false)}
        >
          Clients
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>

      </nav>

      <div className="nav-right">

        <div className="nav-icons">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

    </header>
  );
}