type ClassValue = string | number | null | false | undefined | ClassValue[] | Record<string, unknown>;

// Tiny class merger — no dependency on clsx/tailwind-merge to keep bundle small.
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue): void => {
    if (!v) return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    } else if (Array.isArray(v)) {
      v.forEach(walk);
    } else if (typeof v === "object") {
      for (const k in v as Record<string, unknown>) {
        if ((v as Record<string, unknown>)[k]) out.push(k);
      }
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}
