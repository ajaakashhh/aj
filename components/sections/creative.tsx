import { creativeWork } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const rotation = ["-rotate-2", "rotate-2"];

export function Creative() {
  return (
    <section id="creative" className="flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-20 sm:py-10">
      <div className="container">
        <SectionLabel index="07" title="Creative Work" theme="light" />

        <div className="grid gap-8 sm:grid-cols-2">
          {creativeWork.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className={`group block ${rotation[i % rotation.length]} overflow-hidden rounded-xl border-2 border-ink bg-ink shadow-[8px_8px_0_0_hsl(var(--ink))] transition-transform hover:rotate-0`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border-2 border-ink bg-beam px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-widest text-ink">
                    {c.kind}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <div>
                      <h3 className="font-serif text-xl italic leading-tight text-paper sm:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 font-serif text-sm text-paper/80">
                        {c.body}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-paper transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 font-serif text-sm italic text-ink/80 sm:text-base">
            Plus freelance writing for news organizations and production houses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
