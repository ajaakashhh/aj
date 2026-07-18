import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export function Instagram() {
  return (
    <section
      id="instagram"
      className="sticky top-0 z-20 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal text-paper"
    >
      <div className="hatch pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="container relative py-8 sm:py-10">
        <div className="mb-8 flex items-baseline gap-4 border-b-2 border-paper pb-3">
          <span className="font-display text-lg text-beam">02</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Instagram Presence
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal delay={0.08}>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-[240px] -rotate-2 rounded-2xl border-2 border-dashed border-beam bg-ink p-2 shadow-[8px_8px_0_0_hsl(var(--ink))] transition-transform hover:rotate-0"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/instagram-profile.jpeg"
                  alt={`${profile.name} Instagram profile`}
                  width={1001}
                  height={1600}
                  className="h-auto w-full"
                />
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mx-auto max-w-sm">
              <div className="mb-4 flex items-end gap-3 text-ink">
                <Sparkle className="h-7 w-7 fill-current" />
                <Sparkle className="h-5 w-5 fill-current" />
                <Sparkle className="h-4 w-4 fill-current" />
              </div>
              <div className="rounded-2xl border-2 border-ink bg-beam p-5 text-ink shadow-[6px_6px_0_0_hsl(var(--ink))]">
                <p className="font-sans text-lg font-bold leading-snug">
                  Built on political commentary, fact-checking, and data-driven journalism.
                </p>
              </div>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-2"
              >
                Follow on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
