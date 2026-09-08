import "./NoiseField.css";

export interface NoiseFieldProps {
  color?: string;
  background?: string;
  opacity?: number;
  scale?: number;
  speed?: number;
  animated?: boolean;
  className?: string;
}

export function NoiseField({
  color = "#8f73ff",
  background = "#0b0b0f",
  opacity = 0.3,
  scale = 1,
  speed = 6,
  animated = true,
  className = "",
}: NoiseFieldProps) {
  return (
    <div
      className={`fb-noise-field ${className}`}
      style={{
        background,
      }}
    >
      <div
        className={`fb-noise-field__blob fb-noise-field__blob--one ${
          animated
            ? "fb-noise-field__blob--animated"
            : ""
        }`}
        style={{
          background:
            color,

          opacity,

          transform:
            `scale(${scale})`,

          animationDuration:
            `${speed}s`,
        }}
      />

      <div
        className={`fb-noise-field__blob fb-noise-field__blob--two ${
          animated
            ? "fb-noise-field__blob--animated"
            : ""
        }`}
        style={{
          background:
            color,

          opacity:
            opacity * 0.7,

          transform:
            `scale(${scale * 0.8})`,

          animationDuration:
            `${speed * 1.2}s`,
        }}
      />

      <div
        className={`fb-noise-field__texture ${
          animated
            ? "fb-noise-field__texture--animated"
            : ""
        }`}
        style={{
          opacity:
            opacity * 0.5,

          animationDuration:
            `${speed * 0.85}s`,
        }}
      />
    </div>
  );
}