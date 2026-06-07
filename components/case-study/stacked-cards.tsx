"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { VideoPlayer } from "@/components/case-study/video-player";

type StackedCardsProps = {
  eyebrow?: string;
  c1num: string; c1title: string; c1body: string; c1image?: string; c1video?: string;
  c2num: string; c2title: string; c2body: string; c2image?: string; c2video?: string;
  c3num?: string; c3title?: string; c3body?: string; c3image?: string; c3video?: string;
};

export function StackedCards({
  eyebrow = "Process",
  c1num, c1title, c1body, c1image, c1video,
  c2num, c2title, c2body, c2image, c2video,
  c3num, c3title, c3body, c3image, c3video,
}: StackedCardsProps) {
  const cards = [
    { num: c1num, title: c1title, body: c1body, image: c1image, video: c1video },
    { num: c2num, title: c2title, body: c2body, image: c2image, video: c2video },
    ...(c3num && c3title && c3body ? [{ num: c3num, title: c3title, body: c3body, image: c3image, video: c3video }] : []),
  ];

  return (
    <Container className="mt-20 md:mt-28">
      <p className="eyebrow mb-10">{eyebrow}</p>
      <div className="flex flex-col gap-6">
        {cards.map((card, i) => (
          <Reveal key={card.num} delay={i * 60}>
            <div className="rounded-2xl border border-border bg-bg-elevated overflow-hidden">
              <div className="px-8 py-8 md:px-10 md:py-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-soft shrink-0">
                    {card.num}
                  </span>
                  <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.6rem)] leading-tight tracking-tight text-ink">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[1rem] leading-relaxed text-muted max-w-[52rem]">
                  {card.body}
                </p>
              </div>
              {card.video && (
                <div className="border-t border-border">
                  <VideoPlayer src={card.video} fit="natural" />
                </div>
              )}
              {!card.video && card.image && (
                <div className="border-t border-border px-8 py-6 md:px-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt=""
                    className="w-full rounded-lg object-contain"
                  />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
