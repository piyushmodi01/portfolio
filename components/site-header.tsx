"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        // Always frosted — stronger blur + border when scrolled or menu open
        open
          ? "border-b border-border bg-bg/95 backdrop-blur-xl"
          : scrolled
            ? "border-b border-border bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-bg/60 backdrop-blur-md backdrop-saturate-150"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Piyush Modi — home"
          className="text-ink transition-colors hover:text-accent"
        >
          <Logo size={24} />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "relative text-[0.92rem] text-ink-soft transition-colors hover:text-ink",
                // Sliding underline on hover
                "after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full",
                "after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-200",
                "hover:after:scale-x-100"
              )}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-bg-elevated px-3.5 py-1.5 text-[0.82rem] font-medium text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <Download size={12} strokeWidth={2.5} />
            Resume
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-bg">
          <nav
            aria-label="Mobile primary"
            className="container-x flex flex-col gap-1 pt-6 pb-12"
          >
            {NAV.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-[2.25rem] font-medium tracking-tight py-3 text-ink"
                style={{ animation: `fadeUp 0.5s ${i * 0.04}s both var(--ease-out-soft)` }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="font-display text-[2.25rem] font-medium tracking-tight py-3 text-ink"
              style={{ animation: `fadeUp 0.5s ${NAV.length * 0.04}s both var(--ease-out-soft)` }}
            >
              Resume ↓
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
