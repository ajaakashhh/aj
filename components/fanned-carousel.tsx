"use client";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FannedCarousel<T>({
  items,
  aspect = "aspect-[9/16]",
  cardWidth = 200,
  initialIndex,
  renderItem,
}: {
  items: T[];
  aspect?: string;
  cardWidth?: number;
  initialIndex?: number;
  renderItem: (item: T, index: number, isActive: boolean, activate: () => void) => ReactNode;
}) {
  const [active, setActive] = useState(initialIndex ?? Math.floor((items.length - 1) / 2));

  const go = (dir: 1 | -1) => setActive((a) => Math.max(0, Math.min(items.length - 1, a + dir)));

  return (
    <div className="relative flex items-center justify-center py-3">
      <div className="relative flex items-center justify-center" style={{ width: "100%", height: cardWidth * 1.35 }}>
        {items.map((item, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.66;
          const x = offset * cardWidth * 0.62;
          const rotate = offset === 0 ? 0 : offset * -9;
          const zIndex = 50 - abs;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.88 : 0.5;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ width: cardWidth, zIndex }}
              animate={{ x, scale, rotate, opacity }}
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div
                className={`overflow-hidden rounded-2xl border-2 border-ink shadow-[6px_6px_0_0_hsl(var(--ink))] ${aspect}`}
              >
                {renderItem(item, i, i === active, () => setActive(i))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-0 z-[60] flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-beam text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:-translate-x-[1px] sm:left-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-0 z-[60] flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-beam text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] sm:right-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
}
