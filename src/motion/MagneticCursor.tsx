import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import "./MagneticCursor.css";

export interface MagneticCursorProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;

  color?: string;

  size?: number;

  ringSize?: number;

  followSpeed?: number;

  magneticStrength?: number;

  className?: string;
}

interface Point {
  x: number;
  y: number;
}

export function MagneticCursor({
  children,

  color = "#b99cff",

  size = 18,

  ringSize = 44,

  followSpeed = 0.14,

  magneticStrength = 0.25,

  className = "",

  style,

  ...props
}: MagneticCursorProps) {
  const containerRef =
    useRef<HTMLDivElement>(
      null
    );

  const [
    point,
    setPoint,
  ] =
    useState<Point>({
      x: 0,
      y: 0,
    });

  const [
    visible,
    setVisible,
  ] =
    useState(false);

  const [
    hoveringTarget,
    setHoveringTarget,
  ] =
    useState(false);

  useEffect(() => {
    const element =
      containerRef.current;

    if (!element) {
      return;
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      const rect =
        element!.getBoundingClientRect();

      let x =
        event.clientX -
        rect.left;

      let y =
        event.clientY -
        rect.top;

      const target =
        (
          event.target as
            HTMLElement | null
        )?.closest(
          "[data-magnetic-target]"
        ) as
          | HTMLElement
          | null;

      if (target) {
        const targetRect =
          target.getBoundingClientRect();

        const centerX =
          targetRect.left +
          targetRect.width /
            2;

        const centerY =
          targetRect.top +
          targetRect.height /
            2;

        x +=
          (
            centerX -
            event.clientX
          ) *
          magneticStrength;

        y +=
          (
            centerY -
            event.clientY
          ) *
          magneticStrength;

        setHoveringTarget(
          true
        );
      } else {
        setHoveringTarget(
          false
        );
      }

      setPoint({
        x,
        y,
      });

      setVisible(
        true
      );
    }

    function handlePointerLeave() {
      setVisible(
        false
      );

      setHoveringTarget(
        false
      );
    }

    element.addEventListener(
      "pointermove",
      handlePointerMove
    );

    element.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      element.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      element.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, [
    magneticStrength,
  ]);

  return (
    <div
      {...props}
      ref={
        containerRef
      }
      className={`fb-magnetic-cursor ${className}`}
      style={{
        ...style,

        cursor:
          "none",
      }}
    >
      <div className="fb-magnetic-cursor__content">
        {children}
      </div>

      <span
        aria-hidden="true"
        className={`fb-magnetic-cursor__ring ${
          visible
            ? "is-visible"
            : ""
        } ${
          hoveringTarget
            ? "is-targeting"
            : ""
        }`}
        style={{
          width:
            ringSize,

          height:
            ringSize,

          left:
            point.x,

          top:
            point.y,

          borderColor:
            color,

          transitionDuration:
            `${followSpeed}s`,
        }}
      />

      <span
        aria-hidden="true"
        className={`fb-magnetic-cursor__dot ${
          visible
            ? "is-visible"
            : ""
        }`}
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

          boxShadow:
            `0 0 ${size}px ${color}`,
        }}
      />
    </div>
  );
}