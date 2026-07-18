"use client";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="sticky top-0 z-[80] flex h-screen flex-col justify-start overflow-y-auto scroll-mt-20 bg-signal text-paper">
      <div className="container py-24 sm:py-32">
        <Reveal>
          <p className="font-sans text-xs font-bold uppercase tracking-widest">08 / Contact</p>
          <h2 className="mt-6 font-display text-[13vw] uppercase leading-[0.85] tracking-tight sm:text-8xl lg:text-9xl">
            Let&apos;s make
            <br />
            something
            <br />
            that matters
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t-2 border-paper/40 pt-10 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${profile.links.email}`}
              className="group flex items-center gap-3 font-serif text-xl"
            >
              <Mail className="h-5 w-5" />
              <span className="underline decoration-2 underline-offset-4">
                {profile.links.email}
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b-2 border-paper/40 pb-2 font-sans text-sm font-bold uppercase tracking-widest"
            >
              LinkedIn
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b-2 border-paper/40 pb-2 font-sans text-sm font-bold uppercase tracking-widest"
            >
              Instagram {profile.links.instagramHandle}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
