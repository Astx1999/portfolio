import type { Metadata, Viewport } from "next";
import { Syne, Source_Serif_4 } from "next/font/google";
import { CvProvider } from "@/components/CvDialog";
import { ThemeProvider } from "@/components/ThemeProvider";
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
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <CvProvider>{children}</CvProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
