import "./AuroraGrid.css";

export interface AuroraGridProps {
  gridColor?: string;
  auroraColor?: string;
  background?: string;
  gridSize?: number;
  glow?: number;
  speed?: number;
  animated?: boolean;
  className?: string;
}

export function AuroraGrid({
  gridColor = "#765cff",
  auroraColor = "#7c5cff",
  background = "#09090d",
  gridSize = 34,
  glow = 55,
  speed = 8,
  animated = true,
  className = "",
}: AuroraGridProps) {
  return (
    <div
      className={`fb-aurora-grid ${className}`}
      style={{
        background,
      }}
    >
      <div
        className={`fb-aurora-grid__grid ${
          animated
            ? "fb-aurora-grid__grid--animated"
            : ""
        }`}
        style={{
          backgroundImage: `
            linear-gradient(
              ${gridColor}33 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${gridColor}33 1px,
              transparent 1px
            )
          `,

          backgroundSize:
            `${gridSize}px ${gridSize}px`,

          animationDuration:
            `${speed}s`,
        }}
      />

      <div
        className={`fb-aurora-grid__glow ${
          animated
            ? "fb-aurora-grid__glow--animated"
            : ""
        }`}
        style={{
          background:
            auroraColor,

          filter:
            `blur(${glow}px)`,

          animationDuration:
            `${speed * 0.8}s`,
        }}
      />
    </div>
  );
}