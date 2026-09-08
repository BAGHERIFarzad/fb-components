import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  HTMLAttributes,
} from "react";

import "./AnimatedCounter.css";

export interface AnimatedCounterProps
  extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  duration?: number;

  color?: string;
  accent?: string;

  fontSize?: number;

  prefix?: string;
  suffix?: string;

  label?: string;
  delta?: string;

  decimals?: number;

  className?: string;
}

export function AnimatedCounter({
  value = 128,
  duration = 1.5,

  color = "#ffffff",
  accent = "#9b7cff",

  fontSize = 72,

  prefix = "",
  suffix = "K",

  label =
    "ACTIVE USERS",

  delta =
    "+18.4%",

  decimals = 0,

  className = "",
  style,

  ...props
}: AnimatedCounterProps) {
  const [
    displayed,
    setDisplayed,
  ] =
    useState(0);

  const frameRef =
    useRef<number | null>(
      null
    );

  useEffect(() => {
    const start =
      performance.now();

    const total =
      Math.max(
        duration,
        0.01
      ) *
      1000;

    function animate(
      now: number
    ) {
      const progress =
        Math.min(
          (
            now -
            start
          ) /
            total,
          1
        );

      const eased =
        1 -
        Math.pow(
          1 -
            progress,
          3
        );

      setDisplayed(
        value *
          eased
      );

      if (
        progress <
        1
      ) {
        frameRef.current =
          requestAnimationFrame(
            animate
          );
      }
    }

    frameRef.current =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        frameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, [
    value,
    duration,
  ]);

  return (
    <div
      {...props}
      className={`fb-animated-counter ${className}`}
      style={{
        ...style,

        color,

        ["--fb-counter-accent" as string]:
          accent,

        ["--fb-counter-size" as string]:
          `${fontSize}px`,
      }}
    >
      <span className="fb-animated-counter__label">
        {label}
      </span>

      <strong>
        {prefix}

        {displayed.toLocaleString(
          undefined,
          {
            minimumFractionDigits:
              decimals,

            maximumFractionDigits:
              decimals,
          }
        )}

        {suffix}
      </strong>

      {delta && (
        <small>
          {delta}
        </small>
      )}
    </div>
  );
}