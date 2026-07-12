import { profile, cadence } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="container scroll-mt-30 pt-4">
      <SectionLabel index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="font-serif text-2xl leading-snug sm:text-3xl">
            {profile.aboutLead}
          </p>
          <div className="mt-8 hatch h-40 w-full rounded-xl border-2 border-ink" aria-hidden />
        </Reveal>

        <div className="space-y-6">
          {profile.aboutBody.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-serif text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Political identity
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.politicalIdentity.map((tag, i) => (
                  <Badge key={tag} variant={i === 0 ? "signal" : "default"}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border-2 border-ink bg-ink sm:grid-cols-3">
          {cadence.map((c) => (
            <div key={c.label} className="bg-paper p-6">
              <p className="font-display text-5xl text-signal">{c.value}</p>
              <p className="mt-2 font-sans text-sm font-bold uppercase tracking-wider">
                {c.label}
              </p>
              <p className="font-serif text-sm text-muted-foreground">{c.unit}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
