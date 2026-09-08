import "./DotMatrix.css";

export interface DotMatrixProps {
  color?: string;
  background?: string;
  dotSize?: number;
  gap?: number;
  opacity?: number;
  fade?: boolean;
  className?: string;
}

export function DotMatrix({
  color = "#9b7cff",
  background = "#0d0d11",
  dotSize = 2,
  gap = 20,
  opacity = 0.8,
  fade = true,
  className = "",
}: DotMatrixProps) {
  return (
    <div
      className={`fb-dot-matrix ${
        fade
          ? "fb-dot-matrix--fade"
          : ""
      } ${className}`}
      style={{
        backgroundColor:
          background,

        opacity,

        backgroundImage:
          `radial-gradient(
            circle,
            ${color} ${dotSize}px,
            transparent ${
              dotSize +
              0.8
            }px
          )`,

        backgroundSize:
          `${gap}px ${gap}px`,
      }}
    />
  );
}