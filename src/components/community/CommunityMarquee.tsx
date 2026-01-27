"use client";

import { motion } from "framer-motion";
import { CommunityHighlight } from "@/lib/community-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
    highlights: CommunityHighlight[];
}

export default function CommunityMarquee({ highlights }: Props) {
    if (!highlights || highlights.length === 0) {
        return (
            <div className="bg-accent text-black text-[10px] font-black uppercase tracking-widest py-3 text-center border-b border-black/10">
                Community updates coming soon...
            </div>
        )
    }

    // Duplicate list to create seamless loop
    const items = [...highlights, ...highlights, ...highlights, ...highlights];

    return (
        <div className="bg-accent text-black border-b border-black/10 overflow-hidden relative group z-50">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: highlights.length * 10, // Dynamic speed based on content length
                }}
                whileHover={{ animationPlayState: "paused" }} // CSS Pause is more reliable for hover
                style={{ width: "fit-content" }}
            >
                <div className="flex gap-16 px-8 items-center py-3">
                    {items.map((item, i) => (
                        <div key={`${item.id}-${i}`} className="flex items-center gap-4">
                            <span className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                                {item.type === "speaker" && <span className="bg-black text-accent px-2 py-0.5 rounded-full text-[9px]">SPEAKER</span>}
                                {item.type === "news" && <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px]">NEWS</span>}
                                {item.type === "recap" && <span className="border border-black/20 px-2 py-0.5 rounded-full text-[9px]">RECAP</span>}

                                {item.text}
                            </span>

                            {item.link && (
                                <Link href={item.link} className="hover:underline flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                                    <span className="text-[9px] font-bold">READ MORE</span>
                                    <ArrowRight size={10} />
                                </Link>
                            )}

                            <span className="w-1 h-1 bg-black/30 rounded-full" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Hack to force pause on hover since Framer Motion's whileHover doesn't pause loop animations easily */}
            <style jsx>{`
        div:hover > div {
            animation-play-state: paused !important;
        }
      `}</style>
        </div>
    );
}
