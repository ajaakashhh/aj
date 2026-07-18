"use client";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="sticky top-0 z-[100] flex h-screen flex-col justify-center overflow-hidden bg-signal text-paper">
      <div className="container py-8 sm:py-10">
        <Reveal>
          <p className="font-sans text-xs font-bold uppercase tracking-widest">10 / Contact</p>
          <h2 className="mt-3 font-display text-[min(13vw,10vh)] uppercase leading-[0.85] tracking-tight">
            Got a story?
            <br />
            Let&apos;s tell it right.
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${profile.links.email}`}
              className="group flex items-center gap-3 rounded-xl border-2 border-ink bg-beam p-4 font-serif text-sm text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] sm:text-base"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="truncate">{profile.links.email}</span>
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border-2 border-ink bg-beam p-4 font-sans text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] sm:text-sm"
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
              className="group flex items-center justify-between rounded-xl border-2 border-ink bg-beam p-4 font-sans text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] sm:text-sm"
            >
              Instagram
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
