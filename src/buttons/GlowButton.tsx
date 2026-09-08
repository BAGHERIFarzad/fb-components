import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import "./GlowButton.css";

export interface GlowButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "color"
  > {
  children?: ReactNode;

  background?: string;

  textColor?: string;

  glowColor?: string;

  glow?: number;

  radius?: number;

  fontSize?: number;

  paddingX?: number;
}

export function GlowButton({
  children = "Get started",

  background = "#7b5cff",

  textColor = "#ffffff",

  glowColor = "#9b7cff",

  glow = 32,

  radius = 14,

  fontSize = 14,

  paddingX = 24,

  className = "",

  style,

  ...props
}: GlowButtonProps) {
  return (
    <button
      {...props}
      type={
        props.type ??
        "button"
      }
      className={`fb-glow-button ${className}`}
      style={{
        ...style,

        background,

        color:
          textColor,

        borderRadius:
          radius,

        fontSize,

        padding:
          `13px ${paddingX}px`,

        boxShadow:
          `0 0 ${glow}px ${glowColor}66`,

        ["--fb-glow-button-color" as string]:
          glowColor,
      }}
    >
      <span className="fb-glow-button__content">
        {
          children
        }
      </span>

      <span
        className="fb-glow-button__glow"
        aria-hidden="true"
      />
    </button>
  );
}