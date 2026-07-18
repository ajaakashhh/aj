import { BurnReveal } from "@/components/burn-reveal";

const wordClass =
  "font-display text-ink text-[27vw] uppercase leading-none sm:text-[18vw] lg:text-[16.5vw]";

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
          <BurnReveal
            word="Writer."
            delay={0}
            textClassName={wordClass}
            curtainClassName="bg-ink"
          />
        </div>

        <div className="flex-1 border-b border-ink/30">
          <BurnReveal
            word="Journalist."
            delay={0.5}
            direction="left"
            textClassName={wordClass}
            curtainClassName="bg-signal"
          />
        </div>

        <div className="flex-1 border-b border-ink/30">
          <BurnReveal
            word="Media Producer."
            delay={1}
            textClassName={wordClass}
            curtainClassName="bg-ink"
          />
        </div>

      </div>


    </section>
  );
}
