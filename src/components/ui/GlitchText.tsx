"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export default function GlitchText({ text, className = "", as: Component = "span" }: GlitchTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");
  let charIndex = 0;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }, // Keep simple stagger if possible, or use manual delay below
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  return (
    <Component ref={ref} className={`${className} inline-block`}>
      <motion.div
        className="flex flex-wrap gap-x-[0.25em] justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {words.map((word, i) => (
          <span key={i} className="whitespace-nowrap inline-block">
            {Array.from(word).map((letter, j) => {
              const index = charIndex++;
              return (
                <motion.span
                  variants={child}
                  custom={index}
                  key={j}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.div>
    </Component>
  );
}
