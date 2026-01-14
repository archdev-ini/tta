"use client";

import React from "react";
import { motion } from "framer-motion";

interface GraphicProps {
  className?: string;
  color?: string;
}

export const Asterisk = ({ className = "", color = "currentColor" }: GraphicProps) => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <path
        d="M40 0V80M0 40H80M11.72 11.72L68.28 68.28M11.72 68.28L68.28 11.72"
        stroke={color}
        strokeWidth="6"
      />
    </motion.svg>
  );
};

export const WavePattern = ({ className = "", color = "currentColor" }: GraphicProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <motion.svg
          key={i}
          width="120"
          height="12"
          viewBox="0 0 120 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ x: [-10, 10, -10] }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 6C15 6 15 1 30 1C45 1 45 11 60 11C75 11 75 1 90 1C105 1 105 11 120 11"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </div>
  );
};

export const DottedLine = ({ className = "", color = "currentColor" }: GraphicProps) => {
  return (
     <motion.svg 
        width="200" 
        height="100" 
        viewBox="0 0 200 100" 
        fill="none" 
        className={className}
     >
        <motion.path
          d="M10 90C50 90 50 10 90 10C130 10 130 90 170 90"
          stroke={color}
          strokeWidth="4"
          strokeDasharray="1 12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
     </motion.svg>
  );
};
