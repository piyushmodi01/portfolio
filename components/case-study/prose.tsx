import { Container } from "@/components/ui/container";

/**
 * Prose — wraps loose markdown body content in case studies.
 * Constrains measure, applies prose-root styles from globals.css.
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <Container className="mt-16 md:mt-20">
      <div className="prose-root">{children}</div>
    </Container>
  );
}
