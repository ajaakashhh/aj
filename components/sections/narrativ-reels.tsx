"use client";
import { narrativReels } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { InstagramReelTrigger } from "@/components/instagram-reel-trigger";
import { FannedCarousel } from "@/components/fanned-carousel";
import { Play, Sparkle } from "lucide-react";
import Image from "next/image";

export function NarrativReels() {
  return (
    <section
      id="narrativ-reels"
      className="flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal scroll-mt-20"
    >
      <div className="container relative">
        <Sparkle className="absolute right-6 top-0 hidden h-6 w-6 fill-current text-beam sm:block" />
        <SectionLabel index="04" title="Reels for Narrativ" />
      </div>

      <Reveal delay={0.1}>
        <FannedCarousel
          items={narrativReels}
          aspect="aspect-[9/16]"
          cardWidth={190}
          renderItem={(r, i, isActive, activate) =>
            isActive ? (
              <InstagramReelTrigger
                url={r.url}
                title={`Narrativ reel ${i + 1}`}
                className="group relative block h-full w-full"
              >
                <Image
                  src={r.image}
                  alt={`Narrativ reel ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-paper bg-ink/60">
                    <Play className="h-6 w-6 fill-paper text-paper" />
                  </div>
                </div>
              </InstagramReelTrigger>
            ) : (
              <button
                type="button"
                onClick={activate}
                aria-label={`Show Narrativ reel ${i + 1}`}
                className="relative block h-full w-full"
              >
                <Image
                  src={r.image}
                  alt={`Narrativ reel ${i + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/25" />
              </button>
            )
          }
        />
      </Reveal>
    </section>
  );
}
