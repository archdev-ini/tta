"use client";

import { useLenis } from "lenis/react";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
