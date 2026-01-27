"use client";

import { motion } from "framer-motion";

export default function GlitchOverlay() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1, 0, 1, 0],
                transition: {
                    duration: 0.6,
                    times: [0, 0.2, 0.4, 0.6, 1],
                    ease: "linear"
                }
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center pointer-events-none"
        >
            {/* Scanlines Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 2px, 3px 100%'
                }}
            />

            {/* Random Glitch Blocks */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-accent/20"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 100, 0],
                        y: [0, (Math.random() - 0.5) * 100, 0],
                        width: [0, Math.random() * 200 + 50, 0],
                        height: [0, Math.random() * 100 + 20, 0]
                    }}
                    transition={{
                        duration: 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 0.2
                    }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                    }}
                />
            ))}

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-accent font-black tracking-[1em] uppercase text-xl relative z-10"
            >
                Synchronizing
            </motion.div>
        </motion.div>
    );
}
