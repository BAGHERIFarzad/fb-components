import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { GlassCard } from "./GlassCard";

describe("GlassCard", () => {
  it("renders its default content", () => {
    render(<GlassCard />);

    expect(
      screen.getByText("01 / FEATURE")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Built for/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Premium interaction without visual noise/i
      )
    ).toBeInTheDocument();
  });

  it("renders custom children", () => {
    render(
      <GlassCard>
        <h2>Custom glass content</h2>
      </GlassCard>
    );

    expect(
      screen.getByRole("heading", {
        name: "Custom glass content",
      })
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <GlassCard className="custom-glass-card">
        Content
      </GlassCard>
    );

    const card =
      container.querySelector(
        ".fb-glass-card"
      );

    expect(card).toHaveClass(
      "fb-glass-card",
      "custom-glass-card"
    );
  });

  it("forwards HTML attributes", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        aria-label="Premium feature card"
        title="Feature card"
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(card).toHaveAttribute(
      "aria-label",
      "Premium feature card"
    );

    expect(card).toHaveAttribute(
      "title",
      "Feature card"
    );
  });

  it("applies custom radius and blur values", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        radius={30}
        blur={24}
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.borderRadius
    ).toBe(
      "30px"
    );

    expect(
      card.style.backdropFilter
    ).toBe(
      "blur(24px)"
    );
  });

  it("applies custom tint and opacity", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        tint="#ff0000"
        opacity={0.2}
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.background
    ).toContain(
      "255"
    );

    expect(
      card.style.background
    ).toContain(
      "0.2"
    );
  });

  it("supports short three-character hex colors", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        tint="#0f0"
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.background
    ).toContain(
      "255"
    );
  });

  it("falls back when an invalid tint is provided", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        tint="invalid"
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.background
    ).toContain(
      "143"
    );

    expect(
      card.style.background
    ).toContain(
      "115"
    );

    expect(
      card.style.background
    ).toContain(
      "255"
    );
  });

  it("applies custom border opacity", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        borderOpacity={0.5}
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.borderColor
    ).toContain(
      "0.5"
    );
  });

  it("applies custom glow configuration", () => {
    const { container } = render(
      <GlassCard
        data-testid="glass-card"
        glowColor="#00ff00"
        glow={40}
      >
        Content
      </GlassCard>
    );

    const card =
      screen.getByTestId("glass-card");

    expect(
      card.style.boxShadow
    ).toContain(
      "255"
    );

    const glow =
      container.querySelector(
        ".fb-glass-card__glow"
      ) as HTMLElement;

    expect(glow).toBeTruthy();

    expect(
      glow.style.background
    ).toBe(
      "rgb(0, 255, 0)"
    );

    expect(
      glow.style.filter
    ).toBe(
      "blur(40px)"
    );

    expect(glow).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("preserves custom inline styles", () => {
    render(
      <GlassCard
        data-testid="glass-card"
        style={{
          marginTop: "20px",
        }}
      >
        Content
      </GlassCard>
    );

    expect(
      screen.getByTestId("glass-card")
    ).toHaveStyle({
      marginTop: "20px",
    });
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <GlassCard>
        <h2>
          Accessible feature
        </h2>

        <p>
          Accessible card content.
        </p>
      </GlassCard>
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});