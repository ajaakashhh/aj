"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, type PanInfo } from "framer-motion";
import { Move } from "lucide-react";

export function DragReveal({
  word,
  curtainClassName,
  labelClassName,
  textClassName,
}: {
  word: string;
  curtainClassName: string;
  labelClassName: string;
  textClassName: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setMaxDrag(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = Math.max(maxDrag * 0.25, 60);
    if (Math.abs(info.offset.x) > threshold) {
      const dir = info.offset.x > 0 ? 1 : -1;
      setRevealed(true);
      controls.start({
        x: dir * (maxDrag + 80),
        transition: { type: "spring", stiffness: 220, damping: 28 },
      });
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 420, damping: 30 } });
    }
  };

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center px-4 ${textClassName}`}
      >
        {word}
      </div>

      <motion.div
        drag={revealed ? false : "x"}
        dragConstraints={{ left: -maxDrag, right: maxDrag }}
        dragElastic={0.12}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        animate={controls}
        initial={{ x: 0 }}
        style={{ touchAction: "pan-y" }}
        className={`absolute inset-0 flex cursor-grab items-center justify-center gap-2 select-none active:cursor-grabbing ${curtainClassName}`}
      >
        <motion.span
          className={`flex items-center gap-2 ${labelClassName}`}
          animate={
            revealed
              ? { opacity: 0 }
              : { x: [0, -12, 0, 12, 0] }
          }
          transition={
            revealed
              ? { duration: 0.2 }
              : { duration: 2.2, repeat: Infinity, repeatDelay: 0.6 }
          }
        >
          <Move className="h-4 w-4 sm:h-5 sm:w-5" />
          Drag to reveal
        </motion.span>
      </motion.div>
    </div>
  );
}
