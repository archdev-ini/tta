"use client";

import { useEffect, useRef } from "react";

export default function NoiseBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const draw = () => {
            const width = canvas.width;
            const height = canvas.height;
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                // Low intensity noise
                // We want it to be very subtle, so we use a small value range
                const value = Math.random() * 25;

                data[i] = value;     // R
                data[i + 1] = value; // G
                data[i + 2] = value; // B
                data[i + 3] = 15;    // A (Alpha - very transparent)
            }

            ctx.putImageData(imageData, 0, 0);
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100] opacity-50"
            style={{ mixBlendMode: 'overlay' }}
        />
    );
}
