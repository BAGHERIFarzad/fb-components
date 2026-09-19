import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import {
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { LivingWorldLanding } from "./LivingWorldLanding";

describe("LivingWorldLanding", () => {
  it("renders the default content", () => {
    render(
      <LivingWorldLanding />,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Build digital experiences that feel alive.",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("22+"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Beautiful by default"),
    ).toBeInTheDocument();
  });

  it("renders custom content", () => {
    render(
      <LivingWorldLanding
        eyebrow="NEW PLATFORM"
        title="Create something remarkable."
        description="A custom product experience."
        primaryLabel="Launch"
        secondaryLabel="Preview"
      />,
    );

    expect(
      screen.getByText("NEW PLATFORM"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Create something remarkable.",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Launch/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Preview/i,
      }),
    ).toBeInTheDocument();
  });

  it("calls the primary action", () => {
    const onPrimaryClick = vi.fn();

    render(
      <LivingWorldLanding
        onPrimaryClick={onPrimaryClick}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Start building/i,
      }),
    );

    expect(
      onPrimaryClick,
    ).toHaveBeenCalledTimes(1);
  });

  it("calls the secondary action", () => {
    const onSecondaryClick = vi.fn();

    render(
      <LivingWorldLanding
        onSecondaryClick={onSecondaryClick}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Explore components/i,
      }),
    );

    expect(
      onSecondaryClick,
    ).toHaveBeenCalledTimes(1);
  });

  it("renders custom stats and features", () => {
    render(
      <LivingWorldLanding
        stats={[
          {
            value: "99%",
            label: "Uptime",
          },
        ]}
        features={[
          {
            title: "Custom feature",
            description: "Custom description",
          },
        ]}
      />,
    );

    expect(
      screen.getByText("99%"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Uptime"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Custom feature"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Custom description"),
    ).toBeInTheDocument();
  });

  it("supports a custom class name", () => {
    const { container } = render(
      <LivingWorldLanding
        className="custom-landing"
      />,
    );

    expect(
      container.querySelector(
        ".fb-living-world.custom-landing",
      ),
    ).toBeTruthy();
  });
});