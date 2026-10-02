"use client";
import { motion, useReducedMotion } from "motion/react";
import { Instagram } from "lucide-react";
import { person } from "@/lib/data";

// The one orchestrated moment on the page: a résumé stack gets read,
// highlighted and shortlisted — the job she does every day.
function ResumeStack() {
  const reduce = useReducedMotion();
  const t = (d: number) => (reduce ? { duration: 0 } : { delay: d, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const });
  const lines = [88, 64, 72, 40, 80, 56];
  const marked = [1, 4];

  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[340px]" aria-hidden>
      {[-7, 5].map((rot, i) => (
        <motion.div key={i} className="absolute inset-0 rounded-[14px] border border-line bg-card"
          initial={{ rotate: 0, y: 20, opacity: 0 }} animate={{ rotate: rot, y: 0, opacity: 1 }} transition={t(0.1 + i * 0.1)} />
      ))}
      <motion.div className="absolute inset-0 rounded-[14px] border border-line bg-card p-7 shadow-[0_24px_48px_-24px_rgba(26,23,64,.35)]"
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={t(0.3)}>
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-paper" />
          <div className="space-y-2">
            <div className="h-3 w-32 rounded bg-ink/80" />
            <div className="h-2 w-20 rounded bg-mute/40" />
          </div>
        </div>
        <div className="mt-7 space-y-4">
          {lines.map((wd, i) => (
            <div key={i} className="relative h-2.5" style={{ width: `${wd}%` }}>
              {marked.includes(i) && (
                <motion.div className="absolute -inset-x-1 -inset-y-1.5 origin-left rounded-sm bg-marker"
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={t(1 + marked.indexOf(i) * 0.35)} />
              )}
              <div className="relative h-full rounded bg-ink/15" />
            </div>
          ))}
        </div>
        <motion.div
          className="ui absolute bottom-8 right-6 rounded-md border-[3px] border-stamp px-3 py-1 text-lg font-extrabold text-stamp"
          style={{ fontStretch: "80%" }}
          initial={{ scale: 2.2, rotate: -4, opacity: 0 }} animate={{ scale: 1, rotate: -12, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { delay: 1.9, type: "spring", stiffness: 420, damping: 18 }}>
          Shortlisted
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-20">
      <div>
        <p className="ui mb-6 text-base text-mute">Based in {person.location}</p>
        <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.02em]" style={{ fontStretch: "85%" }}>
          I read the résumés you never hear back about.
        </h1>
        <p className="mt-7 max-w-[34rem] text-xl text-ink/80">{person.bio}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={person.instagram} target="_blank" rel="noreferrer"
            className="ui inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-semibold text-white transition hover:bg-violet">
            <Instagram size={18} /> Follow @{person.handle}
          </a>
          <a href="#guides" className="ui inline-flex items-center rounded-full border-2 border-ink px-6 py-3 text-base font-semibold transition hover:bg-marker">
            Browse the guides
          </a>
        </div>
      </div>
      <ResumeStack />
    </section>
  );
}
