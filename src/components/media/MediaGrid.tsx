"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/lib/youtube";

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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function MediaGrid({ videos }: { videos: Video[] }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-40 opacity-50">
        <div className="w-16 h-1 bg-accent mb-8 animate-pulse" />
        <h3 className="text-2xl font-black uppercase tracking-widest text-foreground">Signal Lost</h3>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 mt-2">
          No media records located in the repository.
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20"
    >
      {videos.map((video, i) => (
        <motion.div 
          key={video.id} 
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className={`group cursor-pointer p-8 transition-all hover:bg-foreground/5 border-foreground/5 ${i % 3 !== 2 ? 'lg:border-r' : ''}`}
          onClick={() => window.open(video.url, '_blank')}
        >
          <div className="aspect-video bg-foreground/5 relative flex items-center justify-center overflow-hidden border border-foreground/10 group-hover:border-accent transition-all">
             <motion.div 
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.7 }}
               className="absolute inset-0 bg-cover bg-center opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700"
               style={{ backgroundImage: `url(${video.thumbnail})` }}
             />
             <Play size={48} className="text-foreground opacity-40 group-hover:opacity-100 group-hover:text-accent group-hover:scale-110 transition-all relative z-10" />
          </div>
          <div className="mt-8 flex flex-col gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
              Youtube
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:translate-x-2 transition-all text-foreground line-clamp-2">
              {video.title}
            </h3>
            {video.date && (
                <span className="text-xs text-foreground/40 font-bold uppercase tracking-widest">{video.date}</span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
