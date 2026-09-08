import {
  useEffect,
  useState,
} from "react";

import type {
  HTMLAttributes,
} from "react";

import "./StreamingResponse.css";

export interface StreamingResponseProps
  extends HTMLAttributes<HTMLDivElement> {
  text?: string;

  accent?: string;
  textColor?: string;

  speed?: number;

  showCursor?: boolean;
  showStatus?: boolean;

  statusLabel?: string;

  className?: string;
}

export function StreamingResponse({
  text =
    "FB Components gives your application a reusable system for motion, interaction and AI-native interfaces.",

  accent = "#9b7cff",
  textColor = "#ffffff",

  speed = 24,

  showCursor = true,
  showStatus = true,

  statusLabel =
    "GENERATING",

  className = "",
  style,

  ...props
}: StreamingResponseProps) {
  const [
    length,
    setLength,
  ] =
    useState(0);

  useEffect(() => {
    setLength(
      0
    );

    if (
      text.length ===
      0
    ) {
      return;
    }

    const interval =
      window.setInterval(
        () => {
          setLength(
            (
              current
            ) => {
              if (
                current >=
                text.length
              ) {
                window.clearInterval(
                  interval
                );

                return current;
              }

              return (
                current +
                1
              );
            }
          );
        },
        Math.max(
          5,
          speed
        )
      );

    return () =>
      window.clearInterval(
        interval
      );
  }, [
    text,
    speed,
  ]);

  const complete =
    length >=
    text.length;

  return (
    <div
      {...props}
      className={`fb-streaming-response ${className}`}
      style={{
        ...style,

        color:
          textColor,

        ["--fb-streaming-accent" as string]:
          accent,
      }}
      aria-live="polite"
    >
      {showStatus && (
        <div className="fb-streaming-response__status">
          <span
            className={
              complete
                ? "is-complete"
                : ""
            }
            aria-hidden="true"
          />

          {complete
            ? "COMPLETE"
            : statusLabel}
        </div>
      )}

      <p>
        {text.slice(
          0,
          length
        )}

        {showCursor &&
          !complete && (
            <span
              className="fb-streaming-response__cursor"
              aria-hidden="true"
            />
          )}
      </p>
    </div>
  );
}