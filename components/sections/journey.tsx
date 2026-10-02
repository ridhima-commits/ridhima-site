"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { journey, education } from "@/lib/data";

// A real sequence, so a timeline is earned. The rail fills as you scroll (Motion useScroll).
export function Journey() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="journey" className="bg-card py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.6fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-4xl font-bold leading-tight tracking-tight" style={{ fontStretch: "88%" }}>
            From intern to the other side of the table
          </h2>
          <p className="mt-5 max-w-sm text-ink/75">
            Five teams, from consumer startups to global payments infrastructure. Every one taught a different version of what “good” looks like.
          </p>
          <ul className="ui mt-8 space-y-1 text-base text-mute">
            {education.map((e) => <li key={e.school}>{e.degree}, {e.school}</li>)}
          </ul>
        </div>

        <ol ref={ref} className="relative space-y-12 pl-10">
          <div className="absolute bottom-2 left-[9px] top-2 w-[3px] rounded bg-line" />
          <motion.div className="absolute left-[9px] top-2 w-[3px] origin-top rounded bg-violet"
            style={{ scaleY: fill, bottom: 8 }} />
          {journey.map((s) => (
            <li key={s.org} className="relative">
              <span className={`absolute -left-10 top-1.5 h-[21px] w-[21px] rounded-full border-[3px] ${s.current ? "border-violet bg-marker" : "border-ink bg-card"}`} />
              <p className="ui text-sm text-mute">{s.when}</p>
              <h3 className="mt-1 text-2xl font-semibold">{s.org}</h3>
              <p className="ui text-base font-medium text-violet">{s.role}</p>
              <p className="mt-2 max-w-xl text-ink/75">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
