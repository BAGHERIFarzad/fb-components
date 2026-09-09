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
import { RevealText } from "./RevealText";

describe("RevealText", () => {
  it("renders its default content", () => {
    const {
      container,
    } =
      render(
        <RevealText />
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      );

    expect(
      reveal
    ).toBeInTheDocument();

    expect(
      reveal
    ).toHaveTextContent(
      "Buildbetterinterfaces"
    );
  });

  it("renders custom children", () => {
    render(
      <RevealText>
        Premium interface
      </RevealText>
    );

    expect(
      screen.getByText(
        "Premium interface"
      )
    ).toBeInTheDocument();
  });

  it("applies the default component class", () => {
    const {
      container,
    } =
      render(
        <RevealText>
          Content
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      );

    expect(
      reveal
    ).toHaveClass(
      "fb-reveal-text"
    );
  });

  it("applies a custom class name", () => {
    const {
      container,
    } =
      render(
        <RevealText
          className="custom-reveal"
        >
          Content
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      );

    expect(
      reveal
    ).toHaveClass(
      "fb-reveal-text",
      "custom-reveal"
    );
  });

  it("applies custom font size", () => {
    const {
      container,
    } =
      render(
        <RevealText
          fontSize={64}
        >
          Content
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.fontSize
    ).toBe(
      "64px"
    );
  });

  it("applies custom line height", () => {
    const {
      container,
    } =
      render(
        <RevealText
          lineHeight={1.2}
        >
          Content
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.lineHeight
    ).toBe(
      "1.2"
    );
  });

  it("applies custom animation duration", () => {
    const {
      container,
    } =
      render(
        <RevealText
          duration={1.25}
        >
          Content
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.animationDuration
    ).toBe(
      "1.25s"
    );
  });

  it("uppercases text by default", () => {
    const {
      container,
    } =
      render(
        <RevealText>
          Interface
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.textTransform
    ).toBe(
      "uppercase"
    );
  });

  it("can disable uppercase transformation", () => {
    const {
      container,
    } =
      render(
        <RevealText
          uppercase={false}
        >
          Interface
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.textTransform
    ).toBe(
      "none"
    );
  });

  it("creates a gradient background from color and accent", () => {
    const {
      container,
    } =
      render(
        <RevealText
          color="#ff0000"
          accent="#00ff00"
        >
          Gradient
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    /*
      jsdom may normalize CSS colors from
      hexadecimal values to rgb() syntax.

      We therefore test the semantic gradient
      output rather than requiring the original
      literal hex representation.
    */

    expect(
      reveal.style.background
    ).toContain(
      "linear-gradient"
    );

    expect(
      reveal.style.background
    ).toContain(
      "255, 0, 0"
    );

    expect(
      reveal.style.background
    ).toContain(
      "0, 255, 0"
    );
  });

  it("uses text background clipping", () => {
    const {
      container,
    } =
      render(
        <RevealText>
          Clipped text
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.backgroundClip
    ).toBe(
      "text"
    );

    /*
      We intentionally do not assert
      WebkitBackgroundClip here.

      jsdom may discard vendor-prefixed CSS
      properties even though the component
      correctly provides them for real browsers.
    */
  });

  it("makes the text color transparent for gradient text", () => {
    const {
      container,
    } =
      render(
        <RevealText>
          Gradient text
        </RevealText>
      );

    const reveal =
      container.querySelector(
        ".fb-reveal-text"
      ) as HTMLElement;

    expect(
      reveal.style.color
    ).toBe(
      "transparent"
    );
  });

  it("supports React node children", () => {
    render(
      <RevealText>
        <span>
          First
        </span>

        <strong>
          Second
        </strong>
      </RevealText>
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
        <RevealText>
          Accessible reveal text
        </RevealText>
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});