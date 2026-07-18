"use client";
import { useRef, useState } from "react";
import { ChevronRight, Play, Volume2, VolumeX, X } from "lucide-react";
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
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [openItem, setOpenItem] = useState<VideoItem | null>(null);
  const [muted, setMuted] = useState(true);

  const scroll = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * row.clientWidth * 0.8, behavior: "smooth" });
  };

  const openVideo = (item: VideoItem) => {
    setMuted(true);
    setOpenItem(item);
  };

  return (
    <div className="relative">
      <div
        ref={rowRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-5"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openVideo(item)}
            className={cn(cardWidth, "group shrink-0 text-left")}
          >
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-xl border-2 border-ink",
                aspect
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-4 w-4 fill-paper text-paper" />
                </div>
              </div>
            </div>
            <h3 className="mt-3 font-serif text-base leading-tight text-paper sm:text-lg">
              {item.title}
            </h3>
            {item.role && (
              <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-widest text-paper/70">
                {item.role}
              </p>
            )}
          </button>
        ))}
      </div>

      {items.length > 3 && (
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-[38%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-beam text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)] sm:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {openItem && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          onClick={() => setOpenItem(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-xl border-2 border-beam bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <iframe
                key={muted ? "muted" : "unmuted"}
                src={`https://www.youtube.com/embed/${openItem.id}?autoplay=1&mute=${
                  muted ? 1 : 0
                }&playsinline=1&rel=0`}
                title={openItem.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-3 sm:p-4">
              <p className="truncate font-serif text-sm text-paper">{openItem.title}</p>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMuted((m) => !m)}
                  aria-label={muted ? "Unmute" : "Mute"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setOpenItem(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
