import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import { jsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face — 400 only, but with a real italic, which is what gives the
// headings their voice.
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Tushar Jain — Frontend Engineer",
    template: "%s · Tushar Jain",
  },
  description:
    "Frontend engineer building fast, precise interfaces with React, Next.js and TypeScript. Previously led a 4-dev team on an AI hiring platform and cut render cost 50% on a production DEX.",
  keywords: [
    "Tushar Jain",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  /* explicit rather than inherited — max-image-preview:large is what lets the
     share card show full-width in results instead of as a thumbnail */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Tushar Jain — Frontend Engineer",
    description:
      "Frontend engineer building fast, precise interfaces. React · Next.js · TypeScript · Tailwind",
    url: "/",
    siteName: profile.name,
    type: "profile",
    firstName: profile.firstName,
    lastName: profile.lastName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Jain — Frontend Engineer",
    description: "Frontend engineer building fast, precise interfaces.",
  },
};

export const viewport = {
  themeColor: "#0e0d0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="grain bg-ink min-h-full">
        {/* Person + ProfilePage + the project list, as one graph. Server
            rendered, so crawlers that don't execute JS still get it. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
