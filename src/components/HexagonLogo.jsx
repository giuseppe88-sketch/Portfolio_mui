import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AtomLogo = () => {
  const svgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = svgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.svg
      ref={svgRef}
      width="400"
      height="400"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Nucleus */}
      <motion.circle
        cx="100"
        cy="100"
        r="20"
        fill="#ffffff"
        animate={isInView ? { 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        } : {}}
        transition={{ 
          duration: 3, 
          loop: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Electron Orbit 1 - X axis */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="80"
        ry="25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.6"
        animate={isInView ? { rotateY: [0, 360] } : {}}
        transition={{ 
          duration: 12, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Electron 1 */}
      <motion.circle
        cx="100"
        cy="75"
        r="6"
        fill="#ffffff"
        animate={isInView ? { 
          rotateX: [0, 360],
          cx: [180, 20, 180],
          cy: [100, 100, 100]
        } : {}}
        transition={{ 
          duration: 6, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Electron Orbit 2 - Y axis rotated 60 degrees */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="80"
        ry="25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.6"
        initial={{ rotateZ: 60 }}
        animate={isInView ? { rotateX: [0, 360] } : {}}
        transition={{ 
          duration: 10, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Electron 2 */}
      <motion.circle
        cx="150"
        cy="100"
        r="6"
        fill="#ffffff"
        animate={isInView ? { 
          rotateZ: [60, 420],
          cx: [140, 60, 140],
          cy: [150, 50, 150]
        } : {}}
        transition={{ 
          duration: 5, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Electron Orbit 3 - Y axis rotated 120 degrees */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="80"
        ry="25"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        opacity="0.6"
        initial={{ rotateZ: 120 }}
        animate={isInView ? { rotateX: [0, 360] } : {}}
        transition={{ 
          duration: 15, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Electron 3 */}
      <motion.circle
        cx="50"
        cy="100"
        r="6"
        fill="#ffffff"
        animate={isInView ? { 
          rotateZ: [120, 480],
          cx: [60, 140, 60],
          cy: [150, 50, 150]
        } : {}}
        transition={{ 
          duration: 7, 
          loop: Infinity, 
          ease: "linear" 
        }}
        style={{ transformOrigin: "center" }}
      />
    </motion.svg>
  );
};

export default AtomLogo;