import { reels, formatViews } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { InstagramReelTrigger } from "@/components/instagram-reel-trigger";
import { Play, TrendingUp } from "lucide-react";

export function Video() {
  const featured = reels.find((r) => r.featured)!;
  const rest = reels.filter((r) => !r.featured);

  return (
    <section id="video" className="flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper py-8 scroll-mt-20 sm:py-10">
      <div className="container">
        <SectionLabel index="03" title="Star Performers" theme="light" />

        <Reveal>
          <InstagramReelTrigger
            url={featured.url}
            title={featured.title}
            className="group relative grid w-full overflow-hidden rounded-xl border-2 border-ink bg-beam md:grid-cols-[1.1fr_1fr]"
          >
            <div className="relative flex min-h-[180px] items-end p-5 text-ink sm:min-h-[200px]">
              <div className="absolute right-4 top-4 flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest sm:text-xs">
                <TrendingUp className="h-4 w-4" /> Most watched
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-ink sm:text-6xl">
                  {formatViews(featured.views)}
                </p>
                <p className="mt-1 font-sans text-xs font-bold uppercase tracking-widest">
                  views
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-3 border-t-2 border-ink p-5 md:border-l-2 md:border-t-0">
              <h3 className="font-serif text-xl leading-tight text-ink sm:text-2xl">
                {featured.title}
              </h3>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </div>
          </InstagramReelTrigger>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {rest.map((r, i) => (
            <Reveal key={r.title + i} delay={(i % 5) * 0.06}>
              <InstagramReelTrigger
                url={r.url}
                title={r.title}
                className="group flex h-full w-full flex-col justify-between rounded-xl border-2 border-ink bg-beam p-4 text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl text-ink">
                    {formatViews(r.views)}
                  </span>
                  <Play className="h-4 w-4 fill-current opacity-40 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-3 font-serif text-sm leading-snug">{r.title}</h3>
              </InstagramReelTrigger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
