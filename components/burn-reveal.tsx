"use client";

import { motion } from "framer-motion";

export function BurnReveal({
  word,
  delay = 0,
  direction = "right",
  curtainClassName,
  textClassName,
}: {
  word: string;
  delay?: number;
  direction?: "left" | "right";
  curtainClassName: string;
  textClassName: string;
}) {
  const duration = 2.2;
  const transition = { duration, delay, ease: [0.6, 0.02, 0.4, 1] as const };
  const isLeft = direction === "left";

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        initial={{ scale: 0.92, opacity: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.5,
          delay: delay + duration * 0.8,
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
        {/* charred / flame edge, glued to the burning edge as the panel shrinks */}
        <div
          className={`absolute inset-y-0 w-10 sm:w-16 ${isLeft ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} from-amber-300 via-orange-600 to-neutral-950/0`}
        >
          <motion.span
            className={`absolute top-[20%] h-3 w-3 rounded-full bg-amber-200 blur-[3px] ${isLeft ? "left-1" : "right-1"}`}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className={`absolute top-[55%] h-4 w-4 rounded-full bg-orange-400 blur-[4px] ${isLeft ? "left-2" : "right-2"}`}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.span
            className={`absolute top-[75%] h-2.5 w-2.5 rounded-full bg-amber-100 blur-[2px] ${isLeft ? "left-0" : "right-0"}`}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.7, 1.1, 0.7] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
