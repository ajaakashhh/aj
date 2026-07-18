import { BoulderReveal } from "@/components/boulder-reveal";

const wordClass =
  "font-display text-ink text-[9vw] uppercase leading-none sm:text-[6vw] lg:text-[5.5vw]";

export function Hero() {
  return (
    <section id="top" className="flex h-screen flex-col overflow-hidden bg-beam">

      {/* Top row: name + get in touch */}
      <div className="container relative z-20 flex items-start justify-between pt-8 pb-4">
        <span className="font-display text-sm uppercase leading-tight tracking-wide">
          <br />
        </span>
      </div>

      {/* Text rows fill ALL remaining height, edge to edge, no centering gap */}
      <div className="relative flex-1 flex flex-col">

        <div className="flex-1 border-y border-ink/30">
          <BoulderReveal
            word="Writer."
            delay={0}
            textClassName={wordClass}
            curtainClassName="bg-ink"
            figureClassName="text-beam"
          />
        </div>

        <div className="flex-1 border-b border-ink/30">
          <BoulderReveal
            word="Journalist."
            delay={0.5}
            direction="left"
            textClassName={wordClass}
            curtainClassName="bg-signal"
            figureClassName="text-paper"
          />
        </div>

        <div className="flex-1 border-b border-ink/30">
          <BoulderReveal
            word="Media Producer."
            delay={1}
            textClassName={wordClass}
            curtainClassName="bg-ink"
            figureClassName="text-beam"
          />
        </div>

      </div>


    </section>
  );
}
