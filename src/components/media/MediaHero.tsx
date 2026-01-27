"use client";

import { useState } from "react";
import { Video, Comment } from "@/lib/youtube";
import { motion } from "framer-motion";
import { Play, MessageCircle, Heart } from "lucide-react";
import Image from "next/image";

interface Props {
    video: Video;
    comments: Comment[];
}

export default function MediaHero({ video, comments }: Props) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="max-w-[1600px] w-full px-6 pb-20 border-x border-foreground/5 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* Video Player */}
                <div className="lg:col-span-8">
                    <div className="relative aspect-video bg-foreground/5 border border-foreground/10 overflow-hidden group">
                        {!isPlaying ? (
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 w-full h-full flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer z-20"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="relative z-10 w-24 h-24 rounded-full bg-accent text-black flex items-center justify-center pl-2 transition-transform group-hover:scale-110">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </button>
                        ) : (
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        )}
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">{video.title}</h2>
                        <div className="flex items-center gap-6 text-xs uppercase font-bold tracking-widest text-foreground/50">
                            <span>{video.date}</span>
                            {video.views && <span>{video.views} Views</span>}
                            {video.likes && <span className="flex items-center gap-2"><Heart size={12} /> {video.likes}</span>}
                        </div>
                    </div>
                </div>

                {/* Sidebar: Comments & Context */}
                <div className="lg:col-span-4 flex flex-col gap-12">
                    <div>
                        <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                            <MessageCircle size={14} /> Community Thoughts
                        </h3>

                        <div className="flex flex-col gap-6">
                            {comments.length > 0 ? comments.map(comment => (
                                <motion.div
                                    key={comment.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-foreground/5 border border-foreground/10 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-foreground/10">
                                            <Image src={comment.avatar} alt={comment.author} fill className="object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold">{comment.author}</span>
                                            <span className="text-[10px] text-foreground/40">{comment.date}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-medium line-clamp-4">
                                        {comment.text.replace(/<br\s*\/?>/gi, '\n').replace(/<\/?[^>]+(>|$)/g, "")}
                                    </p>
                                    <div className="mt-3 flex gap-2 text-[10px] items-center text-foreground/30 font-bold">
                                        <Heart size={10} /> {comment.likes}
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="p-6 border border-foreground/5 text-foreground/30 text-sm italic">
                                    No top comments available right now.
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto pt-8 border-t border-foreground/10">
                        <a
                            href={video.url}
                            target="_blank"
                            className="btn-outline w-full justify-center group"
                        >
                            Watch on YouTube
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
