import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const title = (new URL(request.url).searchParams.get("title") || "Software Engineer & Full Stack Developer").slice(0, 100);
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px", background: "#070a0f", color: "#f3f6fa", fontFamily: "sans-serif", border: "2px solid #203b45" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#6be5ff", fontSize: 28 }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, border: "1px solid #6be5ff", borderRadius: 12 }}>S</span> Muhammad Sameer</div>
      <div style={{ display: "flex", fontSize: title.length > 60 ? 54 : 68, lineHeight: 1.12, letterSpacing: "-2px" }}>{title}</div>
      <div style={{ display: "flex", color: "#8d98aa", fontSize: 24 }}>Software engineering · Web & desktop applications · Karachi, Pakistan</div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, s-maxage=86400" } },
  );
}
