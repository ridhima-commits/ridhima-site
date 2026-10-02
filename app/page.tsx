import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { InstagramJourney } from "@/components/sections/instagram";
import { Guides } from "@/components/sections/guides";
import { Podcast, Footer } from "@/components/sections/podcast-footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <InstagramJourney />
        <Guides />
        <Podcast />
      </main>
      <Footer />
    </>
  );
}
