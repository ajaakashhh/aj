import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Play } from "lucide-react";

export function NarrativReels() {
  return (
    <section
      id="narrativ-reels"
      className="sticky top-0 z-50 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-beam scroll-mt-20"
    >
      <div className="container py-8 sm:py-10">
        <SectionLabel index="05" title="Reels for Narrativ" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-ink/70">
            Reel production for Narrativ&apos;s clients. Links coming soon.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {narrativReels.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="flex h-20 flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-ink/40 p-3 text-center sm:h-24">
                <Play className="h-5 w-5 text-ink/40" />
                <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-ink/50">
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
