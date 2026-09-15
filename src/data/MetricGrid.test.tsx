import {
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { MetricGrid } from "./MetricGrid";

describe("MetricGrid", () => {
  it("renders the default metric items", () => {
    render(
      <MetricGrid />
    );

    expect(
      screen.getByText("Revenue")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$84.2K")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Users")
    ).toBeInTheDocument();

    expect(
      screen.getByText("18.4K")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Conversion")
    ).toBeInTheDocument();

    expect(
      screen.getByText("7.8%")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Latency")
    ).toBeInTheDocument();

    expect(
      screen.getByText("94ms")
    ).toBeInTheDocument();
  });

  it("renders custom metric items", () => {
    render(
      <MetricGrid
        items={[
          {
            label: "Orders",
            value: "1,245",
            delta: "+14%",
            positive: true,
          },
          {
            label: "Errors",
            value: "18",
            delta: "-4%",
            positive: false,
          },
        ]}
      />
    );

    expect(
      screen.getByText("Orders")
    ).toBeInTheDocument();

    expect(
      screen.getByText("1,245")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Errors")
    ).toBeInTheDocument();

    expect(
      screen.getByText("18")
    ).toBeInTheDocument();
  });

  it("renders the correct number of metric cards", () => {
    const {
      container,
    } =
      render(
        <MetricGrid
          items={[
            {
              label: "A",
              value: "1",
            },
            {
              label: "B",
              value: "2",
            },
            {
              label: "C",
              value: "3",
            },
          ]}
        />
      );

    expect(
      container.querySelectorAll(
        ".fb-metric-grid article"
      )
    ).toHaveLength(3);
  });

  it("marks negative deltas with the negative class", () => {
    render(
      <MetricGrid
        items={[
          {
            label: "Errors",
            value: "18",
            delta: "-8%",
            positive: false,
          },
        ]}
      />
    );

    expect(
      screen.getByText("-8%")
    ).toHaveClass(
      "is-negative"
    );
  });

  it("does not mark positive deltas as negative", () => {
    render(
      <MetricGrid
        items={[
          {
            label: "Growth",
            value: "42%",
            delta: "+12%",
            positive: true,
          },
        ]}
      />
    );

    expect(
      screen.getByText("+12%")
    ).not.toHaveClass(
      "is-negative"
    );
  });

  it("treats an undefined positive value as non-negative", () => {
    render(
      <MetricGrid
        items={[
          {
            label: "Growth",
            value: "42%",
            delta: "+5%",
          },
        ]}
      />
    );

    expect(
      screen.getByText("+5%")
    ).not.toHaveClass(
      "is-negative"
    );
  });

  it("does not render a delta element when delta is missing", () => {
    const {
      container,
    } =
      render(
        <MetricGrid
          items={[
            {
              label: "Total",
              value: "500",
            },
          ]}
        />
      );

    expect(
      container.querySelector(
        ".fb-metric-grid small"
      )
    ).not.toBeInTheDocument();
  });

  it("applies the requested number of columns", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        columns={4}
      />
    );

    expect(
      screen.getByTestId(
        "metric-grid"
      ).style.gridTemplateColumns
    ).toBe(
      "repeat(4, minmax(0, 1fr))"
    );
  });

  it("clamps columns to at least one", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        columns={0}
      />
    );

    expect(
      screen.getByTestId(
        "metric-grid"
      ).style.gridTemplateColumns
    ).toBe(
      "repeat(1, minmax(0, 1fr))"
    );
  });

  it("also clamps negative column values to one", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        columns={-5}
      />
    );

    expect(
      screen.getByTestId(
        "metric-grid"
      ).style.gridTemplateColumns
    ).toBe(
      "repeat(1, minmax(0, 1fr))"
    );
  });

  it("applies custom design variables", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        accent="#ff0000"
        background="#222222"
        radius={28}
      />
    );

    const grid =
      screen.getByTestId(
        "metric-grid"
      );

    expect(
      grid.style.getPropertyValue(
        "--fb-metric-accent"
      )
    ).toBe(
      "#ff0000"
    );

    expect(
      grid.style.getPropertyValue(
        "--fb-metric-background"
      )
    ).toBe(
      "#222222"
    );

    expect(
      grid.style.getPropertyValue(
        "--fb-metric-radius"
      )
    ).toBe(
      "28px"
    );
  });

  it("applies a custom class name", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        className="custom-grid"
      />
    );

    expect(
      screen.getByTestId(
        "metric-grid"
      )
    ).toHaveClass(
      "fb-metric-grid",
      "custom-grid"
    );
  });

  it("forwards HTML attributes", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        aria-label="Business metrics"
        title="Metrics overview"
      />
    );

    const grid =
      screen.getByTestId(
        "metric-grid"
      );

    expect(
      grid
    ).toHaveAttribute(
      "aria-label",
      "Business metrics"
    );

    expect(
      grid
    ).toHaveAttribute(
      "title",
      "Metrics overview"
    );
  });

  it("preserves custom inline styles", () => {
    render(
      <MetricGrid
        data-testid="metric-grid"
        style={{
          marginTop:
            "24px",
        }}
      />
    );

    expect(
      screen.getByTestId(
        "metric-grid"
      )
    ).toHaveStyle({
      marginTop:
        "24px",
    });
  });

  it("supports an empty items array", () => {
    const {
      container,
    } =
      render(
        <MetricGrid
          items={[]}
        />
      );

    expect(
      container.querySelectorAll(
        ".fb-metric-grid article"
      )
    ).toHaveLength(0);
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <MetricGrid
          aria-label="Key performance metrics"
        />
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});