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
import { BlurReveal } from "./BlurReveal";

describe("BlurReveal", () => {
  it("renders its default content", () => {
    const {
      container,
    } =
      render(
        <BlurReveal />
      );

    const reveal =
      container.querySelector(
        ".fb-blur-reveal"
      );

    expect(
      reveal
    ).toBeInTheDocument();

    expect(
      reveal
    ).toHaveTextContent(
      "Interfacesworthremembering."
    );
  });

  it("renders custom children", () => {
    render(
      <BlurReveal>
        Premium reveal
      </BlurReveal>
    );

    expect(
      screen.getByText(
        "Premium reveal"
      )
    ).toBeInTheDocument();
  });

  it("applies the base component class", () => {
    const {
      container,
    } =
      render(
        <BlurReveal>
          Content
        </BlurReveal>
      );

    expect(
      container.querySelector(
        ".fb-blur-reveal"
      )
    ).toHaveClass(
      "fb-blur-reveal"
    );
  });

  it("applies a custom class name", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        className="custom-blur-reveal"
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      )
    ).toHaveClass(
      "fb-blur-reveal",
      "custom-blur-reveal"
    );
  });

  it("does not use the repeat class by default", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      )
    ).not.toHaveClass(
      "fb-blur-reveal--repeat"
    );
  });

  it("applies the repeat class when repeat is enabled", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        repeat
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      )
    ).toHaveClass(
      "fb-blur-reveal",
      "fb-blur-reveal--repeat"
    );
  });

  it("applies a custom text color", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        color="#ff0000"
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      ).style.color
    ).toBe(
      "rgb(255, 0, 0)"
    );
  });

  it("applies a custom font size", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        fontSize={64}
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      ).style.fontSize
    ).toBe(
      "64px"
    );
  });

  it("applies the blur CSS variable", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        blur={20}
      >
        Content
      </BlurReveal>
    );

    const reveal =
      screen.getByTestId(
        "blur-reveal"
      );

    expect(
      reveal.style.getPropertyValue(
        "--fb-blur-reveal-blur"
      )
    ).toBe(
      "20px"
    );
  });

  it("applies the distance CSS variable", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        distance={32}
      >
        Content
      </BlurReveal>
    );

    const reveal =
      screen.getByTestId(
        "blur-reveal"
      );

    expect(
      reveal.style.getPropertyValue(
        "--fb-blur-reveal-distance"
      )
    ).toBe(
      "32px"
    );
  });

  it("applies the duration CSS variable", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        duration={1.4}
      >
        Content
      </BlurReveal>
    );

    const reveal =
      screen.getByTestId(
        "blur-reveal"
      );

    expect(
      reveal.style.getPropertyValue(
        "--fb-blur-reveal-duration"
      )
    ).toBe(
      "1.4s"
    );
  });

  it("forwards HTML attributes", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        aria-label="Animated reveal text"
        title="Reveal title"
      >
        Content
      </BlurReveal>
    );

    const reveal =
      screen.getByTestId(
        "blur-reveal"
      );

    expect(
      reveal
    ).toHaveAttribute(
      "aria-label",
      "Animated reveal text"
    );

    expect(
      reveal
    ).toHaveAttribute(
      "title",
      "Reveal title"
    );
  });

  it("preserves custom inline styles", () => {
    render(
      <BlurReveal
        data-testid="blur-reveal"
        style={{
          marginTop:
            "24px",
        }}
      >
        Content
      </BlurReveal>
    );

    expect(
      screen.getByTestId(
        "blur-reveal"
      )
    ).toHaveStyle({
      marginTop:
        "24px",
    });
  });

  it("supports React node children", () => {
    render(
      <BlurReveal>
        <span>
          First
        </span>

        <strong>
          Second
        </strong>
      </BlurReveal>
    );

    expect(
      screen.getByText(
        "First"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Second"
      )
    ).toBeInTheDocument();
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <BlurReveal>
          Accessible blur reveal
        </BlurReveal>
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});