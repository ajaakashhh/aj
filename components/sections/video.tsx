import { reels, formatViews } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { Play, TrendingUp } from "lucide-react";

export function Video() {
  const featured = reels.find((r) => r.featured)!;
  const rest = reels.filter((r) => !r.featured);

  return (
    <section id="video" className="container sticky top-0 z-30 flex h-screen flex-col justify-start overflow-hidden bg-paper py-10 scroll-mt-20 sm:py-14">
      <SectionLabel index="03" title="Reels & Video" />

      <Reveal>
        <p className="mb-12 max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
          Short-form political analysis and fact-checking. A curated set of the reels that
          traveled furthest, produced end-to-end.
        </p>
      </Reveal>

      {/* Featured 611k */}
      <Reveal>
        <div className="group relative grid overflow-hidden rounded-xl border-2 border-ink md:grid-cols-[1.1fr_1fr]">
          <div className="relative flex min-h-[280px] items-end bg-signal p-8 text-paper">
            <div className="absolute right-6 top-6 flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest">
              <TrendingUp className="h-4 w-4" /> Most watched
            </div>
            <div>
              <p className="font-display text-7xl leading-none sm:text-8xl">
                {formatViews(featured.views)}
              </p>
              <p className="mt-1 font-sans text-sm font-bold uppercase tracking-widest">
                views
              </p>
            </div>
            <div className="absolute inset-0 hatch opacity-10" aria-hidden />
          </div>
          <div className="flex flex-col justify-between gap-6 bg-paper p-8">
            <div>
              <span className="rounded-full border-2 border-ink bg-beam px-2 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider">
                {featured.theme}
              </span>
              <h3 className="mt-4 font-serif text-3xl leading-tight">
                {featured.title}
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink transition-colors group-hover:bg-ink group-hover:text-paper">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Grid of the rest */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((r, i) => (
          <Reveal key={r.title + i} delay={(i % 3) * 0.08}>
            <div className="group flex h-full flex-col justify-between rounded-xl border-2 border-ink p-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))]">
              <div className="flex items-start justify-between">
                <span className="font-display text-4xl text-signal">
                  {formatViews(r.views)}
                </span>
                <Play className="h-5 w-5 fill-current opacity-40 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 font-serif text-lg leading-snug">{r.title}</h3>
              <span className="mt-4 font-sans text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {r.theme}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
