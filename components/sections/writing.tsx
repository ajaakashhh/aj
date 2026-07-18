import { writingThemes } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { PenLine } from "lucide-react";

export function Writing() {
  return (
    <section id="writing" className="sticky top-0 z-20 flex h-screen flex-col justify-center overflow-y-auto scroll-mt-20 border-y-2 border-ink bg-ink text-paper">
      <div className="container py-20 sm:py-28">
        <div className="mb-10 flex items-baseline gap-4 border-b-2 border-paper pb-4">
          <span className="font-display text-lg text-beam">02</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Journalism & Writing
          </h2>
        </div>

        <Reveal>
          <p className="max-w-2xl font-serif text-lg leading-relaxed text-paper/70">
            Op-ed style long-form on LinkedIn, self-published essays on Medium, and written
            breakdowns that sit behind the reels. Grouped by the themes I keep returning to.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border-2 border-paper bg-paper md:grid-cols-3">
          {writingThemes.map((t, i) => (
            <Reveal key={t.theme} delay={i * 0.1}>
              <div className="group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-signal">
                <PenLine className="mb-6 h-6 w-6 text-beam group-hover:text-paper" />
                <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">
                  {t.theme}
                </h3>
                <p className="mt-4 flex-1 font-serif text-sm leading-relaxed text-paper/70 group-hover:text-paper/90">
                  {t.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.outlets.map((o) => (
                    <span
                      key={o}
                      className="border border-paper/40 px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-paper/80"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Badge variant="beam">800 to 1200 word op-eds</Badge>
            <Badge variant="beam">Minimum 1 long-form a month</Badge>
            <span className="font-serif text-sm text-paper/60">
              Depth over reach, factually grounded, Tamil Nadu focus.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
