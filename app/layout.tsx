import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AgentationProvider } from "@/components/agentation-provider";

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
    "Product designer with 9+ years of experience in enterprise UX, design systems, and internal tools. Case studies in enterprise UX, government platforms, and developer tooling.",
  keywords: [
    "product designer",
    "senior product designer",
    "UX designer",
    "design systems",
    "enterprise UX",
    "internal tools",
    "AI product design",
    "portfolio",
  ],
  authors: [{ name: "Piyush Modi", url: "https://piyushmodi.com" }],
  creator: "Piyush Modi",
  alternates: {
    canonical: "https://piyushmodi.com",
  },
  openGraph: {
    title: "Piyush Modi — Senior Product Designer",
    description:
      "Product designer with 9+ years of experience in enterprise UX, design systems, and internal tools.",
    url: "https://piyushmodi.com",
    siteName: "Piyush Modi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Modi — Senior Product Designer",
    description:
      "Product designer with 9+ years of experience in enterprise UX, design systems, and internal tools.",
    creator: "@piyushmodi01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Modi",
    url: "https://piyushmodi.com",
    jobTitle: "Senior Product Designer",
    sameAs: [
      "https://www.linkedin.com/in/piyushmodi01/",
    ],
    email: "piyushmodi01@gmail.com",
    description:
      "Product designer with 9+ years of experience in enterprise UX, design systems, and internal tools.",
    knowsAbout: [
      "Product Design",
      "Enterprise UX",
      "Design Systems",
      "Internal Tools",
      "DesignOps",
      "AI-assisted design workflows",
      "Design Engineering",
      "Accessibility",
      "Usability Research",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "San Jose State University" },
      { "@type": "CollegeOrUniversity", name: "Symbiosis International University" },
    ],
    hasOccupation: [
      {
        "@type": "OccupationRole",
        roleName: "Product Designer",
        startDate: "2022",
        endDate: "2024",
        namedEntity: { "@type": "Organization", name: "MathWorks" },
      },
      {
        "@type": "OccupationRole",
        roleName: "Product Researcher",
        startDate: "2020",
        endDate: "2021",
        namedEntity: { "@type": "Organization", name: "Tapestry" },
      },
      {
        "@type": "OccupationRole",
        roleName: "Product Designer",
        startDate: "2017",
        endDate: "2020",
        namedEntity: { "@type": "Organization", name: "Deloitte" },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink antialiased" suppressHydrationWarning>
        <SmoothScroll />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <AgentationProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
