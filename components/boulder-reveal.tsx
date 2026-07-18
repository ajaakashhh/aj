"use client";

import { motion } from "framer-motion";
import { StickFigurePushingBoulder } from "@/components/stick-figure";

export function BoulderReveal({
  word,
  delay = 0,
  direction = "right",
  curtainClassName,
  figureClassName,
  textClassName,
}: {
  word: string;
  delay?: number;
  direction?: "left" | "right";
  curtainClassName: string;
  figureClassName: string;
  textClassName: string;
}) {
  const duration = 2.4;
  const transition = { duration, delay, ease: [0.65, 0, 0.35, 1] as const };
  const isLeft = direction === "left";

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        initial={{ scale: 0.92, opacity: 0.6 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.5,
          delay: delay + duration * 0.75,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className={`pointer-events-none absolute inset-0 flex items-center justify-center px-4 ${textClassName}`}
      >
        {word}
      </motion.div>

      <motion.div
        initial={{ width: "100%" }}
        whileInView={{ width: "0%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={transition}
        style={isLeft ? { left: 0 } : { right: 0 }}
        className={`pointer-events-none absolute inset-y-0 overflow-hidden ${curtainClassName}`}
      >
        <div className="hatch absolute inset-0" aria-hidden />
      </motion.div>

      <motion.div
        initial={{ left: isLeft ? "92%" : "-6%" }}
        whileInView={{ left: isLeft ? "-6%" : "86%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={transition}
        className="pointer-events-none absolute inset-y-0 flex items-center"
      >
        <div className={`flex h-[42%] items-center ${figureClassName} ${isLeft ? "-scale-x-100" : ""}`}>
          <StickFigurePushingBoulder className="h-full w-auto" />
        </div>
      </motion.div>
    </div>
  );
}
