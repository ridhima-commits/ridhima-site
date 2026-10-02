import { Mic, Linkedin, Instagram } from "lucide-react";
import { podcast, person } from "@/lib/data";

export function Podcast() {
  return (
    <section id="podcast" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[auto_1fr]">
        <div className="grid h-28 w-28 place-items-center rounded-full bg-marker"><Mic size={40} /></div>
        <div className="max-w-2xl">
          <p className="ui text-base text-mute">As heard on the {podcast.show} with {podcast.host}</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight" style={{ fontStretch: "88%" }}>{podcast.episode}</h2>
          <p className="mt-4 text-ink/75">{podcast.summary}</p>
          <a href={podcast.href} target="_blank" rel="noopener noreferrer" className="ui mt-6 inline-flex rounded-full border-2 border-ink px-5 py-2.5 text-base font-semibold hover:bg-marker">Listen to the episode</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-8 px-6">
        <div>
          <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", fontStretch: "85%" }}>{person.name}</p>
          <p className="mt-2 max-w-md text-base text-white/65">Views are my own and don’t represent my employer.</p>
        </div>
        <div className="ui flex gap-3">
          <a href={person.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/30 p-3 hover:bg-white hover:text-ink"><Instagram size={20} /></a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/30 p-3 hover:bg-white hover:text-ink"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
