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
import { StartupLanding } from "./StartupLanding";

describe("StartupLanding", () => {
  it("renders the default navigation and hero content", () => {
    render(
      <StartupLanding />
    );

    expect(
      screen.getByText(
        "ACME."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "link",
        {
          name: "Product",
        }
      )
    ).toHaveAttribute(
      "href",
      "#product"
    );

    expect(
      screen.getByRole(
        "link",
        {
          name: "Features",
        }
      )
    ).toHaveAttribute(
      "href",
      "#features"
    );

    expect(
      screen.getByRole(
        "link",
        {
          name: "Pricing",
        }
      )
    ).toHaveAttribute(
      "href",
      "#pricing"
    );

    expect(
      screen.getByText(
        "LAUNCHING 2026"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /From idea/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /A focused operating layer/i
      )
    ).toBeInTheDocument();
  });

  it("renders both default action buttons", () => {
    render(
      <StartupLanding />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Join waitlist",
        }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Get early access",
        }
      )
    ).toBeInTheDocument();
  });

  it("uses button type button for both actions", () => {
    render(
      <StartupLanding />
    );

    expect(
      screen.getByRole(
        "button",
        {
          name: "Join waitlist",
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
          name: "Get early access",
        }
      )
    ).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("renders metrics by default", () => {
    render(
      <StartupLanding />
    );

    expect(
      screen.getByText(
        "42K"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Early users"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "4.9"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Average rating"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "99.9%"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Platform uptime"
      )
    ).toBeInTheDocument();
  });

  it("renders exactly three metric articles", () => {
    const {
      container,
    } = render(
      <StartupLanding />
    );

    expect(
      container.querySelectorAll(
        ".fb-startup-landing__metrics article"
      )
    ).toHaveLength(3);
  });

  it("hides metrics when showMetrics is false", () => {
    const {
      container,
    } = render(
      <StartupLanding
        showMetrics={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-startup-landing__metrics"
      )
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        "Early users"
      )
    ).not.toBeInTheDocument();
  });

  it("renders features by default", () => {
    render(
      <StartupLanding />
    );

    expect(
      screen.getByRole(
        "heading",
        {
          name: "Ship",
          level: 3,
        }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "heading",
        {
          name: "Measure",
          level: 3,
        }
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole(
        "heading",
        {
          name: "Scale",
          level: 3,
        }
      )
    ).toBeInTheDocument();
  });

  it("renders exactly three feature articles", () => {
    const {
      container,
    } = render(
      <StartupLanding />
    );

    expect(
      container.querySelectorAll(
        ".fb-startup-landing__features article"
      )
    ).toHaveLength(3);
  });

  it("renders feature numbering correctly", () => {
    const {
      container,
    } = render(
      <StartupLanding />
    );

    const featureNumbers =
      container.querySelectorAll(
        ".fb-startup-landing__features article > span"
      );

    expect(
      featureNumbers
    ).toHaveLength(3);

    expect(
      featureNumbers[0]
    ).toHaveTextContent(
      "01"
    );

    expect(
      featureNumbers[1]
    ).toHaveTextContent(
      "02"
    );

    expect(
      featureNumbers[2]
    ).toHaveTextContent(
      "03"
    );
  });

  it("uses the features section id expected by the navigation link", () => {
    const {
      container,
    } = render(
      <StartupLanding />
    );

    expect(
      container.querySelector(
        ".fb-startup-landing__features"
      )
    ).toHaveAttribute(
      "id",
      "features"
    );
  });

  it("hides features when showFeatures is false", () => {
    const {
      container,
    } = render(
      <StartupLanding
        showFeatures={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-startup-landing__features"
      )
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole(
        "heading",
        {
          name: "Ship",
          level: 3,
        }
      )
    ).not.toBeInTheDocument();
  });

  it("supports hiding both optional sections at the same time", () => {
    const {
      container,
    } = render(
      <StartupLanding
        showMetrics={false}
        showFeatures={false}
      />
    );

    expect(
      container.querySelector(
        ".fb-startup-landing__metrics"
      )
    ).not.toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-startup-landing__features"
      )
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole(
        "button",
        {
          name: "Get early access",
        }
      )
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const {
      container,
    } = render(
      <StartupLanding
        className="custom-startup"
      />
    );

    expect(
      container.querySelector(
        ".fb-startup-landing"
      )
    ).toHaveClass(
      "fb-startup-landing",
      "custom-startup"
    );
  });

  it("forwards standard HTML attributes to the section", () => {
    render(
      <StartupLanding
        id="startup-page"
        data-testid="startup-page"
        aria-label="Startup landing"
      />
    );

    const root =
      screen.getByTestId(
        "startup-page"
      );

    expect(
      root
    ).toHaveAttribute(
      "id",
      "startup-page"
    );

    expect(
      root
    ).toHaveAttribute(
      "aria-label",
      "Startup landing"
    );
  });

  it("applies custom background and CSS variables", () => {
    const {
      container,
    } = render(
      <StartupLanding
        accent="#ff0000"
        background="#123456"
        radius={28}
      />
    );

    const root =
      container.querySelector(
        ".fb-startup-landing"
      ) as HTMLElement;

    expect(
      root.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );

    expect(
      root.style.getPropertyValue(
        "--fb-startup-accent"
      )
    ).toBe(
      "#ff0000"
    );

    expect(
      root.style.getPropertyValue(
        "--fb-startup-radius"
      )
    ).toBe(
      "28px"
    );
  });

  it("supports zero radius", () => {
    const {
      container,
    } = render(
      <StartupLanding
        radius={0}
      />
    );

    const root =
      container.querySelector(
        ".fb-startup-landing"
      ) as HTMLElement;

    expect(
      root.style.getPropertyValue(
        "--fb-startup-radius"
      )
    ).toBe(
      "0px"
    );
  });

  it("merges custom inline styles with component styles", () => {
    const {
      container,
    } = render(
      <StartupLanding
        style={{
          paddingTop:
            "32px",
          minHeight:
            "600px",
        }}
      />
    );

    const root =
      container.querySelector(
        ".fb-startup-landing"
      ) as HTMLElement;

    expect(
      root.style.paddingTop
    ).toBe(
      "32px"
    );

    expect(
      root.style.minHeight
    ).toBe(
      "600px"
    );
  });

  it("lets the background prop override background from style", () => {
    const {
      container,
    } = render(
      <StartupLanding
        background="#123456"
        style={{
          background:
            "#ffffff",
        }}
      />
    );

    const root =
      container.querySelector(
        ".fb-startup-landing"
      ) as HTMLElement;

    expect(
      root.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } = render(
      <StartupLanding />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});