import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Writing } from "@/components/sections/writing";
import { Video } from "@/components/sections/video";
import { Experience } from "@/components/sections/experience";
import { Government } from "@/components/sections/government";
import { Creative } from "@/components/sections/creative";
import { Press } from "@/components/sections/press";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Writing />
      <Video />
      <Experience />
      <Government />
      <Creative />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
