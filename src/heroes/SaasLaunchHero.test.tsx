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
import { SaasLaunchHero } from "./SaasLaunchHero";

describe("SaasLaunchHero", () => {
  it("renders the default content", () => {
    render(
      <SaasLaunchHero />
    );

    expect(
      screen.getByText(
        "BUILT FOR MODERN TEAMS"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Ship faster."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Scale smarter."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Everything your team needs to launch, learn and scale without adding unnecessary complexity."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Start free",
        }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "See demo",
        }
      )
    ).toBeInTheDocument();
  });

  it("renders custom textual content", () => {
    render(
      <SaasLaunchHero
        eyebrow="NEW PLATFORM"
        title="Build faster."
        description="Custom description"
        primaryLabel="Get started"
        secondaryLabel="Watch now"
      />
    );

    expect(
      screen.getByText(
        "NEW PLATFORM"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Build faster."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Custom description"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Get started",
        }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Watch now",
        }
      )
    ).toBeInTheDocument();
  });

  it("splits a multiline title into separate spans", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        title={
          "First line\nSecond line\nThird line"
        }
      />
    );

    const titleSpans =
      container.querySelectorAll(
        ".fb-saas-launch-hero__content h2 span"
      );

    expect(
      titleSpans
    ).toHaveLength(3);

    expect(
      titleSpans[0]
    ).toHaveTextContent(
      "First line"
    );

    expect(
      titleSpans[1]
    ).toHaveTextContent(
      "Second line"
    );

    expect(
      titleSpans[2]
    ).toHaveTextContent(
      "Third line"
    );
  });

  it("shows the secondary action by default", () => {
    render(
      <SaasLaunchHero />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "See demo",
        }
      )
    ).toBeInTheDocument();
  });

  it("hides the secondary action when showSecondary is false", () => {
    render(
      <SaasLaunchHero
        showSecondary={false}
      />
    );

    expect(
      screen.queryByRole(
        "button",
        {
          name: "See demo",
        }
      )
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Start free",
        }
      )
    ).toBeInTheDocument();
  });

  it("shows social proof by default", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero />
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__proof"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Trusted by product/i
      )
    ).toBeInTheDocument();
  });

  it("hides social proof when showProof is false", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        showProof={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__proof"
      )
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        /Trusted by product/i
      )
    ).not.toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        className="custom-hero"
      />
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero"
      )
    ).toHaveClass(
      "fb-saas-launch-hero",
      "custom-hero"
    );
  });

  it("forwards standard HTML attributes to the section", () => {
    render(
      <SaasLaunchHero
        id="launch-hero"
        data-testid="launch-hero"
        aria-label="Launch hero"
      />
    );

    const hero =
      screen.getByTestId(
        "launch-hero"
      );

    expect(
      hero
    ).toHaveAttribute(
      "id",
      "launch-hero"
    );

    expect(
      hero
    ).toHaveAttribute(
      "aria-label",
      "Launch hero"
    );
  });

  it("applies the custom background and CSS variables", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        accent="#ff0000"
        background="#123456"
        headlineSize={88}
      />
    );

    const hero =
      container.querySelector(
        ".fb-saas-launch-hero"
      ) as HTMLElement;

    expect(
      hero.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );

    expect(
      hero.style.getPropertyValue(
        "--fb-saas-accent"
      )
    ).toBe(
      "#ff0000"
    );

    expect(
      hero.style.getPropertyValue(
        "--fb-saas-headline-size"
      )
    ).toBe(
      "88px"
    );
  });

  it("merges a custom style object with component styles", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        background="#123456"
        style={{
          paddingTop:
            "40px",
          borderRadius:
            "20px",
        }}
      />
    );

    const hero =
      container.querySelector(
        ".fb-saas-launch-hero"
      ) as HTMLElement;

    expect(
      hero.style.paddingTop
    ).toBe(
      "40px"
    );

    expect(
      hero.style.borderRadius
    ).toBe(
      "20px"
    );

    expect(
      hero.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("lets component background override background supplied through style", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        background="#123456"
        style={{
          background:
            "#ffffff",
        }}
      />
    );

    const hero =
      container.querySelector(
        ".fb-saas-launch-hero"
      ) as HTMLElement;

    expect(
      hero.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("renders both action buttons with type button", () => {
    render(
      <SaasLaunchHero />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Start free",
        }
      )
    ).toHaveAttribute(
      "type",
      "button"
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "See demo",
        }
      )
    ).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("renders the visual metrics", () => {
    render(
      <SaasLaunchHero />
    );

    expect(
      screen.getByText(
        "ACTIVE USERS"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "42,891"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "+18.4%"
      )
    ).toBeInTheDocument();
  });

  it("renders seven visual bars with the expected heights", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero />
    );

    const bars =
      container.querySelectorAll(
        ".fb-saas-launch-hero__bars span"
      );

    expect(
      bars
    ).toHaveLength(7);

    const expectedHeights = [
      "42%",
      "64%",
      "51%",
      "76%",
      "68%",
      "88%",
      "72%",
    ];

    bars.forEach(
      (
        bar,
        index
      ) => {
        expect(
          (
            bar as HTMLElement
          ).style.height
        ).toBe(
          expectedHeights[
            index
          ]
        );
      }
    );
  });

  it("marks decorative visual elements as hidden from assistive technology", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero />
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__glow"
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__visual"
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__proof > div"
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("supports hiding both optional sections at the same time", () => {
    const {
      container,
    } = render(
      <SaasLaunchHero
        showSecondary={false}
        showProof={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__secondary"
      )
    ).not.toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-saas-launch-hero__proof"
      )
    ).not.toBeInTheDocument();
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } = render(
      <SaasLaunchHero />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});