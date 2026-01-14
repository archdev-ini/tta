"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <motion.span 
            variants={itemVariants} 
            className="text-[11px] font-black uppercase tracking-[0.3em] text-accent"
          >
            Section 01 / Information
          </motion.span>
          <motion.div variants={itemVariants}>
            <GlitchText 
              as="h1" 
              text="THE ARCHITECTURAL FOUNDATION" 
              className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" 
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2 gap-20"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">Mission Objective</h2>
          <p className="text-xl text-foreground/50 leading-relaxed font-medium">
            The Thinking Architect is built to act as an authority signal and gateway. 
            We provide master-level practitioners with the technical and theoretical foundations 
            necessary for absolute mastery in {new Date().getFullYear()}.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col gap-8">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">Core Philosophy</h2>
          <div className="space-y-4">
            <PhilosophyItem label="CALM" detail="Interfaces and discourse that respect cognitive load." />
            <PhilosophyItem label="INTENTIONAL" detail="Every action and resource serves a strategic purpose." />
            <PhilosophyItem label="DURABLE" detail="Built on stable foundations to outlast market noise." />
          </div>
        </motion.div>
      </motion.section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 bg-dot-pattern">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-foreground">Institutional Stability</h2>
          <div className="prose prose-xl leading-loose text-foreground/40 max-w-none font-medium italic">
            &quot;TTA is not a startup. It is an institution. We prioritize durability over speed, intention over noise, and depth over reach. 
            Our build philosophy is centered on the structures of thought that define the profession at its highest levels.&quot;
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function PhilosophyItem({ label, detail }: { label: string, detail: string }) {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1 border-l-2 border-accent pl-6 py-2 hover:bg-foreground/5 transition-colors cursor-default"
    >
      <span className="text-xl font-black uppercase tracking-tight text-foreground">{label}</span>
      <span className="text-foreground/40 text-sm">{detail}</span>
    </motion.div>
  );
}
