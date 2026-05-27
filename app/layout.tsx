import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piyushmodi.com"),
  title: {
    default: "Piyush Modi — Senior Product Designer",
    template: "%s · Piyush Modi",
  },
  description:
    "Senior product designer with 9+ years building internal tools, design systems, and AI-enabled products. Currently designing for Apple.",
  openGraph: {
    title: "Piyush Modi — Senior Product Designer",
    description:
      "Senior product designer with 9+ years building internal tools, design systems, and AI-enabled products. Currently designing for Apple.",
    url: "https://piyushmodi.com",
    siteName: "Piyush Modi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Modi — Senior Product Designer",
    description:
      "Senior product designer with 9+ years building internal tools, design systems, and AI-enabled products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-ink antialiased" suppressHydrationWarning>
        <SmoothScroll />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
