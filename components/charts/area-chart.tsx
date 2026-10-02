"use client";
// Bklit-style composable area chart (SVG + Motion), themed by CSS tokens.
// For the real library:  npx shadcn@latest add @bklit/area-chart
// then compose <AreaChart><Grid/><Area/><XAxis/><ChartTooltip/></AreaChart>.
import { createContext, useContext, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Point = { label: string; value: number };
type Ctx = {
  data: Point[]; w: number; h: number; pad: number;
  x: (i: number) => number; y: (v: number) => number; max: number;
  active: number | null; setActive: (i: number | null) => void;
};
const ChartCtx = createContext<Ctx | null>(null);
const useChart = () => {
  const c = useContext(ChartCtx);
  if (!c) throw new Error("Chart parts must live inside <AreaChart>");
  return c;
};

export function AreaChart({ data, children, label }: { data: Point[]; children: React.ReactNode; label: string }) {
  const w = 640, h = 280, pad = 28;
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d.value)) * 1.15;
  const ctx = useMemo<Ctx>(() => ({
    data, w, h, pad, max, active, setActive,
    x: (i) => pad + (i * (w - pad * 2)) / (data.length - 1),
    y: (v) => h - pad - (v / max) * (h - pad * 2),
  }), [data, max, active]);

  return (
    <ChartCtx.Provider value={ctx}>
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="w-full h-auto overflow-visible"
        onPointerLeave={() => setActive(null)}>
        {children}
      </svg>
    </ChartCtx.Provider>
  );
}

export function Grid({ lines = 4 }: { lines?: number }) {
  const { w, h, pad } = useChart();
  return (
    <g>
      {Array.from({ length: lines + 1 }).map((_, i) => {
        const yy = pad + (i * (h - pad * 2)) / lines;
        return <line key={i} x1={pad} x2={w - pad} y1={yy} y2={yy} stroke="var(--chart-grid)" strokeDasharray="3 5" />;
      })}
    </g>
  );
}

export function Area() {
  const { data, x, y, h, pad } = useChart();
  const reduce = useReducedMotion();
  const line = data.map((d, i) => `${i ? "L" : "M"}${x(i)},${y(d.value)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${h - pad} L${x(0)},${h - pad} Z`;
  return (
    <g>
      <defs>
        <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path d={area} fill="url(#area-fill)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.9 }} />
      <motion.path d={line} fill="none" stroke="var(--chart-1)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }} />
    </g>
  );
}

export function XAxis() {
  const { data, x, h } = useChart();
  return (
    <g>
      {data.map((d, i) => (
        <text key={d.label} x={x(i)} y={h - 4} textAnchor="middle" fontSize={13} fill="var(--color-mute)" className="ui">{d.label}</text>
      ))}
    </g>
  );
}

export function ChartTooltip({ format }: { format: (v: number) => string }) {
  const { data, x, y, h, pad, w, active, setActive } = useChart();
  const step = (w - pad * 2) / (data.length - 1);
  const d = active !== null ? data[active] : null;
  return (
    <g>
      {data.map((_, i) => (
        <rect key={i} x={x(i) - step / 2} y={0} width={step} height={h} fill="transparent"
          onPointerEnter={() => setActive(i)} tabIndex={0} onFocus={() => setActive(i)}
          aria-label={`${data[i].label}: ${format(data[i].value)}`} />
      ))}
      {d && active !== null && (
        <g pointerEvents="none">
          <line x1={x(active)} x2={x(active)} y1={pad} y2={h - pad} stroke="var(--color-ink)" strokeOpacity={0.25} />
          <circle cx={x(active)} cy={y(d.value)} r={6} fill="var(--color-card)" stroke="var(--chart-1)" strokeWidth={3} />
          <g transform={`translate(${Math.min(Math.max(x(active), 70), w - 70)}, ${Math.max(y(d.value) - 30, 16)})`}>
            <rect x={-58} y={-18} width={116} height={30} rx={8} fill="var(--color-ink)" />
            <text textAnchor="middle" y={2} fontSize={13} fill="#fff" className="ui">{d.label}: {format(d.value)}</text>
          </g>
        </g>
      )}
    </g>
  );
}
