"use client";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="sticky top-0 z-[90] flex h-screen flex-col justify-center overflow-hidden bg-signal text-paper">
      <div className="container py-8 sm:py-10">
        <Reveal>
          <p className="font-sans text-xs font-bold uppercase tracking-widest">09 / Contact</p>
          <h2 className="mt-3 font-display text-[min(13vw,11vh)] uppercase leading-[0.85] tracking-tight">
            Let&apos;s make
            <br />
            something
            <br />
            that matters
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-4 border-t-2 border-paper/40 pt-4 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${profile.links.email}`}
              className="group flex items-center gap-3 font-serif text-base sm:text-lg"
            >
              <Mail className="h-4 w-4" />
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
              className="group flex items-center justify-between border-b-2 border-paper/40 pb-1 font-sans text-xs font-bold uppercase tracking-widest sm:text-sm"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b-2 border-paper/40 pb-1 font-sans text-xs font-bold uppercase tracking-widest sm:text-sm"
            >
              Instagram {profile.links.instagramHandle}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
