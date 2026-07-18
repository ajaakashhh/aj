import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export function Instagram() {
  const stats = profile.instagramStats;

  return (
    <section
      id="instagram"
      className="sticky top-0 z-20 flex h-screen flex-col justify-start overflow-y-auto scroll-mt-20 border-y-2 border-ink bg-signal text-paper"
    >
      <div className="hatch pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="container relative py-20 sm:py-28">
        <div className="mb-10 flex items-baseline gap-4 border-b-2 border-paper pb-4">
          <span className="font-display text-lg text-beam">02</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Instagram Presence
          </h2>
        </div>

        <Reveal>
          <p className="text-stroke font-display text-[16vw] leading-[0.85] sm:text-[10vw] lg:text-[9vw]">
            {stats.cumulativeViews}
          </p>
          <p className="mt-1 font-sans text-sm font-bold uppercase tracking-widest text-paper sm:text-base">
            cumulative views across Instagram
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 md:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="mx-auto w-full max-w-sm rounded-2xl border-2 border-dashed border-beam bg-ink p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-paper">
                  <Image src="/aj.png" alt={profile.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans text-sm font-bold">{profile.name}</p>
                  <p className="font-serif text-sm text-paper/60">Writer</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-y border-paper/20 py-4 text-center">
                <div>
                  <p className="font-display text-2xl text-beam">{stats.posts}</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-paper/60">
                    Posts
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-beam">
                    {stats.followers.toLocaleString()}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-paper/60">
                    Followers
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-beam">{stats.following}</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-paper/60">
                    Following
                  </p>
                </div>
              </div>

              <p className="mt-4 font-serif text-sm leading-relaxed text-paper/80">
                {profile.location} | Journalist
                <br />
                Writer | Filmmaker | Poet
              </p>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-sans text-xs font-bold text-beam underline underline-offset-2"
              >
                {profile.links.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mx-auto max-w-sm">
              <div className="mb-6 flex items-end gap-4 text-ink">
                <Sparkle className="h-7 w-7 fill-current" />
                <Sparkle className="h-5 w-5 fill-current" />
                <Sparkle className="h-4 w-4 fill-current" />
              </div>
              <div className="rounded-2xl border-2 border-ink bg-beam p-6 text-ink shadow-[6px_6px_0_0_hsl(var(--ink))]">
                <p className="font-sans text-lg font-bold leading-snug">
                  Built on political commentary, fact-checking, and data-driven journalism.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
