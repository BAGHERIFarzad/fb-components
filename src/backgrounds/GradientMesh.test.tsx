import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { GradientMesh } from "./GradientMesh";

describe("GradientMesh", () => {
  it("renders the root and animated layer", () => {
    const { container } = render(
      <GradientMesh />
    );

    const root =
      container.querySelector(
        ".fb-gradient-mesh"
      );

    const layer =
      container.querySelector(
        ".fb-gradient-mesh__layer"
      );

    expect(root).toBeTruthy();
    expect(layer).toBeTruthy();

    expect(root).toHaveClass(
      "fb-gradient-mesh"
    );

    expect(layer).toHaveClass(
      "fb-gradient-mesh__layer",
      "fb-gradient-mesh__layer--animated"
    );
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <GradientMesh className="custom-mesh" />
    );

    const root =
      container.querySelector(
        ".fb-gradient-mesh"
      );

    expect(root).toHaveClass(
      "fb-gradient-mesh",
      "custom-mesh"
    );
  });

  it("applies a custom background to the root", () => {
    const { container } = render(
      <GradientMesh
        background="rgb(16, 16, 24)"
      />
    );

    const root =
      container.querySelector(
        ".fb-gradient-mesh"
      ) as HTMLElement;

    expect(root).toBeTruthy();
    expect(root.style.background).toBe(
      "rgb(16, 16, 24)"
    );
  });

  it("applies custom gradient colors to the layer", () => {
    const { container } = render(
      <GradientMesh
        primary="rgb(255, 0, 0)"
        secondary="rgb(0, 255, 0)"
        accent="rgb(0, 0, 255)"
      />
    );

    const layer =
      container.querySelector(
        ".fb-gradient-mesh__layer"
      ) as HTMLElement;

    const style =
      layer.getAttribute("style") ?? "";

    expect(style).toContain(
      "rgb(255, 0, 0)"
    );

    expect(style).toContain(
      "rgb(0, 255, 0)"
    );

    expect(style).toContain(
      "rgb(0, 0, 255)"
    );
  });

  it("applies custom blur and speed values", () => {
    const { container } = render(
      <GradientMesh
        blur={20}
        speed={12}
      />
    );

    const layer =
      container.querySelector(
        ".fb-gradient-mesh__layer"
      ) as HTMLElement;

    expect(layer.style.filter).toBe(
      "blur(20px)"
    );

    expect(
      layer.style.animationDuration
    ).toBe("12s");
  });

  it("removes the animated class when animated is false", () => {
    const { container } = render(
      <GradientMesh animated={false} />
    );

    const layer =
      container.querySelector(
        ".fb-gradient-mesh__layer"
      );

    expect(layer).toHaveClass(
      "fb-gradient-mesh__layer"
    );

    expect(layer).not.toHaveClass(
      "fb-gradient-mesh__layer--animated"
    );
  });

  it("keeps the speed style even when animated is false", () => {
    const { container } = render(
      <GradientMesh
        animated={false}
        speed={5}
      />
    );

    const layer =
      container.querySelector(
        ".fb-gradient-mesh__layer"
      ) as HTMLElement;

    expect(
      layer.style.animationDuration
    ).toBe("5s");
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <GradientMesh />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});