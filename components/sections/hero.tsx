import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="flex h-screen flex-col justify-center overflow-hidden bg-beam pt-16"
    >
      <div className="container">
        <Reveal>
          <h1 className="font-display uppercase leading-[0.95] text-ink text-[11vw] sm:text-[6.5vw] lg:text-[5.5vw]">
            Bold stories,
            <br />
            grounded in fact.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-ink/80 sm:text-xl">
            {profile.aboutLead}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg border-2 border-ink bg-ink px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-beam shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              Get in touch
            </a>
            <a
              href="#video"
              className="flex items-center gap-2 rounded-lg border-2 border-ink bg-paper px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-ink shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              See my work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
