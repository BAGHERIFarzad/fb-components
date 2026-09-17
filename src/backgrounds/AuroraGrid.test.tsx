import {
  render,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { AuroraGrid } from "./AuroraGrid";

describe("AuroraGrid", () => {
  it("renders the base component structure", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid />
      );

    expect(
      container.querySelector(
        ".fb-aurora-grid"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-aurora-grid__grid"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-aurora-grid__glow"
      )
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          className="custom-aurora"
        />
      );

    expect(
      container.querySelector(
        ".fb-aurora-grid"
      )
    ).toHaveClass(
      "fb-aurora-grid",
      "custom-aurora"
    );
  });

  it("enables animation classes by default", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid />
      );

    expect(
      container.querySelector(
        ".fb-aurora-grid__grid"
      )
    ).toHaveClass(
      "fb-aurora-grid__grid--animated"
    );

    expect(
      container.querySelector(
        ".fb-aurora-grid__glow"
      )
    ).toHaveClass(
      "fb-aurora-grid__glow--animated"
    );
  });

  it("removes animation classes when animated is false", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          animated={false}
        />
      );

    expect(
      container.querySelector(
        ".fb-aurora-grid__grid"
      )
    ).not.toHaveClass(
      "fb-aurora-grid__grid--animated"
    );

    expect(
      container.querySelector(
        ".fb-aurora-grid__glow"
      )
    ).not.toHaveClass(
      "fb-aurora-grid__glow--animated"
    );
  });

  it("applies a custom background color", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          background="#123456"
        />
      );

    const root =
      container.querySelector(
        ".fb-aurora-grid"
      ) as HTMLElement;

    expect(
      root.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("applies the custom grid size", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          gridSize={48}
        />
      );

    const grid =
      container.querySelector(
        ".fb-aurora-grid__grid"
      ) as HTMLElement;

    expect(
      grid.style.backgroundSize
    ).toBe(
      "48px 48px"
    );
  });

  it("creates the grid using two linear gradients", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          gridColor="#ff0000"
        />
      );

    const grid =
      container.querySelector(
        ".fb-aurora-grid__grid"
      ) as HTMLElement;

    const backgroundImage =
      grid.style.backgroundImage;

    expect(
      backgroundImage
    ).toContain(
      "linear-gradient"
    );

    /*
      The component uses #ff000033.

      jsdom may normalize 8-digit hexadecimal
      colors to rgba(), so we assert the resulting
      red channel instead of the literal source hex.
    */
    expect(
      backgroundImage
    ).toContain(
      "255"
    );
  });

  it("applies the custom grid animation speed", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          speed={10}
        />
      );

    const grid =
      container.querySelector(
        ".fb-aurora-grid__grid"
      ) as HTMLElement;

    expect(
      grid.style.animationDuration
    ).toBe(
      "10s"
    );
  });

  it("applies the aurora glow color", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          auroraColor="#00ff00"
        />
      );

    const glow =
      container.querySelector(
        ".fb-aurora-grid__glow"
      ) as HTMLElement;

    expect(
      glow.style.background
    ).toBe(
      "rgb(0, 255, 0)"
    );
  });

  it("applies the custom glow blur", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          glow={72}
        />
      );

    const glow =
      container.querySelector(
        ".fb-aurora-grid__glow"
      ) as HTMLElement;

    expect(
      glow.style.filter
    ).toBe(
      "blur(72px)"
    );
  });

  it("uses eighty percent of speed for the glow animation", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          speed={10}
        />
      );

    const glow =
      container.querySelector(
        ".fb-aurora-grid__glow"
      ) as HTMLElement;

    /*
      10 * 0.8 = 8
    */

    expect(
      glow.style.animationDuration
    ).toBe(
      "8s"
    );
  });

  it("supports fractional animation speeds", () => {
    const {
      container,
    } =
      render(
        <AuroraGrid
          speed={2.5}
        />
      );

    const grid =
      container.querySelector(
        ".fb-aurora-grid__grid"
      ) as HTMLElement;

    const glow =
      container.querySelector(
        ".fb-aurora-grid__glow"
      ) as HTMLElement;

    expect(
      grid.style.animationDuration
    ).toBe(
      "2.5s"
    );

    expect(
      glow.style.animationDuration
    ).toBe(
      "2s"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <AuroraGrid />
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});