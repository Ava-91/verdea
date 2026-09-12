import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Verdea plant shop and care guide";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 90px",
        background: "#f7f4ea",
        color: "#182f27",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1 }}>Verdea</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#6e7b73" }}>
          Plant shop &amp; care guide
        </div>
        <div style={{ fontSize: 25, marginTop: 44, color: "#234236" }}>
          Bring nature home.
        </div>
      </div>
      <div
        style={{
          width: 300,
          height: 390,
          borderRadius: "50% 50% 18% 18%",
          background: "#c7d5c0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "10px solid #fffdf8",
        }}
      >
        <div style={{ fontSize: 150, color: "#234236" }}>✿</div>
      </div>
    </div>,
    { ...size }
  );
}
