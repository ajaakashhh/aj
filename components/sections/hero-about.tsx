"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { WriterIcon, JournalistIcon, ProducerIcon } from "@/components/role-icons";

const WRAPPER_VH = 220;
const ABOUT_ANCHOR_PROGRESS = 0.6;

const roles = [
  { word: "Writer", Icon: WriterIcon },
  { word: "Journalist", Icon: JournalistIcon },
  { word: "Media Producer", Icon: ProducerIcon },
];

export function HeroAbout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.06]);
  const heroBlur = useTransform(scrollYProgress, [0.22, 0.5], [0, 10]);
  const heroFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);
  const heroPointerEvents = useTransform(scrollYProgress, (v) => (v < 0.2 ? "auto" : "none"));

  const aboutOpacity = useTransform(scrollYProgress, [0.35, 0.62], [0, 1]);
  const aboutScale = useTransform(scrollYProgress, [0.35, 0.62], [0.96, 1]);
  const aboutBodyOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const aboutBodyY = useTransform(scrollYProgress, [0.55, 0.85], [16, 0]);
  const aboutPointerEvents = useTransform(scrollYProgress, (v) => (v > 0.5 ? "auto" : "none"));

  return (
    <div ref={wrapperRef} className="relative" style={{ height: `${WRAPPER_VH}vh` }}>
      <div
        id="about"
        className="absolute"
        style={{ top: `${ABOUT_ANCHOR_PROGRESS * (WRAPPER_VH - 100)}vh` }}
        aria-hidden
      />

      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Hero layer */}
        <motion.section
          id="top"
          style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}
          className="absolute inset-0 flex h-full flex-col overflow-hidden bg-ink pt-16"
        >
          <motion.div
            style={{ scale: heroScale, filter: heroFilter }}
            className="flex flex-1 flex-col divide-y divide-beam/20"
          >
            {roles.map(({ word, Icon }) => (
              <div key={word} className="flex flex-1 items-center justify-between px-6 sm:px-10">
                <span className="font-display uppercase leading-none text-beam text-[10vw] sm:text-[8vw] lg:text-[6.5vw]">
                  {word}
                </span>
                <Icon className="hidden h-24 w-24 shrink-0 text-beam/60 lg:block xl:h-32 xl:w-32" />
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* About layer, morphs in over the hero */}
        <motion.section
          style={{ opacity: aboutOpacity, pointerEvents: aboutPointerEvents }}
          className="absolute inset-0 flex h-full flex-col justify-center overflow-hidden bg-paper py-14 sm:py-20"
        >
          <div className="container">
            <SectionLabel index="01" title="About" theme="light" />

            <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
              <motion.p
                style={{ scale: aboutScale }}
                className="font-serif text-3xl leading-snug sm:text-5xl"
              >
                {profile.aboutLead}
              </motion.p>

              <motion.div
                style={{ opacity: aboutBodyOpacity, y: aboutBodyY }}
                className="space-y-6"
              >
                {profile.aboutBody.map((para, i) => (
                  <p
                    key={i}
                    className="font-serif text-lg leading-relaxed text-muted-foreground sm:text-2xl"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
