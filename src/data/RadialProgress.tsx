import type {
  HTMLAttributes,
} from "react";

import "./RadialProgress.css";

export interface RadialProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  value?: number;

  size?: number;
  strokeWidth?: number;

  color?: string;
  trackColor?: string;

  animated?: boolean;

  label?: string;

  ariaLabel?: string;

  className?: string;
}

export function RadialProgress({
  value = 72,

  size = 180,
  strokeWidth = 10,

  color = "#9b7cff",
  trackColor = "#24242c",

  animated = true,

  label = "COMPLETE",

  ariaLabel = "Progress",

  className = "",
  style,

  ...props
}: RadialProgressProps) {
  const clamped =
    Math.min(
      100,
      Math.max(
        0,
        value
      )
    );

  const radius =
    50 -
    strokeWidth /
      2;

  const circumference =
    2 *
    Math.PI *
    radius;

  const offset =
    circumference *
    (
      1 -
      clamped /
        100
    );

  return (
    <div
      {...props}
      className={`fb-radial-progress ${className}`}
      style={{
        ...style,

        width:
          size,

        height:
          size,

        ["--fb-radial-color" as string]:
          color,
      }}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      aria-valuetext={`${Math.round(clamped)}%`}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={
            animated
              ? "fb-radial-progress__value fb-radial-progress__value--animated"
              : "fb-radial-progress__value"
          }
        />
      </svg>

      <div className="fb-radial-progress__content">
        <strong>
          {Math.round(clamped)}
          <small>
            %
          </small>
        </strong>

        <span>
          {label}
        </span>
      </div>
    </div>
  );
}