import { profile } from "@/lib/data";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export function Essays() {
  return (
    <section id="essays" className="sticky top-0 z-20 flex h-screen flex-col justify-center overflow-hidden bg-beam py-10 scroll-mt-20 sm:py-14">
      <div className="container">
        <SectionLabel index="02" title="Essays" theme="light" />

        <div className="grid gap-6 sm:grid-cols-3">
          {profile.essays.map((e, i) => (
            <Reveal key={e.url} delay={i * 0.1}>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl border-2 border-ink bg-paper transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_0_hsl(var(--ink))]"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
