import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .project-card"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      hoverElements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          addHover
        );

        el.removeEventListener(
          "mouseleave",
          removeHover
        );
      });

    };

  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${
          hovering ? "cursor-hover" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <div
        className="cursor-trail"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}