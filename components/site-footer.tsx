import Link from "next/link";
import { Container } from "@/components/ui/container";

const COLUMNS: { heading: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: "Work",
    links: [
      { label: "Apple", href: "/work/apple" },
      { label: "MathWorks", href: "/work/matlab-plot-viewer" },
      { label: "Deloitte", href: "/work/salesforce-forms" },
    ],
  },
  {
    heading: "Site",
    links: [
      { label: "About", href: "/about" },
      { label: "Systems & Tools", href: "/playground" },
      { label: "Notes", href: "/blog" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: "mailto:piyushmodi01@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/piyushmodi01/", external: true },
      { label: "Resume", href: "/resume.html", external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-bg">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_repeat(3,_1fr)] md:gap-12">
          <div className="max-w-md">
            <p className="font-display text-[clamp(1.6rem,4vw,2.25rem)] leading-[1.05] tracking-tight text-ink">
              I design internal tools, platforms, and systems for people who have real work to do.
            </p>
            <p className="mt-4 text-[0.95rem] text-muted">
              Senior product designer · Sacramento, CA · open to senior &amp; staff roles.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow mb-4">{col.heading}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) =>
                  l.external ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.95rem] text-ink-soft hover:text-accent transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.95rem] text-ink-soft hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-6 text-[0.82rem] text-muted-soft">
          <p className="mono">© {new Date().getFullYear()} Piyush Modi</p>
        </div>
      </Container>
    </footer>
  );
}
