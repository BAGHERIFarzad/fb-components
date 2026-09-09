import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { GlassButton } from "./GlassButton";

describe("GlassButton", () => {
  it("renders a button with the provided label", () => {
    render(
      <GlassButton>
        Explore
      </GlassButton>
    );

    expect(
      screen.getByRole("button", {
        name: "Explore"
      })
    ).toBeInTheDocument();
  });

  it("fires click handlers", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <GlassButton onClick={onClick}>
        Explore
      </GlassButton>
    );

    await user.click(
      screen.getByRole("button", {
        name: "Explore"
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports keyboard interaction", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <GlassButton onClick={onClick}>
        Open
      </GlassButton>
    );

    const button = screen.getByRole("button", {
      name: "Open"
    });

    button.focus();

    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <GlassButton>
        Accessible button
      </GlassButton>
    );

    await expectNoAccessibilityViolations(container);
  });
});