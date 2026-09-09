import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { GlowButton } from "./GlowButton";

describe("GlowButton", () => {
  it("renders its children", () => {
    render(<GlowButton>Launch</GlowButton>);

    expect(
      screen.getByRole("button", { name: "Launch" })
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
      screen.getByRole("button", { name: "Launch" })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});