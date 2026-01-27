"use client";

import { motion } from "framer-motion";
import { CommunityHighlight } from "@/lib/community-data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
    highlights: CommunityHighlight[];
}

export default function CommunityTicker({ highlights }: Props) {
    // Empty State
    if (!highlights || highlights.length === 0) {
        return (
            <section className="w-full relative z-30 py-10">
                <div className="w-full max-w-4xl mx-auto bg-accent/20 border-2 border-accent text-accent rounded-[2rem] py-12 text-center flex flex-col items-center gap-4">
                    <span className="text-xl font-black uppercase tracking-widest">Community Updates Paused</span>
                    <span className="text-sm opacity-60 font-bold uppercase tracking-widest">Check back soon for new announcements</span>
                </div>
            </section>
        );
    }

    // Check for "Text Only" mode (Low content volume)
    const isTextMode = highlights.length < 3;

    // Ensure enough items for smooth loop (aim for ~15 items minimum)
    const MIN_ITEMS = 15;
    let items = [...highlights];
    while (items.length < MIN_ITEMS) {
        items = [...items, ...highlights];
    }

    // Speed calculation: more items = longer duration to maintain constant speed
    // Base speed: 
    // Text Mode: Faster (1s per item)
    // Card Mode: Slower (2.5s per item)
    const DURATION = items.length * (isTextMode ? 2 : 2.5);

    if (isTextMode) {
        return (
            <section className="w-full relative z-30 py-10 px-6">
                <div className="w-full max-w-[1400px] mx-auto bg-accent text-black rounded-[2.5rem] overflow-hidden py-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] border-2 border-black relative group transform hover:-translate-y-1 transition-transform">
                    {/* Badge Decor */}
                    <div className="absolute top-6 left-8 z-10 hidden md:flex items-center gap-2">
                        <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-widest">Community Live</span>
                    </div>

                    <motion.div
                        className="flex whitespace-nowrap min-w-full py-4 items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: DURATION,
                        }}
                        whileHover={{ animationPlayState: "paused" }}
                    >
                        {items.map((item, i) => (
                            <div key={`${item.id}-${i}`} className="flex items-center mx-8">
                                <span className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-6">
                                    {item.link ? (
                                        <Link href={item.link} className="hover:underline decoration-4 underline-offset-4 flex items-center gap-4">
                                            {item.text} <ArrowRight className="w-8 h-8 -rotate-45" />
                                        </Link>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}

                                    {/* Separator */}
                                    <div className="w-4 h-4 rounded-full bg-black/20" />
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <style jsx>{`
                    div:hover > div {
                        animation-play-state: paused !important;
                    }
                `}</style>
            </section>
        );
    }

    return (
        <section className="w-full relative z-30 overflow-hidden py-10">
            <motion.div
                className="flex gap-8 w-fit"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: DURATION,
                }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {items.map((item, i) => (
                    <div
                        key={`${item.id}-${i}`}
                        className="w-[300px] h-[480px] shrink-0 bg-accent rounded-[2.5rem] p-4 flex flex-col gap-4 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] border-2 border-black relative group transition-transform hover:-translate-y-2"
                    >
                        {/* Image Section (Hero) */}
                        <div className="w-full h-[280px] bg-black/10 rounded-[2rem] border-2 border-black overflow-hidden relative shrink-0">
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-white/20">
                                    <span className="text-4xl opacity-20 font-black text-black">TTA</span>
                                </div>
                            )}

                            {/* Type Badge Overlay */}
                            <div className="absolute top-4 left-4 z-10">
                                {item.type === "speaker" && <span className="text-[10px] font-black bg-black text-white px-3 py-1 rounded-full uppercase tracking-widest">Speaker</span>}
                                {item.type === "news" && <span className="text-[10px] font-black bg-white text-black border border-black px-3 py-1 rounded-full uppercase tracking-widest">News</span>}
                                {item.type === "recap" && <span className="text-[10px] font-black bg-accent text-black border border-black px-3 py-1 rounded-full uppercase tracking-widest">Recap</span>}
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col justify-between flex-grow px-2 pb-2">
                            <p className="text-xl font-black uppercase leading-[0.95] tracking-tighter text-black line-clamp-3">
                                {item.text}
                            </p>

                            <div className="flex justify-between items-center pt-4 border-t border-black/10 mt-auto">
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                                    {item.type === 'speaker' ? 'View Profile' : 'Read More'}
                                </span>
                                {item.link && (
                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                                        <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Click Overlay */}
                        {item.link && <Link href={item.link} className="absolute inset-0 z-20" />}
                    </div>
                ))}
            </motion.div>

            {/* Hack to force pause on hover */}
            <style jsx>{`
                div:hover > div {
                    animation-play-state: paused !important;
                }
            `}</style>
        </section>
    );
}
