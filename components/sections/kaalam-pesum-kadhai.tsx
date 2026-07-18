import { kaalamPesumKadhai } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { VideoCarousel } from "@/components/video-carousel";

export function KaalamPesumKadhai() {
  return (
    <section
      id="kaalam-pesum-kadhai"
      className="sticky top-0 z-[80] flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal scroll-mt-20"
    >
      <div className="container">
        <SectionLabel index="08" title="Kaalam Pesum Kadhai" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-paper/80">
            Program producer, R&amp;D, and script writer for IBC Tamil&apos;s long-running history
            and politics show. Tap a video to watch.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="container mt-6">
          <VideoCarousel
            items={kaalamPesumKadhai}
            cardWidth="w-40 sm:w-48"
            aspect="aspect-[4/3]"
          />
        </div>
      </Reveal>
    </section>
  );
}
