import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f4b400 0%, #d89212 100%)",
          color: "#0b0b0d",
          fontSize: 30,
          fontWeight: 700,
          fontFamily: "serif",
          borderRadius: 14,
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    },
  );
}
