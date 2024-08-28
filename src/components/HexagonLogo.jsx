import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HexagonalPrism = () => {

  const svgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
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
      initial={{ rotate: 0 }}
      animate={isInView ? { rotate: [0, 360] } : {}}
      transition={{ duration: 17, loop: Infinity, ease: "linear" }}
    >
      {/* Central Circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        fill="none"
        stroke="white"
        strokeWidth="2"
        animate={isInView ? { scale: [1, 1.2, 1], rotate: [0, 360] } : {}}
        transition={{ duration: 7, loop: Infinity, ease: "easeInOut" }}
      />

      {/* First Layer of Hexagons */}
      <motion.g
        fill="none"
        stroke="white"
        strokeWidth="1"
        animate={isInView ? { rotate: [0, -360] } : {}}
        transition={{ duration: 12, loop: Infinity, ease: "easeInOut" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.polygon
            key={i}
            points="100,40 130,60 130,100 100,120 70,100 70,60"
            transform={`rotate(${i * 60} 100 100)`}
          />
        ))}
      </motion.g>

      {/* Second Layer of Hexagons */}
      <motion.g
        fill="none"
        stroke="white"
        strokeWidth="1"
        animate={isInView ? { rotate: [0, 360] } : {}}
        transition={{ duration: 17, loop: Infinity, ease: "easeInOut" }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.polygon
            key={i}
            points="100,20 140,40 140,80 100,100 60,80 60,40"
            transform={`rotate(${i * 60} 100 100)`}
          />
        ))}
      </motion.g>

      {/* Third Layer: Circular Waves */}
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="white"
        strokeWidth="1"
        animate={isInView ? { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 7, loop: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="white"
        strokeWidth="1"
        animate={isInView ? { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 9, loop: Infinity, ease: "easeInOut" }}
      />

      {/* Star-Like Shape in the Center */}
      <motion.polygon
        points="100,50 110,90 150,90 115,110 125,150 100,125 75,150 85,110 50,90 90,90"
        fill="none"
        stroke="white"
        strokeWidth="2"
        animate={isInView ? { rotate: [0, 360], scale: [1, 0.8, 1] } : {}}
        transition={{ duration: 4, loop: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default HexagonalPrism;
