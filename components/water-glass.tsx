"use client";

import { motion } from "framer-motion";

const GLASS_PATH = "M18 10 L62 10 L62 100 L18 100 Z";
const GLASS_X = 18;
const GLASS_WIDTH = 44;
const FILL_SURFACE_Y = 15;

export function WaterGlass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 116" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="38.5"
        y="-14"
        width="3"
        rx="1.5"
        fill="hsl(199 89% 55%)"
        initial={{ height: 0, opacity: 1 }}
        whileInView={{ height: 26, opacity: [1, 1, 0] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          height: { duration: 0.9, delay: 0.2, ease: "easeOut" },
          opacity: { duration: 1.3, delay: 0.2, times: [0, 0.7, 1] },
        }}
      />

      <motion.rect
        x={GLASS_X + 2}
        width={GLASS_WIDTH - 4}
        fill="hsl(199 89% 60%)"
        initial={{ y: 98, height: 0 }}
        whileInView={{ y: FILL_SURFACE_Y, height: 98 - FILL_SURFACE_Y }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <motion.ellipse
        cx="40"
        rx="14"
        ry="2"
        fill="hsl(199 89% 78%)"
        initial={{ cy: 98, opacity: 0, scaleX: 0.6 }}
        whileInView={{ cy: FILL_SURFACE_Y, opacity: 0.8, scaleX: [0.6, 1.15, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <path d={GLASS_PATH} stroke="hsl(60 6% 6%)" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
