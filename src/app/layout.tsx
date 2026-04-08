import type { Metadata, Viewport } from "next";
import { Syne, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: true,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Astghik Hovhannisyan — Front-end developer",
  description:
    "6+ years building React, TypeScript, and Next.js interfaces — eCommerce, SaaS, events, and public sector.",
  openGraph: {
    title: "Astghik Hovhannisyan — Front-end developer",
    description:
      "Portfolio of shipped work across retail, healthcare, telecom, and events.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff8f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
