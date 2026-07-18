import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container sticky top-0 z-10 flex h-screen flex-col justify-center overflow-y-auto bg-paper py-20 scroll-mt-30">
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

          <Reveal delay={0.24}>
            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Essays
              </p>
              <div className="space-y-3">
                {profile.essays.map((e) => (
                  <a
                    key={e.url}
                    href={e.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-ink/20 pb-2 font-serif text-base leading-snug transition-colors hover:border-ink"
                  >
                    <span>{e.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
