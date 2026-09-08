import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import "./GlassCard.css";

export interface GlassCardProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  tint?: string;

  opacity?: number;

  blur?: number;

  radius?: number;

  borderOpacity?: number;

  glowColor?: string;

  glow?: number;

  className?: string;
}

function hexToRgb(
  value: string
) {
  const clean =
    value
      .replace(
        "#",
        ""
      )
      .trim();

  const normalized =
    clean.length ===
    3
      ? clean
          .split("")
          .map(
            (
              character
            ) =>
              character +
              character
          )
          .join("")
      : clean;

  if (
    normalized.length !==
    6
  ) {
    return {
      r: 143,
      g: 115,
      b: 255,
    };
  }

  return {
    r:
      Number.parseInt(
        normalized.slice(
          0,
          2
        ),
        16
      ),

    g:
      Number.parseInt(
        normalized.slice(
          2,
          4
        ),
        16
      ),

    b:
      Number.parseInt(
        normalized.slice(
          4,
          6
        ),
        16
      ),
  };
}

export function GlassCard({
  children = (
    <>
      <span className="fb-glass-card__eyebrow">
        01 / FEATURE
      </span>

      <div className="fb-glass-card__content">
        <strong>
          Built for
          <br />
          motion.
        </strong>

        <p>
          Premium interaction
          without visual noise.
        </p>
      </div>
    </>
  ),

  tint = "#8f73ff",

  opacity = 0.08,

  blur = 18,

  radius = 22,

  borderOpacity = 0.16,

  glowColor = "#8f73ff",

  glow = 34,

  className = "",

  style,

  ...props
}: GlassCardProps) {
  const tintRgb =
    hexToRgb(
      tint
    );

  const glowRgb =
    hexToRgb(
      glowColor
    );

  return (
    <div
      {...props}
      className={`fb-glass-card ${className}`}
      style={{
        ...style,

        borderRadius:
          radius,

        borderColor:
          `rgba(
            255,
            255,
            255,
            ${borderOpacity}
          )`,

        background:
          `linear-gradient(
            145deg,
            rgba(
              ${tintRgb.r},
              ${tintRgb.g},
              ${tintRgb.b},
              ${opacity}
            ),
            rgba(
              255,
              255,
              255,
              ${opacity * 0.35}
            )
          )`,

        backdropFilter:
          `blur(${blur}px)`,

        WebkitBackdropFilter:
          `blur(${blur}px)`,

        boxShadow:
          `0 24px 80px rgba(
            ${glowRgb.r},
            ${glowRgb.g},
            ${glowRgb.b},
            ${glow / 400}
          )`,
      }}
    >
      <span
        className="fb-glass-card__glow"
        aria-hidden="true"
        style={{
          background:
            glowColor,

          filter:
            `blur(${glow}px)`,
        }}
      />

      <div className="fb-glass-card__inner">
        {children}
      </div>
    </div>
  );
}