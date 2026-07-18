import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="container scroll-mt-30 pt-4">
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
    </section>
  );
}
