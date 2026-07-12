import { governmentWork } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Landmark } from "lucide-react";

export function Government() {
  return (
    <section id="work" className="scroll-mt-20 border-y-2 border-ink bg-beam">
      <div className="container py-20 sm:py-28">
        <div className="mb-10 flex items-baseline gap-4 border-b-2 border-ink pb-4">
          <span className="font-display text-lg text-signal">05</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Political & Government Work
          </h2>
        </div>

        <Reveal>
          <p className="max-w-2xl font-serif text-lg leading-relaxed text-ink/70">
            Communications and media work across government and political spaces. Described in
            general terms, without sensitive namedropping.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {governmentWork.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl border-2 border-ink bg-paper p-8">
                <Landmark className="mb-6 h-6 w-6 text-signal" />
                <h3 className="font-display text-xl uppercase leading-tight tracking-tight">
                  {g.title}
                </h3>
                <p className="mt-4 font-serif leading-relaxed text-muted-foreground">
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
