import { Nav } from "@/components/nav";
import { PageFlipSound } from "@/components/page-flip-sound";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Instagram } from "@/components/sections/instagram";
import { Video } from "@/components/sections/video";
import { NarrativReels } from "@/components/sections/narrativ-reels";
import { Producer } from "@/components/sections/producer";
import { Essays } from "@/components/sections/essays";
import { Creative } from "@/components/sections/creative";
import { Experience } from "@/components/sections/experience";
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
      <Video />
      <NarrativReels />
      <Producer />
      <Essays />
      <Creative />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
