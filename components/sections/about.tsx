import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="sticky top-0 z-10 flex h-screen flex-col justify-center overflow-hidden bg-paper py-10 scroll-mt-30 sm:py-14">
      <div className="container">
        <SectionLabel index="01" title="About" />

        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="font-serif text-2xl leading-snug sm:text-4xl">
              {profile.aboutLead}
            </p>
          </Reveal>

          <div className="space-y-5">
            {profile.aboutBody.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-serif text-base leading-relaxed text-muted-foreground sm:text-xl">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-10">
            <h3 className="mb-4 font-display text-xl uppercase tracking-tight sm:text-2xl">
              Essays
            </h3>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {profile.essays.map((e) => (
                <a
                  key={e.url}
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center gap-4 sm:w-auto"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 border-ink sm:h-24 sm:w-24">
                    <Image
                      src={e.image}
                      alt={e.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="max-w-[260px] font-serif text-sm leading-snug group-hover:underline sm:text-base">
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
