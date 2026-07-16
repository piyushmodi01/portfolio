import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowUpRight } from "lucide-react";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies from Apple, MathWorks, Deloitte, and beyond.",
  alternates: { canonical: "https://piyushmodi.com/work" },
  openGraph: {
    title: "Work · Piyush Modi",
    description: "Selected case studies from Apple, MathWorks, Deloitte, and beyond.",
    url: "https://piyushmodi.com/work",
  },
};

export default function WorkIndexPage() {
  const studies = getCaseStudies();

  return (
    <Container className="py-20 md:py-28">
      <Eyebrow>Work</Eyebrow>
      <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.05] tracking-tight max-w-[20ch]">
        Case studies and selected work.
      </h1>
      <p className="mt-6 max-w-[40rem] text-[1.05rem] leading-relaxed text-muted">
        A few projects that say the most about how I work. Walkthroughs of
        internal work available on request.
      </p>

      <ul className="mt-16 flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {studies.map((cs) => (
          <li key={cs.slug}>
            <Link
              href={`/work/${cs.slug}`}
              className="group flex flex-col gap-2 bg-bg-elevated p-6 md:p-8 transition-colors md:flex-row md:items-center md:justify-between md:gap-8"
            >
              <div className="flex flex-col">
                <p className="mono text-[0.78rem] uppercase tracking-[0.16em] text-muted">
                  {cs.client} · {cs.year}
                </p>
                <p className="font-display mt-1 text-[clamp(1.4rem,3vw,2rem)] leading-tight tracking-tight text-ink transition-colors group-hover:text-accent">
                  {cs.title}
                </p>
                <p className="mt-2 max-w-[44ch] text-[0.95rem] text-muted">
                  {cs.summary}
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-muted transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
