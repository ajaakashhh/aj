import { producerWork, kaalamPesumKadhai } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { VideoCarousel } from "@/components/video-carousel";

export function Producer() {
  return (
    <section id="producer" className="sticky top-0 z-[80] flex h-screen flex-col justify-center overflow-hidden bg-ink py-6 scroll-mt-20 sm:py-8">
      <div className="container">
        <SectionLabel index="08" title="Producer" />
      </div>

      <Reveal delay={0.1}>
        <div className="container mt-5">
          <VideoCarousel items={producerWork} cardWidth="w-52 sm:w-60" aspect="aspect-[4/3]" />
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="container mt-5">
          <p className="mb-2 font-sans text-xs font-bold uppercase tracking-widest text-beam">
            Kaalam Pesum Kadhai
          </p>
          <VideoCarousel
            items={kaalamPesumKadhai}
            cardWidth="w-32 sm:w-40"
            aspect="aspect-[4/3]"
          />
        </div>
      </Reveal>
    </section>
  );
}
