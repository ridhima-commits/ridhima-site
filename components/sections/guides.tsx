"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { X, Check } from "lucide-react";
import { guides, type Guide } from "@/lib/data";
import { cn } from "@/lib/utils";

// Same selling pattern as shubhamseth.in/links:
// card → tags, title, one-line promise, price → details → payment link.
// Added: tag filter (Motion layout animation) and an in-page details sheet.
export function Guides() {
  const tags = useMemo(() => ["All", ...Array.from(new Set(guides.flatMap((g) => g.tags)))], []);
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState<Guide | null>(null);
  const list = tag === "All" ? guides : guides.filter((g) => g.tags.includes(tag));

  return (
    <section id="guides" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold leading-tight tracking-tight" style={{ fontStretch: "88%" }}>
              Guides for the questions in her DMs
            </h2>
            <p className="mt-4 text-ink/75">Short, practical, and priced like a coffee. Instant download after payment.</p>
          </div>
          <LayoutGroup>
            <div className="ui flex flex-wrap gap-2" role="tablist" aria-label="Filter guides">
              {tags.map((t) => (
                <button key={t} role="tab" aria-selected={tag === t} onClick={() => setTag(t)}
                  className="relative rounded-full px-4 py-2 text-sm font-medium">
                  {tag === t && <motion.span layoutId="tag-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                  <span className={cn("relative", tag === t ? "text-white" : "text-ink")}>{t}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((g) => (
              <motion.li key={g.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                className="flex flex-col rounded-[18px] border border-line bg-paper p-6">
                <div className="ui flex flex-wrap gap-1.5">
                  {g.tags.map((t) => <span key={t} className="rounded-full bg-card px-2.5 py-1 text-xs font-medium text-mute">{t}</span>)}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{g.title}</h3>
                <p className="mt-2 flex-1 text-base text-ink/75">{g.blurb}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="ui text-2xl font-bold">₹{g.price}</span>
                  <button onClick={() => setOpen(g)} className="ui rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold transition hover:bg-marker">
                    See what’s inside
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <motion.div role="dialog" aria-modal aria-labelledby="guide-title"
              className="w-full max-w-lg rounded-[22px] bg-card p-7"
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <h3 id="guide-title" className="text-2xl font-semibold leading-snug">{open.title}</h3>
                <button onClick={() => setOpen(null)} aria-label="Close" className="rounded-full p-1.5 hover:bg-paper"><X size={20} /></button>
              </div>
              <p className="mt-3 text-ink/75">{open.blurb}</p>
              <ul className="mt-5 space-y-2.5">
                {open.details.map((d) => (
                  <li key={d} className="flex gap-3 text-base"><Check size={18} className="mt-1 shrink-0 text-stamp" />{d}</li>
                ))}
              </ul>
              <a href={open.href} className="ui mt-7 flex w-full items-center justify-center rounded-full bg-ink py-4 text-base font-semibold text-white transition hover:bg-violet">
                Buy for ₹{open.price}
              </a>
              <p className="ui mt-3 text-center text-xs text-mute">Secure checkout. PDF delivered to your email.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
