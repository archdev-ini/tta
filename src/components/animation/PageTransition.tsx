"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import GlitchOverlay from "./GlitchOverlay";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="w-full relative"
      >
        {/* The Transition Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="fixed inset-0 z-[998] pointer-events-none"
        >
          <AnimatePresence>
            {/* The glitch effect only shows briefly on entry/exit */}
            <GlitchOverlay />
          </AnimatePresence>
        </motion.div>

        {/* The Actual Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
