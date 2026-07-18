import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="sticky top-0 z-10 flex h-screen flex-col justify-center overflow-hidden bg-paper py-14 scroll-mt-30 sm:py-20">
      <div className="container">
        <SectionLabel index="01" title="About" theme="light" />

        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="font-serif text-3xl leading-snug sm:text-5xl">
              {profile.aboutLead}
            </p>
          </Reveal>

          <div className="space-y-6">
            {profile.aboutBody.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="font-serif text-lg leading-relaxed text-muted-foreground sm:text-2xl">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
