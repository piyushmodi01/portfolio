import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  number,
}: {
  children: React.ReactNode;
  className?: string;
  number?: string;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-2", className)}>
      {number ? (
        <>
          <span aria-hidden className="text-muted-soft">
            {number}
          </span>
          <span aria-hidden className="h-px w-6 bg-border" />
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
