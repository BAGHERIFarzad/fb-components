import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./GlassButton.css";

export interface GlassButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "color"
  > {
  children?: ReactNode;

  textColor?: string;

  tint?: string;

  opacity?: number;

  blur?: number;

  radius?: number;

  borderOpacity?: number;
}

function hexToRgb(
  hex: string
) {
  const clean =
    hex.replace(
      "#",
      ""
    );

  if (
    clean.length !==
    6
  ) {
    return {
      r: 255,
      g: 255,
      b: 255,
    };
  }

  return {
    r:
      parseInt(
        clean.slice(
          0,
          2
        ),
        16
      ),

    g:
      parseInt(
        clean.slice(
          2,
          4
        ),
        16
      ),

    b:
      parseInt(
        clean.slice(
          4,
          6
        ),
        16
      ),
  };
}

export function GlassButton({
  children = "Explore",

  textColor = "#ffffff",

  tint = "#ffffff",

  opacity = 0.08,

  blur = 16,

  radius = 16,

  borderOpacity = 0.18,

  className = "",

  style,

  ...props
}: GlassButtonProps) {
  const rgb =
    hexToRgb(
      tint
    );

  return (
    <button
      {...props}
      type={
        props.type ??
        "button"
      }
      className={`fb-glass-button ${className}`}
      style={{
        ...style,

        color:
          textColor,

        background:
          `rgba(
            ${rgb.r},
            ${rgb.g},
            ${rgb.b},
            ${opacity}
          )`,

        backdropFilter:
          `blur(${blur}px)`,

        WebkitBackdropFilter:
          `blur(${blur}px)`,

        borderRadius:
          radius,

        borderColor:
          `rgba(
            255,
            255,
            255,
            ${borderOpacity}
          )`,
      }}
    >
      {
        children
      }

      <span
        className="fb-glass-button__shine"
        aria-hidden="true"
      />
    </button>
  );
}