"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Youtube } from "lucide-react";

export default function MediaFooter() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 bg-dot-pattern flex items-center justify-center text-center relative overflow-hidden"
    >
       {/* Subtle Blue Accent */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] -mr-32 -mt-32" />
       
       <div className="max-w-3xl flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 group leading-none text-foreground">
             FULL ARCHIVE <br /> ON <span className="text-accent">YOUTUBE</span>
          </h2>
          <p className="text-foreground/40 mb-12 font-medium leading-relaxed">
             The TTA website acts as a high-speed gateway. For deep dives into our multi-hour playlist structures, visit our official channel.
          </p>
          <Link 
            href="https://www.youtube.com/@TheThinkingArchitect-t4p"
            className="btn-outline px-12 group flex items-center gap-4 transition-colors"
          >
            Access Channel <Youtube size={20} className="text-accent group-hover:scale-125 transition-transform" />
          </Link>
       </div>
    </motion.section>
  );
}
