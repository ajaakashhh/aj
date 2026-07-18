import { work } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="sticky top-0 z-[80] flex h-screen flex-col justify-center overflow-hidden bg-beam py-6 scroll-mt-20 sm:py-8">
      <div className="container">
        <SectionLabel index="08" title="Work History" theme="light" />

        <div className="border-t-2 border-ink">
          {work.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.05}>
              <div className="group grid gap-2 border-b-2 border-ink py-3 md:grid-cols-[auto_1fr] md:gap-6 md:py-3">
                <div className="md:w-56">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg uppercase tracking-tight sm:text-xl">{job.org}</h3>
                    {job.current && (
                      <span className="flex h-2 w-2 shrink-0 rounded-full bg-signal">
                        <span className="h-full w-full animate-ping rounded-full bg-signal" />
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-ink/60">
                    {job.title}
                  </p>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink/60">
                    {job.period}
                  </p>
                </div>
                <div>
                  <p className="line-clamp-1 max-w-2xl font-serif text-sm leading-snug text-ink/80">
                    {job.body}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {job.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
