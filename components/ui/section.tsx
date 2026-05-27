import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Vertical rhythm preset */
  pad?: "sm" | "md" | "lg" | "none";
  /** Aria-label for the section landmark */
  label?: string;
};

const padMap: Record<NonNullable<SectionProps["pad"]>, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-40",
};

export function Section({
  children,
  id,
  className,
  pad = "md",
  label,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative", padMap[pad], className)}
    >
      {children}
    </section>
  );
}
