"use client";
import { AreaChart, Area, Grid, XAxis, ChartTooltip } from "@/components/charts/area-chart";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { followerGrowth, milestones, themes, person } from "@/lib/data";
import { cn } from "@/lib/utils";

const fmt = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(1).replace(/\.0$/, "")}K` : `${v}`);

export function InstagramJourney() {
  const latest = followerGrowth[followerGrowth.length - 1].value;
  return (
    <section id="instagram" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight" style={{ fontStretch: "88%" }}>
            <ShimmerText>@{person.handle}</ShimmerText>, one reel at a time
          </h2>
          <p className="mt-5 text-ink/75">
            The page started as answers to the same five DMs. It grew because the answers came from someone who actually makes the call.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[20px] border border-line bg-card p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="ui text-base text-mute">Instagram followers</p>
              <p className="ui text-3xl font-bold">{fmt(latest)}</p>
            </div>
            <div className="mt-4">
              <AreaChart data={followerGrowth} label="Instagram follower growth by month">
                <Grid />
                <Area />
                <XAxis />
                <ChartTooltip format={fmt} />
              </AreaChart>
            </div>
            {/* TODO: remove once real Insights numbers are in lib/data.ts */}
            <p className="ui mt-3 text-sm text-mute">Sample data. Replace with Instagram Insights export.</p>
          </div>

          <ol className="space-y-6">
            {milestones.map((m) => (
              <li key={m.title} className="grid grid-cols-[3.5rem_1fr] gap-4">
                <span className="ui pt-0.5 text-base font-semibold text-violet">{m.month}</span>
                <div>
                  <h3 className="text-xl font-semibold">{m.title}</h3>
                  <p className="mt-1 text-base text-ink/75">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Kokonut-style bento: uneven sizes follow content weight */}
        <h3 className="mt-20 text-2xl font-semibold">What she posts about</h3>
        <div className="mt-6 grid auto-rows-[minmax(150px,auto)] gap-4 md:grid-cols-4">
          {themes.map((t) => (
            <div key={t.title}
              className={cn(
                "flex flex-col justify-end rounded-[20px] p-6",
                t.size === "lg" && "bg-ink text-white md:col-span-2 md:row-span-2",
                t.size === "md" && "bg-marker md:col-span-2",
                t.size === "sm" && "border border-line bg-card",
              )}>
              <h4 className={cn("font-semibold", t.size === "lg" ? "text-3xl" : "text-xl")} style={{ fontFamily: "var(--font-display)" }}>
                {t.title}
              </h4>
              <p className={cn("mt-2 text-base", t.size === "lg" ? "text-white/75" : "text-ink/75")}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
