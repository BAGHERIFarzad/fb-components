import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { SpotlightCard } from "./SpotlightCard";

describe("SpotlightCard", () => {
  it("renders its default content", () => {
    render(<SpotlightCard />);

    expect(
      screen.getByText("FB")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Spotlight")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Move your pointer across the card/i
      )
    ).toBeInTheDocument();
  });

  it("renders custom children", () => {
    render(
      <SpotlightCard>
        <h2>Custom spotlight content</h2>
      </SpotlightCard>
    );

    expect(
      screen.getByRole("heading", {
        name: "Custom spotlight content",
      })
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <SpotlightCard className="custom-spotlight">
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    );

    expect(card).toHaveClass(
      "fb-spotlight-card",
      "custom-spotlight"
    );
  });

  it("applies custom radius and border opacity", () => {
    const { container } = render(
      <SpotlightCard
        radius={24}
        borderOpacity={0.4}
      >
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    expect(
      card.style.borderRadius
    ).toBe("24px");

    expect(
      card.style.borderColor
    ).toContain("0.4");
  });

  it("applies a custom spotlight color", () => {
    const { container } = render(
      <SpotlightCard
        background="#222222"
        spotlightColor="#ff0000"
      >
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    /*
      jsdom normalizes the 8-digit spotlight
      color into rgba() syntax.
    */
    expect(
      card.style.background
    ).toContain(
      "rgba(255, 0, 0, 0.35)"
    );
  });

  it("uses the initial spotlight position", () => {
    const { container } = render(
      <SpotlightCard>
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    expect(
      card.style.background
    ).toContain("50%");

    expect(
      card.style.background
    ).toContain("30%");
  });

  it("updates the spotlight position on mouse move", () => {
    const { container } = render(
      <SpotlightCard>
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    vi.spyOn(
      card,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 200,
      height: 100,
      top: 20,
      left: 10,
      right: 210,
      bottom: 120,
      x: 10,
      y: 20,
      toJSON: () => {},
    });

    fireEvent.mouseMove(card, {
      clientX: 110,
      clientY: 70,
    });

    /*
      x:
      ((110 - 10) / 200) * 100 = 50

      y:
      ((70 - 20) / 100) * 100 = 50
    */

    expect(
      card.style.background
    ).toContain(
      "circle at 50% 50%"
    );
  });

  it("calculates spotlight alpha from glow", () => {
    const { container } = render(
      <SpotlightCard
        spotlightColor="#ff0000"
        glow={50}
      >
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    /*
      glow = 50

      50 / 100 = 0.5

      hexAlpha() produces 80,
      and jsdom normalizes #ff000080
      to rgba(255, 0, 0, 0.5).
    */

    expect(
      card.style.background
    ).toContain(
      "rgba(255, 0, 0, 0.5)"
    );
  });

  it("clamps glow below zero", () => {
    const { container } = render(
      <SpotlightCard
        spotlightColor="#00ff00"
        glow={-50}
      >
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    /*
      Values below 0 are clamped to 0.
    */

    expect(
      card.style.background
    ).toContain(
      "rgba(0, 255, 0, 0)"
    );
  });

  it("clamps glow above one hundred", () => {
    const { container } = render(
      <SpotlightCard
        spotlightColor="#0000ff"
        glow={200}
      >
        Content
      </SpotlightCard>
    );

    const card = container.querySelector(
      ".fb-spotlight-card"
    ) as HTMLElement;

    /*
      Values above 100 are clamped to 100%.

      Fully opaque rgba() is normalized by
      jsdom to rgb().
    */

    expect(
      card.style.background
    ).toContain(
      "rgb(0, 0, 255)"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <SpotlightCard>
        <h2>
          Accessible spotlight card
        </h2>

        <p>
          Accessible spotlight content.
        </p>
      </SpotlightCard>
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});