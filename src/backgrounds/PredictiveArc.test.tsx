import {
  render,
  waitFor,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { PredictiveArc } from "./PredictiveArc";

describe("PredictiveArc", () => {
  it("renders the complete predictive arc structure", () => {
    const { container } = render(
      <PredictiveArc />
    );

    expect(
      container.querySelector(
        ".fb-predictive-arc"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-predictive-arc__line--outer"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-predictive-arc__line--inner"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-predictive-arc__point--left"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-predictive-arc__point--right"
      )
    ).toBeInTheDocument();
  });

  it("applies the animated class by default", () => {
    const { container } = render(
      <PredictiveArc />
    );

    expect(
      container.querySelector(
        ".fb-predictive-arc"
      )
    ).toHaveClass(
      "fb-predictive-arc--animated"
    );
  });

  it("removes the animated class when animated is false", () => {
    const { container } = render(
      <PredictiveArc
        animated={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-predictive-arc"
      )
    ).not.toHaveClass(
      "fb-predictive-arc--animated"
    );
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <PredictiveArc
        className="custom-arc"
      />
    );

    expect(
      container.querySelector(
        ".fb-predictive-arc"
      )
    ).toHaveClass(
      "fb-predictive-arc",
      "custom-arc"
    );
  });

  it("applies default CSS custom properties", async () => {
    const { container } = render(
      <PredictiveArc />
    );

    const root =
      container.querySelector(
        ".fb-predictive-arc"
      ) as HTMLElement;

    await waitFor(() => {
      expect(
        root.style.getPropertyValue(
          "--predictive-arc-color"
        )
      ).toBe(
        "#9b7cff"
      );
    });

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-background"
      )
    ).toBe(
      "#0d0d11"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-size"
      )
    ).toBe(
      "70%"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-thickness"
      )
    ).toBe(
      "3px"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-glow"
      )
    ).toBe(
      "16px"
    );
  });

  it("applies custom CSS custom properties", async () => {
    const { container } = render(
      <PredictiveArc
        color="#ff0000"
        background="#101010"
        size={82}
        thickness={5}
        glow={24}
      />
    );

    const root =
      container.querySelector(
        ".fb-predictive-arc"
      ) as HTMLElement;

    await waitFor(() => {
      expect(
        root.style.getPropertyValue(
          "--predictive-arc-color"
        )
      ).toBe(
        "#ff0000"
      );
    });

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-background"
      )
    ).toBe(
      "#101010"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-size"
      )
    ).toBe(
      "82%"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-thickness"
      )
    ).toBe(
      "5px"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-glow"
      )
    ).toBe(
      "24px"
    );
  });

  it("updates CSS variables when props change", async () => {
    const {
      container,
      rerender,
    } = render(
      <PredictiveArc
        color="#111111"
        size={60}
        thickness={2}
        glow={10}
      />
    );

    const root =
      container.querySelector(
        ".fb-predictive-arc"
      ) as HTMLElement;

    await waitFor(() => {
      expect(
        root.style.getPropertyValue(
          "--predictive-arc-color"
        )
      ).toBe(
        "#111111"
      );
    });

    rerender(
      <PredictiveArc
        color="#222222"
        size={90}
        thickness={6}
        glow={30}
      />
    );

    await waitFor(() => {
      expect(
        root.style.getPropertyValue(
          "--predictive-arc-color"
        )
      ).toBe(
        "#222222"
      );
    });

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-size"
      )
    ).toBe(
      "90%"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-thickness"
      )
    ).toBe(
      "6px"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-glow"
      )
    ).toBe(
      "30px"
    );
  });

  it("supports zero numeric values", async () => {
    const { container } = render(
      <PredictiveArc
        size={0}
        thickness={0}
        glow={0}
      />
    );

    const root =
      container.querySelector(
        ".fb-predictive-arc"
      ) as HTMLElement;

    await waitFor(() => {
      expect(
        root.style.getPropertyValue(
          "--predictive-arc-size"
        )
      ).toBe(
        "0%"
      );
    });

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-thickness"
      )
    ).toBe(
      "0px"
    );

    expect(
      root.style.getPropertyValue(
        "--predictive-arc-glow"
      )
    ).toBe(
      "0px"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <PredictiveArc />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});