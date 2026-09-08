import {
  useState,
} from "react";

import "./MagneticButton.css";

export interface MagneticButtonProps {
  children?: React.ReactNode;

  background?: string;
  textColor?: string;
  fontSize?: number;
  radius?: number;
  paddingX?: number;
  paddingY?: number;
  strength?: number;

  className?: string;
}

export function MagneticButton({
  children = "Explore",

  background =
    "#ffffff",

  textColor =
    "#000000",

  fontSize =
    14,

  radius =
    999,

  paddingX =
    22,

  paddingY =
    13,

  strength =
    0.3,

  className =
    "",
}: MagneticButtonProps) {
  const [
    offset,
    setOffset,
  ] =
    useState({
      x: 0,
      y: 0,
    });

  function handleMove(
    event:
      React.MouseEvent<HTMLButtonElement>
  ) {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const centerX =
      rect.width /
      2;

    const centerY =
      rect.height /
      2;

    const x =
      event.clientX -
      rect.left -
      centerX;

    const y =
      event.clientY -
      rect.top -
      centerY;

    setOffset({
      x:
        x *
        strength,

      y:
        y *
        strength,
    });
  }

  return (
    <button
      type="button"
      className={`fb-magnetic-button ${className}`}
      onMouseMove={
        handleMove
      }
      onMouseLeave={() =>
        setOffset({
          x: 0,
          y: 0,
        })
      }
      style={{
        background,
        color:
          textColor,

        fontSize,

        borderRadius:
          radius,

        padding:
          `${paddingY}px ${paddingX}px`,

        transform:
          `translate3d(
            ${offset.x}px,
            ${offset.y}px,
            0
          )`,
      }}
    >
      {children}
    </button>
  );
}