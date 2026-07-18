"use client";

import { motion } from "framer-motion";
import { StickFigurePushingBoulder } from "@/components/stick-figure";

export function BoulderReveal({
  word,
  delay = 0,
  curtainClassName,
  figureClassName,
  textClassName,
}: {
  word: string;
  delay?: number;
  curtainClassName: string;
  figureClassName: string;
  textClassName: string;
}) {
  const transition = { duration: 2.4, delay, ease: [0.65, 0, 0.35, 1] as const };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center px-4 ${textClassName}`}
      >
        {word}
      </div>

      <motion.div
        initial={{ width: "100%" }}
        whileInView={{ width: "0%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={transition}
        className={`pointer-events-none absolute inset-y-0 right-0 ${curtainClassName}`}
      />

      <motion.div
        initial={{ left: "-6%" }}
        whileInView={{ left: "86%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={transition}
        className="pointer-events-none absolute inset-y-0 flex items-center"
      >
        <StickFigurePushingBoulder className={`h-[42%] w-auto ${figureClassName}`} />
      </motion.div>
    </div>
  );
}
