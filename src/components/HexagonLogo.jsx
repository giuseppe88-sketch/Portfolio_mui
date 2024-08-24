import React from "react";
import { motion } from "framer-motion";

const HexagonalPrism = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0, scale: 1 }}
      animate={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 2, loop: Infinity, ease: "linear" }}
    >
      <motion.polygon
        points="100,10 140,40 140,100 100,130 60,100 60,40"
        fill="rebeccapurple"
        stroke="black"
        strokeWidth="2"
        animate={{ rotate: [0, 60, 120, 180, 240, 300, 360] }}
        transition={{ duration: 4, loop: Infinity, ease: "easeInOut" }}
      />
      <motion.polygon
        points="100,130 140,100 140,160 100,190 60,160 60,100"
        fill="indigo"
        stroke="black"
        strokeWidth="2"
        animate={{ rotate: [360, 300, 240, 180, 120, 60, 0] }}
        transition={{ duration: 4, loop: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="100"
        y1="10"
        x2="100"
        y2="130"
        stroke="black"
        strokeWidth="2"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, loop: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="140"
        y1="40"
        x2="140"
        y2="100"
        stroke="black"
        strokeWidth="2"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, loop: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="60"
        y1="40"
        x2="60"
        y2="100"
        stroke="black"
        strokeWidth="2"
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 2, loop: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default HexagonalPrism;