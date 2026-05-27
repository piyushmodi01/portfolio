import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function NextCase({
  client,
  title,
  href,
}: {
  client: string;
  title: string;
  href: string;
}) {
  return (
    <section aria-label="Next case study" className="mt-32 md:mt-40 border-t border-border">
      <Container>
        <Link
          href={href}
          className="group flex flex-col py-16 md:py-24 transition-colors"
        >
          <p className="mono text-[0.78rem] uppercase tracking-[0.16em] text-muted">
            Next — {client}
          </p>
          <div className="mt-4 flex items-start justify-between gap-6">
            <h3 className="display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight max-w-[24ch] transition-colors group-hover:text-accent">
              {title}
            </h3>
            <div className="mt-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-strong text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white group-hover:border-ink">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}
