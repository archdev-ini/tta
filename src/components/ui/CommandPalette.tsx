"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, ArrowRight, Book, Monitor, Users, Info, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const ACTIONS = [
  { id: "programs", name: "Browse Programs", icon: Book, href: "/programs", shortcut: "P" },
  { id: "media", name: "Archive / Media", icon: Monitor, href: "/media", shortcut: "M" },
  { id: "community", name: "The Hub", icon: Users, href: "/community", shortcut: "C" },
  { id: "about", name: "About Foundation", icon: Info, href: "/about", shortcut: "A" },
  { id: "contact", name: "Secure Inquiry", icon: MessageSquare, href: "/contact", shortcut: "S" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredActions = ACTIONS.filter((action) =>
    action.name.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-100 bg-background/80 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-101 flex items-start justify-center pt-[15vh] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-background border border-foreground/10 shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              <div className="flex items-center px-6 border-b border-foreground/5 bg-foreground/2">
                <Search className="text-foreground/30 mr-4" size={20} />
                <input
                  autoFocus
                  placeholder="Enter command..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 h-16 bg-transparent outline-none text-foreground font-medium placeholder:text-foreground/20 uppercase tracking-widest text-sm"
                />
                <div className="flex items-center gap-2">
                   <div className="flex items-center gap-1 px-2 py-1 bg-foreground/5 border border-foreground/10 rounded text-[10px] font-bold text-foreground/40 uppercase">
                      <Command size={10} /> K
                   </div>
                   <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/30 hover:text-accent">
                      <X size={20} />
                   </button>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 flex flex-col gap-2">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => navigate(action.href)}
                      className="w-full flex items-center justify-between p-4 group hover:bg-accent/5 border border-transparent hover:border-accent/20 transition-all text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-foreground/5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                          <action.icon size={20} />
                        </div>
                        <span className="font-black uppercase tracking-tighter text-lg text-foreground/70 group-hover:text-foreground">
                          {action.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 text-accent transition-opacity uppercase tracking-widest">Execute Request</span>
                        <ArrowRight size={16} className="text-foreground/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center text-center gap-4 opacity-40">
                    <Search size={40} className="mb-2" />
                    <p className="font-bold uppercase tracking-widest text-xs">No records found for &quot;{query}&quot;</p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-foreground/5 bg-foreground/2 flex justify-between items-center">
                 <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                       <span className="px-1.5 py-0.5 border border-foreground/10 rounded">ESC</span>
                       <span>to close</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground/30">
                       <span className="px-1.5 py-0.5 border border-foreground/10 rounded">↵</span>
                       <span>to select</span>
                    </div>
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-accent"><span className="font-logo">TTA</span> GATEWAY v1.0</div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
