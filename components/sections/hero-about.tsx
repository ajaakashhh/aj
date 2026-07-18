"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { ArrowUpRight } from "lucide-react";

const WRAPPER_VH = 220;
const ABOUT_ANCHOR_PROGRESS = 0.6;

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

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Hero layer */}
        <motion.section
          id="top"
          style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}
          className="absolute inset-0 flex h-full flex-col justify-center bg-beam pt-16"
        >
          <div className="container">
            <motion.h1
              style={{ scale: heroScale, filter: heroFilter }}
              className="font-display uppercase leading-[0.95] text-ink text-[11vw] sm:text-[6.5vw] lg:text-[5.5vw]"
            >
              Writer - Journalist - Media Producer
            </motion.h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-lg border-2 border-ink bg-ink px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-beam shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                Get in touch
              </a>
              <a
                href="#video"
                className="flex items-center gap-2 rounded-lg border-2 border-ink bg-paper px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                See my work
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
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
