import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Eitan Gorodetsky — Senior Marketing & Operations Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0d2b3e 0%, #1B5E8C 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "64px",
            height: "3px",
            background: "#C4902A",
            borderRadius: "2px",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "sans-serif",
            }}
          >
            eitangorodetsky.com
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Eitan
            <br />
            Gorodetsky
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "sans-serif",
              fontWeight: 400,
              marginTop: "8px",
            }}
          >
            Senior Marketing &amp; Operations Leader
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "sans-serif",
              marginTop: "4px",
            }}
          >
            15+ years · iGaming · Tech · Digital · €100M+ budgets
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontFamily: "sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <span>Central Coast, Australia</span>
            <span>·</span>
            <span>linkedin.com/in/socialeitan</span>
          </div>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.6)",
              fontSize: "20px",
              fontFamily: "sans-serif",
            }}
          >
            EG
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
