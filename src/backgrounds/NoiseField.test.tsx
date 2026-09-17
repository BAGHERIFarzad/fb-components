import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { NoiseField } from "./NoiseField";

describe("NoiseField", () => {
  it("renders the root, both blobs, and texture", () => {
    const { container } = render(
      <NoiseField />
    );

    expect(
      container.querySelector(
        ".fb-noise-field"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-noise-field__blob--one"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-noise-field__blob--two"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-noise-field__texture"
      )
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <NoiseField
        className="custom-noise"
      />
    );

    expect(
      container.querySelector(
        ".fb-noise-field"
      )
    ).toHaveClass(
      "fb-noise-field",
      "custom-noise"
    );
  });

  it("applies the custom background color", () => {
    const { container } = render(
      <NoiseField
        background="#123456"
      />
    );

    const root =
      container.querySelector(
        ".fb-noise-field"
      ) as HTMLElement;

    expect(
      root.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("enables animation classes by default", () => {
    const { container } = render(
      <NoiseField />
    );

    expect(
      container.querySelector(
        ".fb-noise-field__blob--one"
      )
    ).toHaveClass(
      "fb-noise-field__blob--animated"
    );

    expect(
      container.querySelector(
        ".fb-noise-field__blob--two"
      )
    ).toHaveClass(
      "fb-noise-field__blob--animated"
    );

    expect(
      container.querySelector(
        ".fb-noise-field__texture"
      )
    ).toHaveClass(
      "fb-noise-field__texture--animated"
    );
  });

  it("removes animation classes when animated is false", () => {
    const { container } = render(
      <NoiseField
        animated={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-noise-field__blob--one"
      )
    ).not.toHaveClass(
      "fb-noise-field__blob--animated"
    );

    expect(
      container.querySelector(
        ".fb-noise-field__blob--two"
      )
    ).not.toHaveClass(
      "fb-noise-field__blob--animated"
    );

    expect(
      container.querySelector(
        ".fb-noise-field__texture"
      )
    ).not.toHaveClass(
      "fb-noise-field__texture--animated"
    );
  });

  it("applies the custom color to both blobs", () => {
    const { container } = render(
      <NoiseField
        color="#ff0000"
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    expect(
      firstBlob.style.background
    ).toBe(
      "rgb(255, 0, 0)"
    );

    expect(
      secondBlob.style.background
    ).toBe(
      "rgb(255, 0, 0)"
    );
  });

  it("applies opacity calculations correctly", () => {
    const { container } = render(
      <NoiseField
        opacity={0.6}
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    const texture =
      container.querySelector(
        ".fb-noise-field__texture"
      ) as HTMLElement;

    expect(
      firstBlob.style.opacity
    ).toBe("0.6");

    expect(
      Number(secondBlob.style.opacity)
    ).toBeCloseTo(0.42);

    expect(
      texture.style.opacity
    ).toBe("0.3");
  });

  it("applies scale calculations correctly", () => {
    const { container } = render(
      <NoiseField
        scale={2}
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    expect(
      firstBlob.style.transform
    ).toBe(
      "scale(2)"
    );

    expect(
      secondBlob.style.transform
    ).toBe(
      "scale(1.6)"
    );
  });

  it("applies animation duration calculations correctly", () => {
    const { container } = render(
      <NoiseField
        speed={10}
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    const texture =
      container.querySelector(
        ".fb-noise-field__texture"
      ) as HTMLElement;

    expect(
      firstBlob.style.animationDuration
    ).toBe(
      "10s"
    );

    expect(
      secondBlob.style.animationDuration
    ).toBe(
      "12s"
    );

    expect(
      texture.style.animationDuration
    ).toBe(
      "8.5s"
    );
  });

  it("supports fractional scale and speed values", () => {
    const { container } = render(
      <NoiseField
        scale={1.5}
        speed={2.5}
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    const texture =
      container.querySelector(
        ".fb-noise-field__texture"
      ) as HTMLElement;

    expect(
      firstBlob.style.transform
    ).toBe(
      "scale(1.5)"
    );

    const secondScale =
	  Number(
		secondBlob.style.transform
		  .replace("scale(", "")
		  .replace(")", "")
	  );

	expect(
	  secondScale
	).toBeCloseTo(
	  1.2
	);

    expect(
      firstBlob.style.animationDuration
    ).toBe(
      "2.5s"
    );

    expect(
      secondBlob.style.animationDuration
    ).toBe(
      "3s"
    );

    expect(
      texture.style.animationDuration
    ).toBe(
      "2.125s"
    );
  });

  it("keeps inline animation duration values when animated is false", () => {
    const { container } = render(
      <NoiseField
        animated={false}
        speed={4}
      />
    );

    const firstBlob =
      container.querySelector(
        ".fb-noise-field__blob--one"
      ) as HTMLElement;

    const secondBlob =
      container.querySelector(
        ".fb-noise-field__blob--two"
      ) as HTMLElement;

    const texture =
      container.querySelector(
        ".fb-noise-field__texture"
      ) as HTMLElement;

    expect(
      firstBlob.style.animationDuration
    ).toBe(
      "4s"
    );

    expect(
      secondBlob.style.animationDuration
    ).toBe(
      "4.8s"
    );

    expect(
      texture.style.animationDuration
    ).toBe(
      "3.4s"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <NoiseField />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});