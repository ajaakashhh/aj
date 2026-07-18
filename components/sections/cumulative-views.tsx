import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function CumulativeViews() {
  const stats = profile.instagramStats;

  return (
    <section
      id="views"
      className="sticky top-0 z-30 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal text-paper scroll-mt-20"
    >
      <div className="hatch pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="container relative py-8 sm:py-10">
        <SectionLabel index="03" title="The Numbers" />

        <Reveal>
          <p className="whitespace-nowrap text-center font-display text-[min(30vw,45vh)] leading-none text-beam">
            {stats.cumulativeViews}
          </p>
          <p className="mt-4 text-center font-sans text-sm font-bold uppercase tracking-widest text-paper sm:text-base">
            cumulative views across Instagram
          </p>
        </Reveal>
      </div>
    </section>
  );
}
