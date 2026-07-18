import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export function Instagram() {
  const stats = profile.instagramStats;

  return (
    <section
      id="instagram"
      className="sticky top-0 z-20 flex h-screen flex-col justify-center overflow-hidden border-y-2 border-ink bg-signal text-paper"
    >
      <div className="hatch pointer-events-none absolute inset-0 opacity-10" aria-hidden />

      <div className="container relative py-6 sm:py-8">
        <div className="mb-3 flex items-baseline gap-4 border-b-2 border-paper pb-3">
          <span className="font-display text-lg text-beam">02</span>
          <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
            Instagram Presence
          </h2>
        </div>

        <Reveal>
          <p className="whitespace-nowrap text-center font-display text-[min(20vw,14vh)] leading-none text-beam">
            {stats.cumulativeViews}
          </p>
          <p className="mt-2 text-center font-sans text-xs font-bold uppercase tracking-widest text-paper sm:text-sm">
            cumulative views across Instagram
          </p>
        </Reveal>

        <div className="mt-5 grid items-center gap-6 md:grid-cols-2">
          <Reveal delay={0.08}>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-[170px] -rotate-2 rounded-2xl border-2 border-dashed border-beam bg-ink p-1.5 shadow-[6px_6px_0_0_hsl(var(--ink))] transition-transform hover:rotate-0"
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
            <p className="mt-2 text-center font-sans text-[10px] font-bold uppercase tracking-widest text-paper/70">
              {stats.followers.toLocaleString()} followers · {stats.posts} posts ·{" "}
              {profile.links.instagramHandle}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mx-auto max-w-sm">
              <div className="mb-3 flex items-end gap-3 text-ink">
                <Sparkle className="h-6 w-6 fill-current" />
                <Sparkle className="h-4 w-4 fill-current" />
                <Sparkle className="h-3 w-3 fill-current" />
              </div>
              <div className="rounded-2xl border-2 border-ink bg-beam p-4 text-ink shadow-[6px_6px_0_0_hsl(var(--ink))] sm:p-5">
                <p className="font-sans text-base font-bold leading-snug">
                  Built on political commentary, fact-checking, and data-driven journalism.
                </p>
              </div>
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block font-sans text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-2"
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
