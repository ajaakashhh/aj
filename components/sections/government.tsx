import { governmentWork } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Landmark } from "lucide-react";

export function Government() {
  return (
    <section id="work" className="sticky top-0 z-[60] flex h-screen flex-col justify-center overflow-hidden scroll-mt-20 border-y-2 border-ink bg-beam">
      <div className="container py-8 sm:py-10">
        <div className="mb-6 flex items-baseline gap-4 border-b-2 border-ink pb-3">
          <span className="font-display text-lg text-signal">06</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Political & Government Work
          </h2>
        </div>

        <Reveal>
          <p className="max-w-2xl font-serif text-sm leading-relaxed text-ink/70 sm:text-base">
            Communications and media work across government and political spaces. Described in
            general terms, without sensitive namedropping.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {governmentWork.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl border-2 border-ink bg-paper p-4 sm:p-5">
                <Landmark className="mb-3 h-5 w-5 text-signal" />
                <h3 className="font-display text-base uppercase leading-tight tracking-tight sm:text-lg">
                  {g.title}
                </h3>
                <p className="mt-2 line-clamp-3 font-serif text-sm leading-snug text-muted-foreground">
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
