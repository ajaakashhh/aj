"use client";
import { useRef } from "react";
import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { ChevronRight, Sparkle } from "lucide-react";
import Image from "next/image";

export function Essays() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const scroll = () => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: row.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="essays" className="sticky top-0 z-[60] flex h-screen flex-col justify-center overflow-hidden bg-beam py-10 scroll-mt-20 sm:py-14">
      <div className="container relative">
        <Sparkle className="absolute right-6 top-0 hidden h-6 w-6 fill-current text-ink sm:block" />
        <SectionLabel index="06" title="Essays" theme="light" />
      </div>

      <Reveal delay={0.1}>
        <div className="container relative">
          <div
            ref={rowRef}
            className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2"
          >
            {profile.essays.map((e) => (
              <a
                key={e.url}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group block w-72 shrink-0 snap-start overflow-hidden rounded-xl border-2 border-ink bg-paper transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))] sm:w-80"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-ink">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 font-serif text-sm leading-snug text-ink sm:text-base">
                  {e.title}
                </p>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scroll}
            aria-label="Scroll right"
            className="absolute right-0 top-[38%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ink bg-ink text-paper shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[calc(-50%+1px)] sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
