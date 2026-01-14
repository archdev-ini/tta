"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function ProgramListClient({ programs }: { programs: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-[1600px] w-full px-6 py-20 border-x border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2"
    >
      {programs.map((program, i) => (
        <motion.div 
          key={program.slug}
          variants={itemVariants}
          whileHover={{ backgroundColor: "rgba(232, 93, 63, 0.03)" }}
          className={`p-16 flex flex-col gap-10 transition-colors group border-foreground/5 ${i === 0 ? 'border-r border-b md:border-b-0' : 'border-b md:border-b-0'} ${program.featured ? 'bg-accent/5' : ''}`}
        >
          <div className="flex justify-between items-start">
            <span className={`px-4 py-1 border text-[10px] font-black uppercase tracking-widest ${program.featured ? 'border-accent text-accent' : 'border-foreground/20 text-foreground/40'}`}>
              {program.status}
            </span>
            {program.featured && (
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Lock size={20} className="text-accent" />
              </motion.div>
            )}
          </div>
          
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase group-hover:text-accent transition-all text-foreground">
              {program.title?.replace(/<CurrentYear \/>/g, new Date().getFullYear().toString())}
            </h2>
            <p className="text-foreground/40 leading-relaxed font-medium text-lg">
              {program.description?.replace(/<CurrentYear \/>/g, new Date().getFullYear().toString()) || "Curriculum details pending institutional release."}
            </p>
          </div>

          <Link 
            href={`/programs/${program.slug}`}
            className={`mt-12 inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] transition-all group/link ${program.featured ? 'btn-primary px-8 py-4 w-fit' : 'text-foreground/40 hover:text-accent'}`}
          >
            Learn More <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
}
