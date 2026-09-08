import {
  useState,
} from "react";

import "./GlowCursor.css";

export interface GlowCursorProps {
  children?:
    React.ReactNode;

  color?:
    string;

  size?:
    number;

  blur?:
    number;

  opacity?:
    number;

  followSpeed?:
    number;

  className?:
    string;
}

export function GlowCursor({
  children,

  color =
    "#825dff",

  size =
    110,

  blur =
    35,

  opacity =
    0.45,

  followSpeed =
    0.12,

  className =
    "",
}: GlowCursorProps) {
  const [
    point,
    setPoint,
  ] =
    useState({
      x: 0,
      y: 0,
    });

  return (
    <div
      className={`fb-glow-cursor ${className}`}
      onMouseMove={(
        event
      ) => {
        const rect =
          event.currentTarget.getBoundingClientRect();

        setPoint({
          x:
            event.clientX -
            rect.left,

          y:
            event.clientY -
            rect.top,
        });
      }}
    >
      <div
        className="fb-glow-cursor__glow"
        style={{
          width:
            size,

          height:
            size,

          left:
            point.x,

          top:
            point.y,

          background:
            color,

          filter:
            `blur(${blur}px)`,

          opacity,

          transitionDuration:
            `${followSpeed}s`,
        }}
      />

      <div className="fb-glow-cursor__content">
        {children}
      </div>
    </div>
  );
}