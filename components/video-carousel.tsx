"use client";
import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type VideoItem = {
  id: string;
  title: string;
  image: string;
  role?: string;
};

export function VideoCarousel({
  items,
  cardWidth = "w-64 sm:w-72",
  aspect = "aspect-[4/3]",
}: {
  items: VideoItem[];
  cardWidth?: string;
  aspect?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-video-id]")
    );
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { id: string; ratio: number } | null = null;
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.videoId;
          if (!id) continue;
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.ratio)) {
            best = { id, ratio: entry.intersectionRatio };
          }
        }
        if (best) setActiveId(best.id);
      },
      {
        root: container,
        rootMargin: "0px -35% 0px -35%",
        threshold: [0.25, 0.5, 0.75, 0.95],
      }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 sm:gap-5"
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <div
            key={item.id}
            data-video-id={item.id}
            className={cn(cardWidth, "shrink-0 snap-start")}
          >
            <div className={cn("relative w-full overflow-hidden rounded-xl border-2 border-ink bg-ink", aspect)}>
              {isActive ? (
                <>
                  <iframe
                    key={muted ? "muted" : "unmuted"}
                    src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=${
                      muted ? 1 : 0
                    }&playsinline=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${item.id}`}
                    title={item.title}
                    allow="autoplay; encrypted-media"
                    className="absolute inset-0 h-full w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setMuted((m) => !m)}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-ink/70 text-paper transition-colors hover:bg-ink"
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </>
              ) : (
                <>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-ink/60">
                      <Play className="h-4 w-4 fill-paper text-paper" />
                    </div>
                  </div>
                </>
              )}
            </div>
            <h3 className="mt-3 font-serif text-base leading-tight sm:text-lg">{item.title}</h3>
            {item.role && (
              <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {item.role}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
