"use client";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BODY_PATH = "M16 10 L20 90 Q20 100 30 100 L50 100 Q60 100 60 90 L64 10";
const RIM_CY = 10;
const RIM_RX = 24;
const RIM_RY = 4;
const EMPTY_Y = 98;
const FILL_SURFACE_Y = 28; // ~80% full

export function WaterGlass({ className = "" }: { className?: string }) {
  const [filled, setFilled] = useState(false);
  const controls = useAnimation();

  const waterY = filled ? FILL_SURFACE_Y : EMPTY_Y;
  const waterHeight = filled ? EMPTY_Y - FILL_SURFACE_Y : 0;

  const handleDrink = () => {
    setFilled((f) => !f);
    controls.start({
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={filled ? "Drink the water" : "Refill the glass"}
      onClick={handleDrink}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleDrink();
        }
      }}
      className={`water-glass-btn inline-block select-none ${className}`}
      style={{ outline: "none", boxShadow: "none", WebkitTapHighlightColor: "transparent" }}
    >
      <motion.svg
        viewBox="0 0 80 116"
        fill="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        onViewportEnter={() => setFilled(true)}
        viewport={{ once: true, amount: 0.6 }}
        animate={controls}
        whileTap={{ scale: 0.95 }}
      >
        <motion.rect
          x="38.5"
          y="-14"
          width="3"
          rx="1.5"
          fill="hsl(199 89% 55%)"
          initial={{ height: 0, opacity: 1 }}
          whileInView={{ height: 21, opacity: [1, 1, 0] }}
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
          initial={{ y: EMPTY_Y, height: 0 }}
          animate={{ y: waterY, height: waterHeight }}
          transition={{ duration: 0.8, ease: [0.34, 1.2, 0.4, 1] }}
        />

        <motion.ellipse
          cx="40"
          rx="16"
          ry="3"
          fill="hsl(199 89% 80%)"
          initial={{ cy: EMPTY_Y, opacity: 0, scaleX: 0.6 }}
          animate={{ cy: waterY, opacity: filled ? 0.9 : 0, scaleX: filled ? 1 : 0.6 }}
          transition={{ duration: 0.8, ease: [0.34, 1.2, 0.4, 1] }}
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
      </motion.svg>
    </div>
  );
}
