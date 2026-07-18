import { reels, formatViews } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";

export function Press() {
  const totalViews = reels.reduce((s, r) => s + r.views, 0);
  return (
    <section id="press" className="sticky top-0 z-[70] flex min-h-screen flex-col justify-between scroll-mt-20 border-t-2 border-ink bg-ink text-paper">
      <div className="container py-16 sm:py-20">
        <div className="mb-10 flex items-baseline gap-4 border-b-2 border-paper pb-4">
          <span className="font-display text-lg text-beam">07</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Press & Recognition
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="font-display text-7xl leading-none text-beam sm:text-8xl">
              {formatViews(totalViews)}+
            </p>
            <p className="mt-2 font-sans text-sm font-bold uppercase tracking-widest">
              combined views across featured reels
            </p>
            <p className="mt-6 font-serif leading-relaxed text-paper/70">
              A growing creator presence built on fact-checking, accountability, and data-driven
              political journalism with a Tamil Nadu focus.
            </p>
          </Reveal>

          <div className="divide-y-2 divide-paper/20 border-y-2 border-paper/20">
            {reels.map((r, i) => (
              <Reveal key={r.title + i} delay={(i % 8) * 0.04}>
                <div className="flex items-center justify-between gap-6 py-4">
                  <p className="font-serif text-sm leading-snug sm:text-base">{r.title}</p>
                  <span className="shrink-0 font-display text-xl text-beam sm:text-2xl">
                    {formatViews(r.views)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-paper/20 py-4">
        <Marquee
          reverse
          items={["Fact-checked", "Debunked", "Data-driven", "Accountability", "Tamil Nadu"]}
        />
      </div>
    </section>
  );
}
