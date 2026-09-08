import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import "./BlurReveal.css";

export interface BlurRevealProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  color?: string;

  fontSize?: number;

  blur?: number;

  distance?: number;

  duration?: number;

  repeat?: boolean;

  className?: string;
}

export function BlurReveal({
  children = (
    <>
      Interfaces
      <br />
      worth
      <br />
      remembering.
    </>
  ),

  color = "#ffffff",

  fontSize = 48,

  blur = 14,

  distance = 24,

  duration = 0.8,

  repeat = false,

  className = "",

  style,

  ...props
}: BlurRevealProps) {
  return (
    <div
      {...props}
      className={`fb-blur-reveal ${
        repeat
          ? "fb-blur-reveal--repeat"
          : ""
      } ${className}`}
      style={{
        ...style,

        color,

        fontSize:
          `${fontSize}px`,

        ["--fb-blur-reveal-blur" as string]:
          `${blur}px`,

        ["--fb-blur-reveal-distance" as string]:
          `${distance}px`,

        ["--fb-blur-reveal-duration" as string]:
          `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}