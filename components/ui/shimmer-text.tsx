"use client";
// Inspired by Kokonut UI's shimmer-text. Swap for the original with:
//   npx shadcn@latest add @kokonutui/shimmer-text
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function ShimmerText({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: "linear-gradient(100deg, var(--color-ink) 40%, var(--color-violet) 50%, var(--color-ink) 60%)",
        backgroundSize: "250% 100%",
      }}
      initial={{ backgroundPosition: "100% 0" }}
      animate={reduce ? undefined : { backgroundPosition: ["100% 0", "0% 0"] }}
      transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
    >
      {children}
    </motion.span>
  );
}
