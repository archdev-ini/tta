"use client";

import React, { useState, useEffect } from "react";



interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
}

export default function GlitchText({ text, className = "", as: Component = "span", font = "font-heading" }: GlitchTextProps & { font?: string }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const chars = text.split("");
    const glitchInterval = setInterval(() => {
      const glitched = chars.map((char) => {
        if (Math.random() > 0.95) {
          // Occasional random pixel-like char or symbol
          const symbols = ["░", "▒", "▓", "█", "■", "□", "▢", "▣", "▤", "▥", "▦", "▧", "▨", "▩"];
          return symbols[Math.floor(Math.random() * symbols.length)];
        }
        return char;
      });
      setDisplayText(glitched.join(""));
      
      // Reset back to original text quickly
      setTimeout(() => setDisplayText(text), 50);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <Component className={`${className} inline-block ${font}`}>
      {displayText.split("").map((char, i) => (
        <span key={i} className={/[░▒▓█■□▢▣▤▥▦▧▨▩]/.test(char) ? "text-accent" : ""}>
          {char}
        </span>
      ))}
    </Component>
  );
}
