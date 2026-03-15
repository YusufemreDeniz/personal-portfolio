import { ImageResponse } from "next/og";

export const alt = "Yusuf Emre Deniz Portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#070B10",
          color: "white"
        }}
      >
        <div style={{ fontSize: 62, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Yusuf Emre Deniz
        </div>
        <div style={{ marginTop: 16, fontSize: 34, color: "#7DE6C4" }}>
          Startup-Minded Software Engineer
        </div>
        <div style={{ marginTop: 22, fontSize: 24, color: "#C6D3E2" }}>
          Backend, CRM and scalable software products
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
