import { Container } from "@/components/ui/container";

type ProseWithImageProps = {
  children: React.ReactNode;
  image: string;
  alt?: string;
};

export function ProseWithImage({ children, image, alt }: ProseWithImageProps) {
  return (
    <Container className="mt-16 md:mt-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-14">
        <div className="prose-root">{children}</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt ?? ""}
          className="w-full max-w-[260px] shrink-0 rounded-xl md:w-[220px]"
        />
      </div>
    </Container>
  );
}
