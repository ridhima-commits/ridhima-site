// ─────────────────────────────────────────────────────────────
// Content for the site. Everything marked TODO is placeholder —
// confirm with Ridhima before this goes live.
// LinkedIn + Instagram block automated scraping, so career facts
// below come from her public LinkedIn snippet and public profiles.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: "Ridhima Chhabra",
  handle: "that_ai_insider",
  instagram: "https://www.instagram.com/that_ai_insider/",
  linkedin: "https://www.linkedin.com/in/ridhima-chhabra-563b4115a",
  location: "Bengaluru",
  role: "Recruiter, APAC at Stripe",
  linkedinFollowers: "21K+",
  // TODO: replace with her own words
  bio: "I spend my days on the hiring side of tech. On Instagram I share what actually moves a candidate forward — and how AI is changing the way you get found, screened and hired.",
};

export type Stop = {
  org: string;
  role: string;
  when: string;
  note: string;
  current?: boolean;
};

// Chronological, oldest first. Dates for earlier roles: TODO confirm.
export const journey: Stop[] = [
  { org: "Swiggy & WhiteHat Jr", role: "Talent acquisition intern", when: "Early career", note: "First look at hiring at startup speed — sourcing, screening, and learning what a good fit sounds like." },
  { org: "Pillow", role: "Talent scout", when: "TODO", note: "Identified and closed top talent for key roles." },
  { org: "Gojek", role: "Technical recruiter", when: "TODO", note: "Hired across the India engineering team — backend, frontend, mobile, QA and engineering managers." },
  { org: "Zamp", role: "Recruiter", when: "TODO", note: "Ran end-to-end hiring for strategy, planning and engineering roles." },
  { org: "Stripe", role: "Recruiter, APAC", when: "Feb 2024 – now", note: "Hiring for high-impact roles across Asia-Pacific.", current: true },
];

export const education = [
  { school: "NMIMS", degree: "MBA" },
  { school: "Guru Nanak Dev University", degree: "BBA" },
];

// TODO: sample numbers — replace with real Instagram Insights exports.
export const followerGrowth = [
  { label: "Jan", value: 800 },
  { label: "Feb", value: 1400 },
  { label: "Mar", value: 2600 },
  { label: "Apr", value: 3900 },
  { label: "May", value: 6200 },
  { label: "Jun", value: 8100 },
  { label: "Jul", value: 11800 },
  { label: "Aug", value: 15400 },
  { label: "Sep", value: 19000 },
];

// TODO: swap for her real milestone posts / reels.
export const milestones = [
  { month: "Feb", title: "First reel", body: "“What a recruiter sees in your first 6 seconds” — the post that started the page." },
  { month: "May", title: "The résumé teardown series", body: "Live rewrites of follower résumés. Saves outnumbered likes for the first time." },
  { month: "Jul", title: "AI job-hunt stack", body: "The tools she’d actually use to apply today. Crossed 10K the same week." },
  { month: "Sep", title: "Guides launch", body: "Turned the most-asked DMs into short, cheap, practical guides." },
];

export const themes = [
  { title: "From the recruiter’s side", body: "What happens to your application after you hit apply.", size: "lg" },
  { title: "AI for job seekers", body: "Tools that help — and the ones that get you filtered out.", size: "sm" },
  { title: "Résumé teardowns", body: "Real résumés, rewritten on camera.", size: "sm" },
  { title: "Offer & negotiation", body: "Scripts for the conversation most people skip.", size: "md" },
] as const;

export type Guide = {
  id: string;
  title: string;
  blurb: string;
  details: string[];
  tags: string[];
  price: number;
  // TODO: paste Razorpay / Topmate / Gumroad payment links
  href: string;
};

// Modeled on the guide store at shubhamseth.in — same card anatomy:
// tags, title, one-line promise, price, details → payment.
export const guides: Guide[] = [
  {
    id: "resume-teardown",
    title: "The Recruiter’s Résumé Teardown",
    blurb: "The 6-second scan, explained by someone who does it all day — and a template that survives it.",
    details: ["What gets read first, and what never gets read", "Before/after rewrites of 5 real résumés", "An ATS-safe template (Docs + Word)"],
    tags: ["Résumé", "Career"],
    price: 49,
    href: "#",
  },
  {
    id: "ai-job-hunt",
    title: "The AI Job-Hunt Stack",
    blurb: "Which AI tools to use to find roles, tailor applications and prep — and which ones get you flagged.",
    details: ["12 tools sorted by stage of the hunt", "Copy-paste prompts for tailoring a résumé to a JD", "What recruiters notice about AI-written applications"],
    tags: ["AI", "Tools"],
    price: 29,
    href: "#",
  },
  {
    id: "big-tech-loop",
    title: "Inside the Big-Tech Interview Loop",
    blurb: "How a loop is structured, what each round is really testing, and how the debrief decides.",
    details: ["Round-by-round breakdown for engineering and business roles", "The recruiter screen: 10 questions and what they check", "How to follow up without being annoying"],
    tags: ["Interviews", "Career"],
    price: 79,
    href: "#",
  },
  {
    id: "negotiation",
    title: "Offer Negotiation Scripts",
    blurb: "Word-for-word messages for asking for more, comparing offers, and saying no politely.",
    details: ["6 scripts for email and calls", "How bands and levels work, in plain words", "Mistakes that quietly cost you the offer"],
    tags: ["Offers", "Scripts"],
    price: 79,
    href: "#",
  },
  {
    id: "linkedin-found",
    title: "Get Found on LinkedIn",
    blurb: "Set up your profile so recruiters search their way to you instead of the other way round.",
    details: ["The headline formula recruiters search with", "Keywords by role family", "A 15-minute weekly routine"],
    tags: ["LinkedIn", "AI"],
    price: 29,
    href: "#",
  },
];

export const podcast = {
  show: "CornPoP Podcast",
  episode: "Episode 1 — Landing a high-impact role in Indian tech",
  host: "Shubham Seth",
  summary: "The recruiter’s unfiltered view meets the engineer’s AI playbook: what separates a standard hire from a premium one in today’s market.",
  href: "https://youtu.be/CrjM5hYSCaw",
};
