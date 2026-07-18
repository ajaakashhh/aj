import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Play } from "lucide-react";

export function NarrativReels() {
  return (
    <section
      id="narrativ-reels"
      className="sticky top-0 z-40 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-beam scroll-mt-20"
    >
      <div className="container py-8 sm:py-10">
        <SectionLabel index="04" title="Reels for Narrativ" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-ink/70">
            Reel production for Narrativ's clients across EV, crypto, quantum computing, and
            policy comms. Links coming soon.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {narrativReels.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="flex h-32 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-ink/40 p-4 text-center sm:h-40">
                <Play className="h-6 w-6 text-ink/40" />
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-ink/50">
                  {r.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
