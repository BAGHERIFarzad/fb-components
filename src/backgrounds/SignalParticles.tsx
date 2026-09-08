import {
  useMemo,
} from "react";

import "./SignalParticles.css";

export interface SignalParticlesProps {
  color?: string;
  background?: string;
  density?: number;
  size?: number;
  speed?: number;
  animated?: boolean;
  className?: string;
}

export function SignalParticles({
  color = "#b99cff",
  background = "#0d0d11",
  density = 30,
  size = 3,
  speed = 1,
  animated = true,
  className = "",
}: SignalParticlesProps) {
  const particles =
    useMemo(
      () =>
        Array.from({
          length:
            Math.max(
              1,
              density
            ),
        }).map(
          (
            _,
            index
          ) => ({
            id:
              index,

            left:
              (index *
                37) %
              100,

            top:
              (index *
                53) %
              100,

            delay:
              (index %
                10) *
              0.12,
          })
        ),
      [
        density,
      ]
    );

  return (
    <div
      className={`fb-signal-particles ${className}`}
      style={{
        background,
      }}
    >
      {particles.map(
        (
          particle
        ) => (
          <span
            key={
              particle.id
            }
            className={
              animated
                ? "fb-signal-particles__particle fb-signal-particles__particle--animated"
                : "fb-signal-particles__particle"
            }
            style={{
              left:
                `${particle.left}%`,

              top:
                `${particle.top}%`,

              width:
                size,

              height:
                size,

              background:
                color,

              animationDuration:
                `${3 / speed}s`,

              animationDelay:
                `${particle.delay}s`,

              boxShadow:
                `0 0 ${size * 4}px ${color}`,
            }}
          />
        )
      )}
    </div>
  );
}