"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
    program: {
        slug: string;
        title: string;
        label: string;
        status: string;
        description: string;
    }
}

export default function ProgramCard({ program }: Props) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Link
                href={`/programs/${program.slug}`}
                className="bg-background p-10 group hover:bg-accent/5 transition-colors flex flex-col gap-8 h-full border border-transparent hover:border-accent/10 relative overflow-hidden"
            >
                {/* Subtle Glitch Line on Hover */}
                <span className="absolute top-0 left-0 w-full h-[1px] bg-accent/0 group-hover:bg-accent/40 group-hover:animate-pulse transition-colors" />
                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-700" />

                <div className="flex justify-between items-start relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">{program.label}</span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 border transition-all duration-300 ${program.status === 'Active'
                        ? 'border-accent text-accent bg-accent/5'
                        : 'border-foreground/20 text-foreground/40'
                        }`}>
                        {program.status}
                    </span>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-300">
                        {program.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed line-clamp-3">
                        {program.description}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                        View Detail <ArrowRight size={14} className="group-hover:rotate-45 transition-transform" />
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
