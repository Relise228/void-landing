import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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

const DOMAIN = "https://voidseries.space";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title:
    "Void — AI Series Tracker, Spoiler Blocker & Smart Recaps | Media Hub",
  description:
    "Track movies, TV shows, and anime in one hub. Block spoilers with AI, get smart recaps, and search content by vibe. Never lose track of your watchlist again.",
  keywords: [
    "series tracker",
    "movie tracker",
    "anime tracker",
    "TV show tracker",
    "spoiler blocker",
    "AI spoiler shield",
    "AI recap",
    "watchlist organizer",
    "AI semantic search movies",
    "media hub",
    "vibe search",
    "track new episodes",
    "Void media app",
  ],
  authors: [{ name: "Void Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: DOMAIN,
  },
  openGraph: {
    title: "Void — AI Series Tracker, Spoiler Blocker & Smart Recaps",
    description:
      "Track movies, TV shows, and anime. Block spoilers with AI, get smart recaps, and search by vibe. Join the waitlist.",
    url: DOMAIN,
    siteName: "Void",
    locale: "en_US",
    type: "website",
    // images: [
    //   {
    //     url: "/og-image.png", // TODO: Create a 1200x630 OG image and place it in /public
    //     width: 1200,
    //     height: 630,
    //     alt: "Void — Your Personal AI Media Bunker",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Void — AI Series Tracker, Spoiler Blocker & Smart Recaps",
    description:
      "Track movies, TV shows, and anime. Block spoilers, get AI recaps, and search by vibe. Join the waitlist.",
    creator: "@void_app", // Placeholder handle
    // images: ["/og-image.png"], // TODO: Create a 1200x630 OG image and place it in /public
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: "Void",
                  description:
                    "AI-powered media hub that tracks movies, TV shows, and anime. Block spoilers, get smart recaps, and search content by vibe.",
                  applicationCategory: "EntertainmentApplication",
                  operatingSystem: "Web",
                  offers: [
                    {
                      "@type": "Offer",
                      price: "0",
                      priceCurrency: "USD",
                      description: "Free tier with series tracking and release calendar",
                    },
                    {
                      "@type": "Offer",
                      price: "4.99",
                      priceCurrency: "USD",
                      description: "AI-Powered tier with full spoiler shield, AI recaps, and vibe search — $2.99/mo for waitlist members",
                    },
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "When does Void launch?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "We're targeting Q3 2026. Waitlist members will be notified first and receive early access.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What content does Void support?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Void supports movies, TV shows, and anime. We track releases across major platforms and update your watchlist automatically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does the Anti-Spoiler Shield work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our AI model analyzes text context in real time using NLP. It detects plot reveals even without spoiler tags, then blurs them client-side before rendering.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is my data private?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Your watchlist and viewing habits are yours. We never sell data. AI features process content, not personal information.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I use Void on mobile?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Void is built as a PWA — it works on any device, installable from your browser.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18098504955"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18098504955');
          `}
        </Script>
      </body>
    </html>
  );
}
