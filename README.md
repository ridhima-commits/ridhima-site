# Ridhima Chhabra — landing page prototype

Next.js 15 (App Router) + Tailwind v4 + Motion.

    npm install
    npm run dev   # http://localhost:3000

## Where things live
- lib/data.ts — all copy, career timeline, Instagram numbers, guides and prices. Every TODO needs Ridhima's confirmation (Instagram numbers are sample data).
- components/sections/* — one file per section.
- components/charts/area-chart.tsx — bklit-style composable chart.
- components/ui/shimmer-text.tsx — kokonut-style text effect.

## Swapping in the real libraries
The build sandbox couldn't reach the kokonutui.com / ui.bklit.com registries, so those pieces are
hand-built with the same patterns. To use the originals:

    npx shadcn@latest add @kokonutui/shimmer-text   # registry already in components.json
    npx shadcn@latest add @kokonutui/bento-grid
    npx shadcn@latest add @bklit/area-chart         # <AreaChart><Grid/><Area/><XAxis/><ChartTooltip/></AreaChart>

## Guides -> payments
Each guide in lib/data.ts has an href. Paste a Razorpay Payment Page / Topmate link per guide.
