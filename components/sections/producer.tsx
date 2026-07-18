import { producerWork } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ScrollRow } from "@/components/scroll-row";
import { Play } from "lucide-react";
import Image from "next/image";

export function Producer() {
  return (
    <section id="producer" className="sticky top-0 z-[70] flex h-screen flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-20 sm:py-10">
      <div className="container">
        <SectionLabel index="07" title="Producer" />

        <Reveal>
          <p className="max-w-2xl font-serif text-base leading-relaxed text-muted-foreground sm:text-lg">
            Content and script producer credits, from documentary work to long-running shows.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ScrollRow className="container mt-6">
          {producerWork.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group w-64 shrink-0 snap-start sm:w-72"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-ink">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-paper bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Play className="h-5 w-5 fill-paper text-paper" />
                  </div>
                </div>
              </div>
              <h3 className="mt-3 font-serif text-base leading-tight sm:text-lg">{p.title}</h3>
              <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {p.role}
              </p>
            </a>
          ))}
        </ScrollRow>
      </Reveal>
    </section>
  );
}
