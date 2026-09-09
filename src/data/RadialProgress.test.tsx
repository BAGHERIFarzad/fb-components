import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { RadialProgress } from "./RadialProgress";

describe("RadialProgress", () => {
  it("renders successfully", () => {
    const { container } = render(
      <RadialProgress value={72} />
    );

    expect(container.firstChild).toBeTruthy();
  });

  it("renders different progress values", () => {
    const { rerender } = render(
      <RadialProgress
        value={25}
        ariaLabel="Upload progress"
      />
    );

    let progressbar = screen.getByRole("progressbar", {
      name: "Upload progress",
    });

    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      "25"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "25%"
    );

    rerender(
      <RadialProgress
        value={80}
        ariaLabel="Upload progress"
      />
    );

    progressbar = screen.getByRole("progressbar", {
      name: "Upload progress",
    });

    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      "80"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "80%"
    );
  });

  it("exposes accessible progressbar semantics", () => {
    render(
      <RadialProgress
        value={72}
        ariaLabel="Profile completion"
      />
    );

    const progressbar = screen.getByRole("progressbar", {
      name: "Profile completion",
    });

    expect(progressbar).toHaveAttribute(
      "aria-valuemin",
      "0"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuemax",
      "100"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      "72"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "72%"
    );
  });

  it("uses the default accessible label", () => {
    render(
      <RadialProgress value={40} />
    );

    expect(
      screen.getByRole("progressbar", {
        name: "Progress",
      })
    ).toBeInTheDocument();
  });

  it("clamps values below zero", () => {
    render(
      <RadialProgress
        value={-20}
        ariaLabel="Negative progress"
      />
    );

    const progressbar = screen.getByRole("progressbar", {
      name: "Negative progress",
    });

    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      "0"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "0%"
    );
  });

  it("clamps values above one hundred", () => {
    render(
      <RadialProgress
        value={140}
        ariaLabel="Maximum progress"
      />
    );

    const progressbar = screen.getByRole("progressbar", {
      name: "Maximum progress",
    });

    expect(progressbar).toHaveAttribute(
      "aria-valuenow",
      "100"
    );

    expect(progressbar).toHaveAttribute(
      "aria-valuetext",
      "100%"
    );
  });

  it("renders a custom visible label", () => {
    render(
      <RadialProgress
        value={64}
        label="PROFILE COMPLETE"
      />
    );

    expect(
      screen.getByText("PROFILE COMPLETE")
    ).toBeInTheDocument();

    expect(
      screen.getByText("64")
    ).toBeInTheDocument();
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <RadialProgress
        value={72}
        ariaLabel="Profile completion"
      />
    );

    await expectNoAccessibilityViolations(container);
  });
});