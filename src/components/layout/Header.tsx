"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Programs", href: "/programs" },
  { name: "Media", href: "/media" },
  { name: "About", href: "/about" },
  { name: "Sessions", href: "/events" },
  { name: "Tickets", href: "https://t.me/thethinkingarchitect" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 glass transition-smooth"
      >
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-12"
          >
            <Link href="/" className="text-3xl font-black tracking-tighter text-foreground hover:text-accent transition-all font-logo">
              TTA
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-widest text-foreground/70 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      <div className="cyber-frame" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-60 bg-background p-8 flex flex-col items-center justify-center lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-foreground"><X size={32} /></button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-4xl font-black uppercase tracking-tighter text-foreground hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                 <Link href="/events" className="btn-primary justify-center" onClick={() => setIsOpen(false)}>Join Sessions</Link>
                 <Link href="https://t.me/tta_community" className="btn-outline justify-center" onClick={() => setIsOpen(false)}>Telegram</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
