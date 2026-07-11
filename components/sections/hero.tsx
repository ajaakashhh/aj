"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { Marquee } from "@/components/marquee";
import Image from "next/image";
import ProfileImage from "./aj.png"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="flex flex-row">
        
      <div className="container relative pb-10 pt-16 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest"
        >
          <span className="border-2 border-ink  px-2.5 py-1">Journalist</span>
          <span className="border-2 border-ink px-2.5 py-1">Filmmaker</span>
          <span className="border-2 border-ink S px-2.5 py-1">Poet</span>
          <span className="ml-auto hidden sm:block">Chennai, IN</span>
        </motion.div>
        
        <div className="mt-8 flex flex-row items-center gap-8">
          
        <h1 className="font-display text-[16vw] uppercase leading-[0.82] tracking-tight sm:text-[13vw] lg:text-[11rem]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
              Aakash
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-stroke"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
              Srividhya
            </motion.span>
          </span>
        </h1>
        <div>
          <Image src={ProfileImage} alt="" height={500} className="ml-8" />
        </div>
              </div>

        <div className="mt-10 grid gap-8 pt-8 md:grid-cols-[1.4fr_1fr]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl font-serif text-xl leading-relaxed sm:text-2xl"
          >
            {profile.oneLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-start gap-4 md:items-end"
          >
            <div className="flex gap-3">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border-2 border-ink transition-colors hover:bg-ink hover:text-paper"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border-2 border-ink transition-colors hover:bg-ink hover:text-paper"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <a
              href="#video"
              className="group flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider"
            >
              See the work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>

      

      
      </div>


      <div className="border-y-2 border-ink bg-ink py-3 text-paper">
        <Marquee
          items={[
            "Political narratives",
            "Cultural commentary",
            "Fact-checking",
            "Long-form journalism",
            "Leftist criticism",
            "Tamil Nadu",
          ]}
        />
      </div>
    </section>
  );
}
