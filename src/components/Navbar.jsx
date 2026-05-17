import { useState } from "react";

import {
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
        PROXIMA A3
      </div>

      {/* DESKTOP NAV */}

      <nav className="desktop-nav">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
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

      {/* RIGHT */}

      <div className="nav-right">



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

      {/* MOBILE MENU */}

      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
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