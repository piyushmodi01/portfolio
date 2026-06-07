"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  /** 1 = normal speed, 0.5 = half speed. Default 1. */
  playbackRate?: number;
  /** How the video fills its container. Default "cover". */
  fit?: "cover" | "contain" | "natural";
};

export function VideoPlayer({
  src,
  poster,
  playbackRate = 1,
  fit = "cover",
}: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const applyRate = () => { video.playbackRate = playbackRate; };
    applyRate();
    video.addEventListener("loadedmetadata", applyRate);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0, rootMargin: "120px 0px 120px 0px" }
    );

    io.observe(video);
    return () => {
      io.disconnect();
      video.removeEventListener("loadedmetadata", applyRate);
    };
  }, [playbackRate]);

  const cls =
    fit === "natural"
      ? "w-full block h-auto"
      : fit === "contain"
        ? "h-full w-full object-contain"
        : "h-full w-full object-cover";

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      className={cls}
    />
  );
}
