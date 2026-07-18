import { reels, formatViews } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";

export function Press() {
  const totalViews = reels.reduce((s, r) => s + r.views, 0);
  return (
    <section id="press" className="sticky top-0 z-[80] flex h-screen flex-col justify-between overflow-hidden scroll-mt-20 border-t-2 border-ink bg-ink text-paper">
      <div className="container py-6 sm:py-8">
        <div className="mb-4 flex items-baseline gap-4 border-b-2 border-paper pb-3">
          <span className="font-display text-lg text-beam">08</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Press & Recognition
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="font-display text-5xl leading-none text-beam sm:text-6xl">
              {formatViews(totalViews)}+
            </p>
            <p className="mt-1 font-sans text-xs font-bold uppercase tracking-widest sm:text-sm">
              combined views across featured reels
            </p>
            <p className="mt-3 line-clamp-2 font-serif text-sm leading-snug text-paper/70">
              A growing creator presence built on fact-checking, accountability, and data-driven
              political journalism with a Tamil Nadu focus.
            </p>
          </Reveal>

          <div className="divide-y divide-paper/20 border-y border-paper/20">
            {reels.map((r, i) => (
              <Reveal key={r.title + i} delay={(i % 8) * 0.04}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-6 py-2 hover:text-beam"
                >
                  <p className="font-serif text-xs leading-snug sm:text-sm">{r.title}</p>
                  <span className="shrink-0 font-display text-base text-beam sm:text-lg">
                    {formatViews(r.views)}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-paper/20 py-3">
        <Marquee
          reverse
          items={["Fact-checked", "Debunked", "Data-driven", "Accountability", "Tamil Nadu"]}
        />
      </div>
    </section>
  );
}
