import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="sticky top-0 z-10 flex h-screen flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-30 sm:py-10">
      <div className="container">
        <SectionLabel index="01" title="About" />

        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="font-serif text-xl leading-snug sm:text-2xl">
              {profile.aboutLead}
            </p>
          </Reveal>

          <div className="space-y-3">
            {profile.aboutBody.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-serif text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-6">
            <h3 className="mb-3 font-display text-lg uppercase tracking-tight sm:text-xl">
              Essays
            </h3>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {profile.essays.map((e) => (
                <a
                  key={e.url}
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center gap-3 sm:w-auto"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 border-ink sm:h-16 sm:w-16">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="max-w-[220px] font-serif text-xs leading-snug group-hover:underline sm:text-sm">
                    {e.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
