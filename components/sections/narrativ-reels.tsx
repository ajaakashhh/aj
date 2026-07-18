import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ScrollRow } from "@/components/scroll-row";
import { Play } from "lucide-react";
import Image from "next/image";

export function NarrativReels() {
  return (
    <section
      id="narrativ-reels"
      className="sticky top-0 z-50 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal scroll-mt-20"
    >
      <div className="container">
        <SectionLabel index="05" title="Reels for Narrativ" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-paper/80">
            Reel production for Narrativ&apos;s clients.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="container mt-6">
          <ScrollRow>
            {narrativReels.map((r, i) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group relative w-32 shrink-0 snap-start sm:w-40"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border-2 border-ink">
                  <Image
                    src={r.image}
                    alt={`Narrativ reel ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full border-2 border-ink bg-beam px-2 py-0.5 font-sans text-[10px] font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-4 w-4 fill-paper text-paper" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </ScrollRow>
        </div>
      </Reveal>
    </section>
  );
}
