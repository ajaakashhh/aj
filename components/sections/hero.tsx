"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="sticky top-0 z-0 flex h-screen flex-col overflow-hidden bg-beam">
      {/* Top row: name + get in touch */}
      <div className="container relative z-20 flex items-start justify-between pt-8 pb-4">
        <span className="font-display text-sm uppercase leading-tight tracking-wide">
          <br />
        </span>
      </div>

      {/* Headline + photo, normal document flow, photo overlaps via negative margin
          instead of being absolutely positioned over independently-moving text. */}
      <div className="container relative flex flex-1 flex-col items-center justify-center text-center">
        <p className="font-sans text-sm font-bold uppercase tracking-widest text-ink/70 sm:text-base">
          Based in Chennai
        </p>

        <h1 className="mt-2 font-display uppercase leading-[0.85] text-[13vw] sm:text-[9vw] lg:text-[7vw]">
          Writer.
          <br />
          Journalist.
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-10 -mb-10 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:-mt-16 lg:-mb-16 lg:h-[340px] lg:w-[340px]"
        >
          <Image
            src="/aj.png"
            alt="Aakash Srividhya portrait"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <h2 className="text-stroke mt-2 font-display uppercase leading-[0.85] text-[13vw] sm:text-[9vw] lg:text-[7vw]">
          Media Producer.
        </h2>
      </div>
    </section>
  );
}
