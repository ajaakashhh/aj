"use client";
import { useRef } from "react";
import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { InstagramReelTrigger } from "@/components/instagram-reel-trigger";
import { ChevronRight, Play, Sparkle } from "lucide-react";
import Image from "next/image";

export function NarrativReels() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scroll = () => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: row.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section
      id="narrativ-reels"
      className="flex min-h-[100svh] flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal scroll-mt-20"
    >
      <div className="container relative">
        <Sparkle className="absolute right-6 top-0 hidden h-6 w-6 fill-current text-beam sm:block" />
        <SectionLabel index="04" title="Reels for Narrativ" />
      </div>

      <Reveal delay={0.1}>
        <div className="container relative">
          <div
            ref={rowRef}
            className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2"
          >
            {narrativReels.map((r, i) => (
              <InstagramReelTrigger
                key={r.url}
                url={r.url}
                title={`Narrativ reel ${i + 1}`}
                className="group relative w-56 shrink-0 snap-start sm:w-64"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border-2 border-ink">
                  <Image
                    src={r.image}
                    alt={`Narrativ reel ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full border-2 border-ink bg-beam px-2.5 py-1 font-sans text-xs font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-paper bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-6 w-6 fill-paper text-paper" />
                    </div>
                  </div>
                </div>
              </InstagramReelTrigger>
            ))}
          </div>

          <button
            type="button"
            onClick={scroll}
            aria-label="Scroll right"
            className="absolute right-2 top-[42%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-beam text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
