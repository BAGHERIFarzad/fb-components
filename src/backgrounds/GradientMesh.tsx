import "./GradientMesh.css";

export interface GradientMeshProps {
  primary?: string;
  secondary?: string;
  accent?: string;
  background?: string;
  blur?: number;
  speed?: number;
  animated?: boolean;
  className?: string;
}

export function GradientMesh({
  primary = "#654cff",
  secondary = "#3c6dff",
  accent = "#a44cff",
  background = "#0d0d11",
  blur = 35,
  speed = 8,
  animated = true,
  className = "",
}: GradientMeshProps) {
  return (
    <div
      className={`fb-gradient-mesh ${className}`}
      style={{
        background,
      }}
    >
      <div
        className={`fb-gradient-mesh__layer ${
          animated
            ? "fb-gradient-mesh__layer--animated"
            : ""
        }`}
        style={{
          background: `
            radial-gradient(
              circle at 30% 30%,
              ${primary},
              transparent 35%
            ),
            radial-gradient(
              circle at 65% 60%,
              ${secondary},
              transparent 32%
            ),
            radial-gradient(
              circle at 50% 50%,
              ${accent},
              transparent 40%
            )
          `,

          filter:
            `blur(${blur}px)`,

          animationDuration:
            `${speed}s`,
        }}
      />
    </div>
  );
}