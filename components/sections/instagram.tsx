import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export function Instagram() {
  const stats = profile.instagramStats;

  return (
    <section
      id="instagram"
      className="sticky top-0 z-20 flex min-h-screen flex-col justify-center scroll-mt-20 border-y-2 border-ink bg-signal text-paper"
    >
      <div className="hatch pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="container relative pt-10 sm:pt-14">
        <div className="mb-6 flex items-baseline gap-4 border-b-2 border-paper pb-4">
          <span className="font-display text-lg text-beam">02</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Instagram Presence
          </h2>
        </div>
      </div>

      <Reveal>
        <div className="overflow-hidden border-y-2 border-paper/40 py-2">
          <p className="whitespace-nowrap text-center font-display text-[24vw] leading-none text-beam sm:text-[16vw] lg:text-[14vw]">
            {stats.cumulativeViews}
          </p>
        </div>
        <p className="mt-3 text-center font-sans text-sm font-bold uppercase tracking-widest text-paper sm:text-base">
          cumulative views across Instagram
        </p>
      </Reveal>

      <div className="container relative py-6 sm:py-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal delay={0.08}>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-[260px] -rotate-2 rounded-2xl border-2 border-dashed border-beam bg-ink p-2 shadow-[8px_8px_0_0_hsl(var(--ink))] transition-transform hover:rotate-0"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/instagram-profile.jpeg"
                  alt={`${profile.name} Instagram profile`}
                  width={1001}
                  height={1600}
                  className="h-auto w-full"
                />
              </div>
            </a>
            <p className="mt-4 text-center font-sans text-xs font-bold uppercase tracking-widest text-paper/70">
              {stats.followers.toLocaleString()} followers · {stats.posts} posts ·{" "}
              {profile.links.instagramHandle}
            </p>
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
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-sans text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-2"
              >
                Follow {profile.links.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
