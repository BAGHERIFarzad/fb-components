import {
  useState,
} from "react";

import "./SpotlightCard.css";

export interface SpotlightCardProps {
  children?:
    React.ReactNode;

  background?:
    string;

  spotlightColor?:
    string;

  radius?:
    number;

  glow?:
    number;

  borderOpacity?:
    number;

  className?:
    string;
}

export function SpotlightCard({
  children = (
    <>
      <span>
        FB
      </span>

      <strong>
        Spotlight
      </strong>

      <p>
        Move your pointer
        across the card.
      </p>
    </>
  ),

  background =
    "#111116",

  spotlightColor =
    "#9b7cff",

  radius =
    14,

  glow =
    35,

  borderOpacity =
    0.12,

  className =
    "",
}: SpotlightCardProps) {
  const [
    point,
    setPoint,
  ] =
    useState({
      x: 50,
      y: 30,
    });

  function handleMove(
    event:
      React.MouseEvent<HTMLDivElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    setPoint({
      x:
        ((event.clientX -
          rect.left) /
          rect.width) *
        100,

      y:
        ((event.clientY -
          rect.top) /
          rect.height) *
        100,
    });
  }

  return (
    <div
      className={`fb-spotlight-card ${className}`}
      onMouseMove={
        handleMove
      }
      style={{
        borderRadius:
          radius,

        borderColor:
          `rgba(
            255,
            255,
            255,
            ${borderOpacity}
          )`,

        background: `
          radial-gradient(
            circle at
            ${point.x}%
            ${point.y}%,
            ${spotlightColor}${hexAlpha(
              glow /
                100
            )},
            transparent 38%
          ),
          ${background}
        `,
      }}
    >
      {children}
    </div>
  );
}

function hexAlpha(
  opacity: number
) {
  return Math.round(
    Math.min(
      1,
      Math.max(
        0,
        opacity
      )
    ) *
      255
  )
    .toString(16)
    .padStart(
      2,
      "0"
    );
}