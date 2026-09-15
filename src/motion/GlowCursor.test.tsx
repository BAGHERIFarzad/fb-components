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

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { GlowCursor } from "./GlowCursor";

describe("GlowCursor", () => {
  it("renders custom children", () => {
    render(
      <GlowCursor>
        <h2>Interactive area</h2>
      </GlowCursor>
    );

    expect(
      screen.getByRole("heading", {
        name: "Interactive area",
      })
    ).toBeInTheDocument();
  });

  it("renders the base component structure", () => {
    const {
      container,
    } =
      render(
        <GlowCursor>
          Content
        </GlowCursor>
      );

    expect(
      container.querySelector(
        ".fb-glow-cursor"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-glow-cursor__glow"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-glow-cursor__content"
      )
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          className="custom-glow-cursor"
        >
          Content
        </GlowCursor>
      );

    expect(
      container.querySelector(
        ".fb-glow-cursor"
      )
    ).toHaveClass(
      "fb-glow-cursor",
      "custom-glow-cursor"
    );
  });

  it("starts the glow at the initial zero position", () => {
    const {
      container,
    } =
      render(
        <GlowCursor>
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.left
    ).toBe(
      "0px"
    );

    expect(
      glow.style.top
    ).toBe(
      "0px"
    );
  });

  it("tracks the pointer relative to the container", () => {
    const {
      container,
    } =
      render(
        <GlowCursor>
          Content
        </GlowCursor>
      );

    const root =
      container.querySelector(
        ".fb-glow-cursor"
      ) as HTMLElement;

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 300,
      height: 200,
      top: 40,
      left: 20,
      right: 320,
      bottom: 240,
      x: 20,
      y: 40,
      toJSON: () => {},
    });

    fireEvent.mouseMove(
      root,
      {
        clientX: 170,
        clientY: 140,
      }
    );

    /*
      x = 170 - 20 = 150
      y = 140 - 40 = 100
    */

    expect(
      glow.style.left
    ).toBe(
      "150px"
    );

    expect(
      glow.style.top
    ).toBe(
      "100px"
    );
  });

  it("updates the glow position after multiple mouse moves", () => {
    const {
      container,
    } =
      render(
        <GlowCursor>
          Content
        </GlowCursor>
      );

    const root =
      container.querySelector(
        ".fb-glow-cursor"
      ) as HTMLElement;

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 400,
      height: 300,
      top: 10,
      left: 10,
      right: 410,
      bottom: 310,
      x: 10,
      y: 10,
      toJSON: () => {},
    });

    fireEvent.mouseMove(
      root,
      {
        clientX: 60,
        clientY: 80,
      }
    );

    expect(
      glow.style.left
    ).toBe(
      "50px"
    );

    expect(
      glow.style.top
    ).toBe(
      "70px"
    );

    fireEvent.mouseMove(
      root,
      {
        clientX: 210,
        clientY: 160,
      }
    );

    expect(
      glow.style.left
    ).toBe(
      "200px"
    );

    expect(
      glow.style.top
    ).toBe(
      "150px"
    );
  });

  it("applies custom size values", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          size={180}
        >
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.width
    ).toBe(
      "180px"
    );

    expect(
      glow.style.height
    ).toBe(
      "180px"
    );
  });

  it("applies a custom glow color", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          color="#ff0000"
        >
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.background
    ).toBe(
      "rgb(255, 0, 0)"
    );
  });

  it("applies custom blur", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          blur={48}
        >
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.filter
    ).toBe(
      "blur(48px)"
    );
  });

  it("applies custom opacity", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          opacity={0.7}
        >
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.opacity
    ).toBe(
      "0.7"
    );
  });

  it("applies the follow speed as transition duration", () => {
    const {
      container,
    } =
      render(
        <GlowCursor
          followSpeed={0.3}
        >
          Content
        </GlowCursor>
      );

    const glow =
      container.querySelector(
        ".fb-glow-cursor__glow"
      ) as HTMLElement;

    expect(
      glow.style.transitionDuration
    ).toBe(
      "0.3s"
    );
  });

  it("supports empty children", () => {
    const {
      container,
    } =
      render(
        <GlowCursor />
      );

    expect(
      container.querySelector(
        ".fb-glow-cursor__content"
      )
    ).toBeEmptyDOMElement();
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <GlowCursor>
          <button type="button">
            Interactive content
          </button>
        </GlowCursor>
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});