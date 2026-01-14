import type { Metadata } from "next";
import { Inter, Space_Grotesk, MuseoModerno } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/animation/SmoothScroll";
import PageTransition from "@/components/animation/PageTransition";
import CommandPalette from "@/components/ui/CommandPalette";
import Preloader from "@/components/ui/Preloader";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Thinking Architect | TTA",
  description: "An authority signal and gateway to TTA platforms. Calm, Intentional, Durable.",
  keywords: ["Architecture", "Education", "TTA", "Design", "Theory", "Professional Practice"],
  openGraph: {
    title: "The Thinking Architect | TTA",
    description: "An authority signal and gateway to TTA platforms. Calm, Intentional, Durable.",
    url: "https://tta.foundation",
    siteName: "The Thinking Architect",
    images: [
      {
        url: "https://tta.foundation/og.png", // User should replace this
        width: 1200,
        height: 630,
        alt: "The Thinking Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Thinking Architect | TTA",
    description: "An authority signal and gateway to TTA platforms. Calm, Intentional, Durable.",
    creator: "@TheThinkingArch",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${museoModerno.variable} antialiased`}
      >
        <SmoothScroll>
          <Preloader />
          <CommandPalette />
          <Header />
          <main className="min-h-screen pt-20 overflow-hidden">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
