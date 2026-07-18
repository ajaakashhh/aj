import { Nav } from "@/components/nav";
import { PageFlipSound } from "@/components/page-flip-sound";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Instagram } from "@/components/sections/instagram";
import { CumulativeViews } from "@/components/sections/cumulative-views";
import { Video } from "@/components/sections/video";
import { NarrativReels } from "@/components/sections/narrativ-reels";
import { Experience } from "@/components/sections/experience";
import { Government } from "@/components/sections/government";
import { Creative } from "@/components/sections/creative";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <PageFlipSound />
      <Hero />
      <About />
      <Instagram />
      <CumulativeViews />
      <Video />
      <NarrativReels />
      <Experience />
      <Government />
      <Creative />
      <Contact />
      <Footer />
    </main>
  );
}
