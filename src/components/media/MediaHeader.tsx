"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";
import { ChannelStats } from "@/lib/youtube";

interface Props {
  stats: ChannelStats | null;
  isLive: boolean;
}

export default function MediaHeader({ stats, isLive }: Props) {
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
      <div className="flex flex-col gap-6 max-w-4xl relative">
        {/* Live Badge */}
        {isLive && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-0 flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-red-500"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Live Now</span>
          </motion.div>
        )}

        <motion.span variants={itemVariants} className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Section 04 / Media</motion.span>
        <motion.div variants={itemVariants}>
          <GlitchText as="h1" text="CURATED REPOSITORY" className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-foreground" />
        </motion.div>

        {/* Stats Ticker */}
        {stats && (
          <motion.div variants={itemVariants} className="flex gap-8 md:gap-16 mt-4 border-t border-foreground/10 pt-6">
            <StatItem label="Subscribers" value={stats.subscriberCount} />
            <StatItem label="Total Views" value={stats.viewCount} />
            <StatItem label="Videos" value={stats.videoCount} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl md:text-3xl font-black tracking-tighter">{value}</span>
      <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/50">{label}</span>
    </div>
  )
}
