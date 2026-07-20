import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { MotionProvider } from "@/_app/providers/motion-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aston Dominion — Investment & Market Expansion Advisory",
  description:
    "Aston Dominion advises international retail, FMCG, grocery, and consumer electronics businesses on market entry, partnerships, supply chains, and operational expansion across emerging consumer markets.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Aston Dominion",
    title: "Aston Dominion — Investment & Market Expansion Advisory",
    description:
      "Investment and market expansion advisory for international retail and consumer businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aston Dominion — Investment & Market Expansion Advisory",
    description:
      "Investment and market expansion advisory for international retail and consumer businesses.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061f38",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} antialiased`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
