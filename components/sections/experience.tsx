import { work } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-20 py-20 sm:py-28">
      <SectionLabel index="04" title="Work History" />

      <div className="border-t-2 border-ink">
        {work.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.05}>
            <div className="group grid gap-4 border-b-2 border-ink py-8 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="md:w-64">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-3xl uppercase tracking-tight">{job.org}</h3>
                  {job.current && (
                    <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-signal">
                      <span className="h-full w-full animate-ping rounded-full bg-signal" />
                    </span>
                  )}
                </div>
                <p className="mt-1 font-sans text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {job.period}
                </p>
              </div>
              <div>
                <p className="font-sans text-sm font-bold uppercase tracking-wider">
                  {job.title}
                </p>
                <p className="mt-3 max-w-2xl font-serif leading-relaxed text-muted-foreground">
                  {job.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/30 px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-ink group-hover:text-ink"
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
    </section>
  );
}
