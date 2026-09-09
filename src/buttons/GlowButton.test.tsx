import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { GlowButton } from "./GlowButton";

describe("GlowButton", () => {
  it("renders its children", () => {
    render(<GlowButton>Launch</GlowButton>);

    expect(
      screen.getByRole("button", {
        name: "Launch"
      })
    ).toBeInTheDocument();
  });

  it("forwards click events", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <GlowButton onClick={onClick}>
        Launch
      </GlowButton>
    );

    await user.click(
      screen.getByRole("button", {
        name: "Launch"
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("supports keyboard activation", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <GlowButton onClick={onClick}>
        Continue
      </GlowButton>
    );

    const button = screen.getByRole("button", {
      name: "Continue"
    });

    button.focus();

    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional button attributes", () => {
    render(
      <GlowButton
        type="submit"
        aria-label="Submit project"
      >
        Submit
      </GlowButton>
    );

    expect(
      screen.getByRole("button", {
        name: "Submit project"
      })
    ).toHaveAttribute("type", "submit");
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <GlowButton>
        Accessible action
      </GlowButton>
    );

    await expectNoAccessibilityViolations(container);
  });
});