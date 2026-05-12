import "./App.css";
import { Helmet } from "react-helmet";
import AuroraBackground from "./components/AuroraBackground";

import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ThemeToggle from "./components/ThemeToggle";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [loading, setLoading] = useState(true);

  /* LOADER EFFECT */
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  /* SCROLL PROGRESS EFFECT */
  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* SHOW LOADER SCREEN */
  if (loading) {
    return <Loader />;
  }

  return (

    

    <div
      className={
        darkMode ? "app dark" : "app light"
      }
    >

      {/* SCROLL PROGRESS BAR */}
      <div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`,
        }}
      />

      {/* CURSOR GLOW */}
      <CursorGlow />

      {/* THEME TOGGLE */}
      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

 <Helmet>
        SEO tags here
      </Helmet>

      <Loader />

      <CustomCursor />

      <AuroraBackground />

      <div className="app-container"></div>
      
       <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Services />

      <Clients />

      <Contact />

      <CustomCursor />

      <Footer />

      <AuroraBackground />
    </div>
  );
}

export default App;