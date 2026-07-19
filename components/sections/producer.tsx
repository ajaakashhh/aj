"use client";
import { useState } from "react";
import { producerWork, kaalamPesumKadhai } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { FannedCarousel } from "@/components/fanned-carousel";
import { ExternalLink, Play, Volume2, VolumeX, X } from "lucide-react";
import Image from "next/image";

type VideoItem = {
  id: string;
  title: string;
  image: string;
  role?: string;
};

export function Producer() {
  const [openItem, setOpenItem] = useState<VideoItem | null>(null);
  const [muted, setMuted] = useState(true);

  const openVideo = (item: VideoItem) => {
    setMuted(true);
    setOpenItem(item);
  };

  const renderCard = (item: VideoItem, _i: number, isActive: boolean, activate: () => void) =>
    isActive ? (
      <button
        type="button"
        onClick={() => openVideo(item)}
        aria-label={`Play ${item.title}`}
        className="group relative block h-full w-full"
      >
        <Image src={item.image} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-paper bg-ink/60">
            <Play className="h-5 w-5 fill-paper text-paper" />
          </div>
        </div>
      </button>
    ) : (
      <button
        type="button"
        onClick={activate}
        aria-label={`Show ${item.title}`}
        className="relative block h-full w-full"
      >
        <Image src={item.image} alt={item.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-ink/30" />
      </button>
    );

  return (
    <section id="producer" className="flex h-screen flex-col justify-center overflow-hidden bg-ink py-6 scroll-mt-20 sm:py-8">
      <div className="container">
        <SectionLabel index="05" title="Producer" />
      </div>

      <Reveal delay={0.1}>
        <div className="container flex justify-center gap-4">
          {producerWork.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openVideo(item)}
              aria-label={`Play ${item.title}`}
              className="group relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-xl border-2 border-ink shadow-[6px_6px_0_0_hsl(var(--ink))] sm:w-56"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-paper bg-ink/60">
                  <Play className="h-4 w-4 fill-paper text-paper" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="text-center font-sans text-xs font-bold uppercase tracking-widest text-beam">
          Kaalam Pesum Kadhai <span className="text-paper/60">· Writer, Producer</span>
        </p>
        <FannedCarousel items={kaalamPesumKadhai} aspect="aspect-[4/3]" cardWidth={130} renderItem={renderCard} />
      </Reveal>

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
                <a
                  href={`https://www.youtube.com/watch?v=${openItem.id}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch on YouTube"
                  title="Watch on YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
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
    </section>
  );
}
