import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GlassButton } from "./GlassButton";

describe("GlassButton", () => {
  it("renders a button with the provided label", () => {
    render(<GlassButton>Explore</GlassButton>);

    expect(
      screen.getByRole("button", { name: "Explore" })
    ).toBeInTheDocument();
  });
});