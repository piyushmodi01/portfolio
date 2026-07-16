import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Piyush Modi — Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fafaf7",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8a8a93",
            fontFamily: "sans-serif",
          }}
        >
          piyushmodi.com
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#111111",
            }}
          >
            Piyush Modi
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5c5c66",
              fontFamily: "sans-serif",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 640,
            }}
          >
            Senior Product Designer · Internal Tools · Design Systems · Enterprise UX
          </div>
        </div>

        {/* Bottom: accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 3,
              backgroundColor: "#2a4bff",
              borderRadius: 99,
            }}
          />
          <div
            style={{
              fontSize: 15,
              color: "#8a8a93",
              fontFamily: "sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Currently at Apple · 9+ years experience
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
