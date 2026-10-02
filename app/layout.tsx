import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ridhima Chhabra — the hiring side of tech",
  description: "Recruiter at Stripe (APAC). Sharing how hiring really works — and how AI is changing it — as @that_ai_insider.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..800&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
