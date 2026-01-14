"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  repeat?: number;
  speed?: number;
  className?: string;
}

export default function Marquee({ text, repeat = 10, speed = 20, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 border-y border-border flex ${className}`}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex shrink-0 min-w-full"
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 flex items-center gap-8">
            {text}
            <span className="w-4 h-4 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
