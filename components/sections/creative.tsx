import { creativeWork } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { BookOpen, Clapperboard, Headphones } from "lucide-react";

const icons = { Poetry: BookOpen, "Short film": Clapperboard, Audiobook: Headphones } as const;

export function Creative() {
  return (
    <section id="creative" className="container sticky top-0 z-[60] flex h-screen flex-col justify-start overflow-y-auto bg-paper py-20 scroll-mt-20 sm:py-28">
      <SectionLabel index="06" title="Creative Work" />

      <div className="grid gap-px overflow-hidden rounded-xl border-2 border-ink bg-ink md:grid-cols-3">
        {creativeWork.map((c, i) => {
          const Icon = icons[c.kind as keyof typeof icons] ?? BookOpen;
          return (
            <Reveal key={c.title} delay={i * 0.1} className="h-full">
              <div className="group flex h-full flex-col justify-between bg-paper p-8 transition-colors hover:bg-signal hover:text-paper">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-paper/80">
                    {c.kind}
                  </span>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-16">
                  <h3 className="font-serif text-2xl italic leading-tight">{c.title}</h3>
                  <p className="mt-3 font-serif leading-relaxed text-muted-foreground group-hover:text-paper/90">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 font-serif text-lg italic text-muted-foreground">
          Plus freelance writing for political parties, organisations, and production houses.
        </p>
      </Reveal>
    </section>
  );
}
