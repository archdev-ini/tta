"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

export default function Events() {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col items-center">
      <section className="max-w-[1600px] w-full px-6 pt-40 pb-20 border-x border-foreground/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-4xl"
        >
           <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 03 / Schedule</span>
           <GlitchText as="h1" text="UPCOMING SESSIONS" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
        </motion.div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1600px] w-full px-6 py-10 border-x border-t border-foreground/5 overflow-hidden"
      >
        <div className="w-full aspect-video lg:h-[800px] border border-foreground/10 relative group bg-foreground/5">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <iframe 
            src="https://luma.com/embed/calendar/cal-zMvRPq81i5pG0LL/events" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen 
            className="relative z-0"
          />

          {/* Live API Connection removed as per user request */}
        </div>
      </motion.section>

      <section className="max-w-[1600px] w-full px-6 py-40 border-x border-t border-foreground/5 bg-accent text-white flex flex-col items-center text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">NEVER MISS A <br />FOUNDATIONAL SESSION</h2>
           <p className="text-white/70 max-w-xl mx-auto mb-12 font-bold text-lg">
             Subscribe to the TTA Luma calendar to receive automated reminders and secure your slot for upcoming masterclasses.
           </p>
           <a href="https://luma.com/calendar/cal-zMvRPq81i5pG0LL" target="_blank" className="bg-foreground text-background px-16 py-6 font-black uppercase tracking-widest hover:scale-105 transition-all inline-block hover:shadow-[0_0_30px_rgba(232,93,63,0.3)]">
              Subscribe Now
           </a>
         </motion.div>
      </section>
    </div>
  );
}
