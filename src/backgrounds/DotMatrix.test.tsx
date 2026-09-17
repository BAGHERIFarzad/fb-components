import {
  render,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { DotMatrix } from "./DotMatrix";

describe("DotMatrix", () => {
  it("renders the base component", () => {
    const {
      container,
    } =
      render(
        <DotMatrix />
      );

    expect(
      container.querySelector(
        ".fb-dot-matrix"
      )
    ).toBeInTheDocument();
  });

  it("applies the fade class by default", () => {
    const {
      container,
    } =
      render(
        <DotMatrix />
      );

    expect(
      container.querySelector(
        ".fb-dot-matrix"
      )
    ).toHaveClass(
      "fb-dot-matrix--fade"
    );
  });

  it("removes the fade class when fade is false", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          fade={false}
        />
      );

    expect(
      container.querySelector(
        ".fb-dot-matrix"
      )
    ).not.toHaveClass(
      "fb-dot-matrix--fade"
    );
  });

  it("applies a custom class name", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          className="custom-dot-matrix"
        />
      );

    expect(
      container.querySelector(
        ".fb-dot-matrix"
      )
    ).toHaveClass(
      "fb-dot-matrix",
      "custom-dot-matrix"
    );
  });

  it("applies a custom background color", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          background="#123456"
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundColor
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("applies custom opacity", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          opacity={0.45}
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.opacity
    ).toBe(
      "0.45"
    );
  });

  it("applies the custom gap as background size", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          gap={32}
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundSize
    ).toBe(
      "32px 32px"
    );
  });

  it("creates a radial gradient background", () => {
    const {
      container,
    } =
      render(
        <DotMatrix />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundImage
    ).toContain(
      "radial-gradient"
    );
  });

  it("uses the custom dot color", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          color="#ff0000"
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    /*
      jsdom may normalize hex colors into rgb().
    */
    expect(
      matrix.style.backgroundImage
    ).toContain(
      "255"
    );
  });

  it("uses the custom dot size", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          dotSize={4}
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundImage
    ).toContain(
      "4px"
    );

    expect(
      matrix.style.backgroundImage
    ).toContain(
      "4.8px"
    );
  });

  it("supports fractional dot sizes", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          dotSize={2.5}
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundImage
    ).toContain(
      "2.5px"
    );

    expect(
      matrix.style.backgroundImage
    ).toContain(
      "3.3px"
    );
  });

  it("supports a zero gap value", () => {
    const {
      container,
    } =
      render(
        <DotMatrix
          gap={0}
        />
      );

    const matrix =
      container.querySelector(
        ".fb-dot-matrix"
      ) as HTMLElement;

    expect(
      matrix.style.backgroundSize
    ).toBe(
      "0px 0px"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <DotMatrix />
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});