"use client";

import { motion } from "framer-motion";

const BODY_PATH = "M16 10 L20 90 Q20 100 30 100 L50 100 Q60 100 60 90 L64 10";
const RIM_CY = 10;
const RIM_RX = 24;
const RIM_RY = 4;
const FILL_SURFACE_Y = 16;

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
        whileInView={{ height: 24, opacity: [1, 1, 0] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          height: { duration: 0.9, delay: 0.2, ease: "easeOut" },
          opacity: { duration: 1.3, delay: 0.2, times: [0, 0.7, 1] },
        }}
      />

      <motion.rect
        x="21"
        width="38"
        rx="10"
        fill="hsl(199 89% 60%)"
        initial={{ y: 98, height: 0 }}
        whileInView={{ y: FILL_SURFACE_Y, height: 98 - FILL_SURFACE_Y }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <motion.ellipse
        cx="40"
        rx="16"
        ry="3"
        fill="hsl(199 89% 80%)"
        initial={{ cy: 98, opacity: 0, scaleX: 0.6 }}
        whileInView={{ cy: FILL_SURFACE_Y, opacity: 0.9, scaleX: [0.6, 1.15, 1] }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.34, 1.2, 0.4, 1] }}
      />

      <path
        d={BODY_PATH}
        stroke="hsl(60 6% 6%)"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="40" cy={RIM_CY} rx={RIM_RX} ry={RIM_RY} stroke="hsl(60 6% 6%)" strokeWidth="4" fill="none" />

      <path
        d="M26 24 Q23 55 30 82"
        stroke="hsl(0 0% 100% / 0.55)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
