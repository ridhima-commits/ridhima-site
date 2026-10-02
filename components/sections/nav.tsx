"use client";
import { motion, useScroll, useTransform } from "motion/react";

export function Nav() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(26,23,64,0)", "0 8px 24px -16px rgba(26,23,64,.4)"]);
  return (
    <motion.header style={{ boxShadow: shadow }} className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold" style={{ fontStretch: "85%" }}>Ridhima Chhabra</a>
        <div className="flex items-center gap-6 text-base">
          <a href="#journey" className="hidden hover:text-violet sm:inline">Journey</a>
          <a href="#instagram" className="hidden hover:text-violet sm:inline">Instagram</a>
          <a href="#podcast" className="hidden hover:text-violet sm:inline">Podcast</a>
          <a href="#guides" className="rounded-full bg-ink px-4 py-2 font-semibold text-white hover:bg-violet">Guides</a>
        </div>
      </nav>
    </motion.header>
  );
}
