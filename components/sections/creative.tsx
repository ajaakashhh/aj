import { creativeWork } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { BookOpen, Clapperboard, Headphones } from "lucide-react";

const icons = { Poetry: BookOpen, "Short film": Clapperboard, Audiobook: Headphones } as const;

export function Creative() {
  return (
    <section id="creative" className="sticky top-0 z-[70] flex h-screen flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-20 sm:py-10">
      <div className="container">
        <SectionLabel index="07" title="Creative Work" />

        <div className="grid gap-px overflow-hidden rounded-xl border-2 border-ink bg-ink md:grid-cols-3">
          {creativeWork.map((c, i) => {
            const Icon = icons[c.kind as keyof typeof icons] ?? BookOpen;
            return (
              <Reveal key={c.title} delay={i * 0.1} className="h-full">
                <div className="group flex h-full flex-col justify-between bg-paper p-4 transition-colors hover:bg-signal hover:text-paper sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-paper/80">
                      {c.kind}
                    </span>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-serif text-lg italic leading-tight sm:text-xl">{c.title}</h3>
                    <p className="mt-2 line-clamp-2 font-serif text-sm leading-snug text-muted-foreground group-hover:text-paper/90">
                      {c.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-4 font-serif text-sm italic text-muted-foreground sm:text-base">
            Plus freelance writing for political parties, organisations, and production houses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
