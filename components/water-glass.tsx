"use client";

import { motion } from "framer-motion";

const GLASS_PATH = "M16 10 L64 10 L56 100 L24 100 Z";
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

      <defs>
        <clipPath id="glassClip">
          <path d={GLASS_PATH} />
        </clipPath>
      </defs>

      <motion.rect
        x="20"
        width="40"
        fill="hsl(199 89% 60%)"
        clipPath="url(#glassClip)"
        initial={{ y: 100, height: 0 }}
        whileInView={{ y: FILL_SURFACE_Y, height: 100 - FILL_SURFACE_Y }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <motion.ellipse
        cx="40"
        rx="16"
        ry="2"
        fill="hsl(199 89% 78%)"
        initial={{ cy: 100, opacity: 0, scaleX: 0.6 }}
        whileInView={{ cy: FILL_SURFACE_Y, opacity: 0.8, scaleX: [0.6, 1.15, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <path d={GLASS_PATH} stroke="hsl(60 6% 6%)" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}
