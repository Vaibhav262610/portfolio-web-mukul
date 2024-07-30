"use client";

import { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const onMouseEnter = () => {
      if (cursor) {
        cursor.classList.add("scale-up");
      }
    };

    const onMouseLeave = () => {
      if (cursor) {
        cursor.classList.remove("scale-up");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-2  h-2 border-[1px] border-black rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
    />
  );
};

export default CustomCursor;
