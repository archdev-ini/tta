"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/lib/youtube";
import { useState } from "react";

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
  const [visibleCount, setVisibleCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  
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

  const filteredVideos = videos.filter(v => 
    v.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  return (
    <div className="flex flex-col gap-12 items-center w-full">
      {/* Search Interface */}
      <div className="w-full max-w-xl mb-8 relative">
        <input 
            type="text" 
            placeholder="SEARCH ARCHIVE [KEYWORDS, TOPICS]..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-background border border-foreground/10 px-6 py-4 text-sm font-bold uppercase tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/20"
        />
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-foreground/20 pointer-events-none">
            {filteredVideos.length} RECORDS
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 w-full"
      >
        {visibleVideos.map((video, i) => (
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
               {video.duration && (
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                    {video.duration}
                </div>
               )}
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
                  <div className="flex items-center gap-3 mt-1 text-xs text-foreground/40 font-bold uppercase tracking-widest">
                    <span>{video.date}</span>
                    {video.views && (
                        <>
                            <span className="w-1 h-1 bg-accent/50 rounded-full" />
                            <span className="text-foreground/60">{video.views} Views</span>
                        </>
                    )}
                    {video.likes && (
                       <>
                            <span className="w-1 h-1 bg-accent/50 rounded-full" />
                            <span className="text-foreground/60">{video.likes} Likes</span>
                       </>
                    )}
                  </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setVisibleCount(prev => prev + 10)}
          className="btn-outline px-12 py-4 text-sm"
        >
          Load More Signals
        </motion.button>
      )}
    </div>
  );
}
