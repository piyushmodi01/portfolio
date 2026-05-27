import { cn } from "@/lib/utils";

export function Logo({ className, size = 20 }: { className?: string; size?: number }) {
  // Aspect ratio from viewBox: 111.3 × 136.5 ≈ 0.815
  const width = Math.round(size * (111.3 / 136.5));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.3 136.5"
      width={width}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d="M105.29,70.94l-59.54,59.58c-3.79,3.79-8.66,5.99-13.97,5.98l-12.02-.03C8.92,136.44,0,127.57,0,116.43V20.08C0,9.06,8.85.06,19.81.05L73.57,0c5.55,0,10.39,2.46,14.17,6.25l17.91,17.97c3.6,3.61,5.65,8.61,5.65,13.73v18.81c0,5.31-2.04,10.21-6.01,14.18ZM43.92,76.12l24.17-.05c13.03-.4,23.83-9.08,26.95-21.74,1.04-5.91,1.03-11.57.03-17.55-3.12-12.49-13.8-21.71-27-21.74l-52.75-.13.07,61.29.08,44.31,12.31-.02c8.95-.18,16.06-7.11,16.08-16.09l.06-28.29Z" />
    </svg>
  );
}
