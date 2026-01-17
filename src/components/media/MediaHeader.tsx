"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

export default function MediaHeader() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5"
    >
      <div className="flex flex-col gap-6 max-w-4xl">
         <motion.span variants={itemVariants} className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 04 / Media</motion.span>
         <motion.div variants={itemVariants}>
           <GlitchText as="h1" text="CURATED REPOSITORY" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
         </motion.div>
      </div>
    </motion.section>
  );
}
