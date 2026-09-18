import type { HTMLAttributes } from "react";

import "./Skeleton.css";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape of the placeholder. */
  variant?: "text" | "rectangular" | "circular";
  /** Width — number (px) or any CSS length. Defaults to 100% for text/rectangular. */
  width?: number | string;
  /** Height — number (px) or any CSS length. Defaults to 1em for text, 120px for rectangular. */
  height?: number | string;
  /** Number of stacked rows (text variant). */
  lines?: number;
  /** Animation style; "none" renders a static placeholder. */
  animation?: "pulse" | "wave" | "none";
  className?: string;
}

function toCssLength(value: number | string | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

export function Skeleton({
  variant = "text",
  width,
  height,
  lines = 1,
  animation = "pulse",
  className = "",
  style,
  ...props
}: SkeletonProps) {
  const baseStyle = {
    ...style,
    width: toCssLength(width),
    height: toCssLength(height),
  };

  const classes = (extra: string) =>
    `fb-skeleton fb-skeleton--${variant} fb-skeleton--${animation} ${extra} ${className}`.trim();

  // Loading placeholders are purely decorative for assistive tech.
  const a11y = { role: "presentation", "aria-hidden": true as const };

  if (variant === "text" && lines > 1) {
    return (
      <div className="fb-skeleton-group" style={style}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            {...props}
            {...a11y}
            className={classes(i === lines - 1 ? "fb-skeleton--last" : "")}
            style={baseStyle}
          />
        ))}
      </div>
    );
  }

  return <div {...props} {...a11y} className={classes("")} style={baseStyle} />;
}
