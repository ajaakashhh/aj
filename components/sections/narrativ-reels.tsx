"use client";
import { useRef } from "react";
import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ChevronRight, Play } from "lucide-react";
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
        <div className="container relative mt-8">
          <div
            ref={rowRef}
            className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-2"
          >
            {narrativReels.map((r, i) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
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
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scroll}
            aria-label="Scroll right"
            className="absolute right-0 top-[42%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-beam text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)] sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
