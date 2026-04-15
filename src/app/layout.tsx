import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Void | Your Personal AI Media Bunker",
  description:
    "Next-generation intelligent media hub for night owls. Automate series tracking, get dubbing alerts, block spoilers, and search content by vibe with AI.",
  keywords: [
    "media hub",
    "series tracker",
    "anime dubbing tracker",
    "spoiler blocker",
    "AI semantic search",
    "movie planner",
    "Void media",
  ],
  authors: [{ name: "Void Team" }],
  openGraph: {
    title: "Void | Your Personal AI Media Bunker",
    description:
      "Next-generation intelligent media hub. Automate series tracking, get dubbing alerts, and block spoilers with AI.",
    url: "https://void-app.com", // Placeholder domain
    siteName: "Void",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Void | Your Personal AI Media Bunker",
    description:
      "Automate series tracking, get dubbing alerts, block spoilers, and search content by vibe.",
    creator: "@void_app", // Placeholder handle
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
