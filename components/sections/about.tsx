import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="container sticky top-0 z-10 flex h-screen flex-col justify-start overflow-y-auto bg-paper py-20 scroll-mt-30">
      <SectionLabel index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="font-serif text-2xl leading-snug sm:text-3xl">
            {profile.aboutLead}
          </p>
        </Reveal>

        <div className="space-y-6">
          {profile.aboutBody.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-serif text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.24}>
        <div className="mt-12">
          <h3 className="mb-4 font-display text-2xl uppercase tracking-tight sm:text-3xl">
            Essays
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {profile.essays.map((e) => (
              <a
                key={e.url}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-xl border-2 border-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="bg-paper p-4 font-serif text-sm leading-snug">
                  {e.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
