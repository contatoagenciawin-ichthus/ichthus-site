import { ImageResponse } from "next/og"

export const alt = "Ichthus — Strategy, Brand, Digital, Growth & Technology"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f2ef",
          color: "#111111",
          padding: "54px 62px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-1.5px",
          }}
        >
          ICHTHUS
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 82,
            lineHeight: 0.92,
            fontWeight: 700,
            letterSpacing: "-5px",
          }}
        >
          Strategy, brand, digital, growth and technology.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(0,0,0,0.2)",
            paddingTop: 20,
            fontSize: 20,
          }}
        >
          <span>Independent / Brazil</span>
          <span>Working internationally</span>
        </div>
      </div>
    ),
    size,
  )
}
