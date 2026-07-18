import { producerWork } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { VideoCarousel } from "@/components/video-carousel";

export function Producer() {
  return (
    <section id="producer" className="sticky top-0 z-[70] flex h-screen flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-20 sm:py-10">
      <div className="container">
        <SectionLabel index="07" title="Producer" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            Content producer credits. The centered video plays automatically, muted.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="container mt-6">
          <VideoCarousel items={producerWork} />
        </div>
      </Reveal>
    </section>
  );
}
