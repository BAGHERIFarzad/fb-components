import "./RevealText.css";

export interface RevealTextProps {
  children?: React.ReactNode;

  color?: string;
  accent?: string;

  fontSize?: number;

  lineHeight?: number;

  duration?: number;

  uppercase?: boolean;

  className?: string;
}

export function RevealText({
  children = (
    <>
      Build
      <br />
      better
      <br />
      interfaces
    </>
  ),

  color =
    "#ffffff",

  accent =
    "#866cff",

  fontSize =
    42,

  lineHeight =
    0.86,

  duration =
    0.7,

  uppercase =
    true,

  className =
    "",
}: RevealTextProps) {
  return (
    <div
      className={`fb-reveal-text ${className}`}
      style={{
        fontSize:

          `${fontSize}px`,

        lineHeight,

        animationDuration:
          `${duration}s`,

        textTransform:
          uppercase
            ? "uppercase"
            : "none",

        background:
          `linear-gradient(
            90deg,
            ${color},
            ${accent}
          )`,

        backgroundClip:
          "text",

        WebkitBackgroundClip:
          "text",

        color:
          "transparent",
      }}
    >
      {children}
    </div>
  );
}