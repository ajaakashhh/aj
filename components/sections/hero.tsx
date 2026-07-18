import { Marquee } from "@/components/marquee";
import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="sticky top-0 z-0 flex h-screen flex-col overflow-hidden bg-beam">

      {/* Top row: name + get in touch */}
      <div className="container relative z-20 flex items-start justify-between pt-8 pb-4">
        <span className="font-display text-sm uppercase leading-tight tracking-wide">
          <br />
        </span>
      </div>

      {/* Text rows fill ALL remaining height, edge to edge, no centering gap */}
      <div className="relative flex-1 flex flex-col">

        <div className="flex-1 flex items-center border-y border-ink/30">
          <Marquee
            items={["Writer.", "Writer.", "Writer.",]}
            className="font-display text-white text-[9vw] uppercase leading-none sm:text-[6vw] lg:text-[5.5vw]"
          />
        </div>

        <div className="flex-1 flex items-center border-b border-ink/30">
          <Marquee
            items={["Journalist.", "Journalist.", "Journalist.",]}
            className="font-display text-[9vw] uppercase leading-none sm:text-[4vw] lg:text-[5.5vw]"
          />
        </div>

        <div className="flex-1 flex items-center border-b border-ink/30">
          <Marquee
            items={["Media Producer.", "Media Producer.", "Media Producer.",]}
            className="font-display text-white text-[9vw] uppercase leading-none sm:text-[6vw] lg:text-[5.5vw]"
          />
        </div>

        {/* Photo centered dead-center of this whole block, both axes. Static, no animation. */}
        <div className="absolute inset-0 z-10 m-auto w-[260px] h-[360px] sm:w-[300px] sm:h-[400px] lg:w-[500px] lg:h-[600px]">
          <Image
            src="/aj.png"
            alt="Aakash Srividhya portrait"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>


    </section>
  );
}
