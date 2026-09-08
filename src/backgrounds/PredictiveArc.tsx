import {
  useEffect,
  useRef,
} from "react";
import "./PredictiveArc.css";

export interface PredictiveArcProps {
  color?: string;
  background?: string;
  size?: number;
  thickness?: number;
  glow?: number;
  animated?: boolean;
  className?: string;
}

export function PredictiveArc({
  color = "#9b7cff",
  background = "#0d0d11",
  size = 70,
  thickness = 3,
  glow = 16,
  animated = true,
  className = "",
}: PredictiveArcProps) {
  const containerRef =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {
    const element =
      containerRef.current;

    if (!element) {
      return;
    }

    element.style.setProperty(
      "--predictive-arc-color",
      color
    );

    element.style.setProperty(
      "--predictive-arc-background",
      background
    );

    element.style.setProperty(
      "--predictive-arc-size",
      `${size}%`
    );

    element.style.setProperty(
      "--predictive-arc-thickness",
      `${thickness}px`
    );

    element.style.setProperty(
      "--predictive-arc-glow",
      `${glow}px`
    );
  }, [
    color,
    background,
    size,
    thickness,
    glow,
  ]);

  return (
    <div
      ref={containerRef}
      className={`fb-predictive-arc ${
        animated
          ? "fb-predictive-arc--animated"
          : ""
      } ${className}`}
    >
      <div className="fb-predictive-arc__line fb-predictive-arc__line--outer" />

      <div className="fb-predictive-arc__line fb-predictive-arc__line--inner" />

      <span className="fb-predictive-arc__point fb-predictive-arc__point--left" />

      <span className="fb-predictive-arc__point fb-predictive-arc__point--right" />
    </div>
  );
}