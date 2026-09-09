import {
  act,
  render,
  screen,
} from "@testing-library/react";

import {
  afterEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { AnimatedCounter } from "./AnimatedCounter";

type FrameCallback =
  | FrameRequestCallback
  | null;

describe("AnimatedCounter", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  function setupAnimation() {
    let callback: FrameCallback =
      null;

    let frameId = 0;

    const requestAnimationFrameMock =
      vi.fn(
        (
          nextCallback:
            FrameRequestCallback
        ) => {
          callback =
            nextCallback;

          frameId += 1;

          return frameId;
        }
      );

    const cancelAnimationFrameMock =
      vi.fn();

    vi.stubGlobal(
      "requestAnimationFrame",
      requestAnimationFrameMock
    );

    vi.stubGlobal(
      "cancelAnimationFrame",
      cancelAnimationFrameMock
    );

    vi.spyOn(
      performance,
      "now"
    ).mockReturnValue(0);

    function runFrame(
      time: number
    ) {
      const current =
        callback;

      if (!current) {
        throw new Error(
          "No animation frame callback was scheduled."
        );
      }

      act(() => {
        current(time);
      });
    }

    return {
      runFrame,
      requestAnimationFrameMock,
      cancelAnimationFrameMock,
    };
  }

  it("renders its default content", () => {
    setupAnimation();

    render(
      <AnimatedCounter />
    );

    expect(
      screen.getByText(
        "ACTIVE USERS"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "+18.4%"
      )
    ).toBeInTheDocument();
  });

  it("starts from zero before the first animation frame", () => {
    setupAnimation();

    render(
      <AnimatedCounter
        value={100}
        suffix=""
      />
    );

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
      counter?.textContent
    ).toBe("0");
  });

  it("animates using the cubic easing calculation", () => {
    const {
      runFrame,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={100}
        duration={1}
        decimals={1}
        suffix=""
      />
    );

    /*
      At 500ms with a 1-second duration:

      progress = 0.5

      eased =
        1 - (1 - 0.5)^3
        = 1 - 0.125
        = 0.875

      displayed =
        100 * 0.875
        = 87.5
    */

    runFrame(500);

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
	  counter?.textContent
	).toMatch(
	  /87[.,]5/
	);
  });

  it("finishes at the target value", () => {
    const {
      runFrame,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={250}
        duration={1}
        suffix=""
      />
    );

    runFrame(1000);

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
      counter?.textContent
    ).toContain(
      "250"
    );
  });

  it("applies prefix and suffix", () => {
    const {
      runFrame,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={42}
        duration={1}
        prefix="$"
        suffix="M"
      />
    );

    runFrame(1000);

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
      counter?.textContent
    ).toContain("$");

    expect(
      counter?.textContent
    ).toContain("42");

    expect(
      counter?.textContent
    ).toContain("M");
  });

  it("respects the decimals prop", () => {
    const {
      runFrame,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={12.345}
        duration={1}
        decimals={2}
        suffix=""
      />
    );

    runFrame(1000);

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
      counter?.textContent
    ).toMatch(
      /12[.,]35/
    );
  });

  it("renders a custom label and delta", () => {
    setupAnimation();

    render(
      <AnimatedCounter
        label="MONTHLY REVENUE"
        delta="+24.6%"
      />
    );

    expect(
      screen.getByText(
        "MONTHLY REVENUE"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "+24.6%"
      )
    ).toBeInTheDocument();
  });

  it("does not render the delta when it is empty", () => {
    setupAnimation();

    const {
      container,
    } =
      render(
        <AnimatedCounter
          delta=""
        />
      );

    expect(
      container.querySelector(
        ".fb-animated-counter small"
      )
    ).not.toBeInTheDocument();
  });

  it("applies custom colors and font size", () => {
    setupAnimation();

    render(
      <AnimatedCounter
        data-testid="counter"
        color="#ff0000"
        accent="#00ff00"
        fontSize={96}
      />
    );

    const counter =
      screen.getByTestId(
        "counter"
      );

    expect(
      counter.style.color
    ).toBe(
      "rgb(255, 0, 0)"
    );

    expect(
      counter.style.getPropertyValue(
        "--fb-counter-accent"
      )
    ).toBe(
      "#00ff00"
    );

    expect(
      counter.style.getPropertyValue(
        "--fb-counter-size"
      )
    ).toBe(
      "96px"
    );
  });

  it("applies a custom class name", () => {
    setupAnimation();

    render(
      <AnimatedCounter
        data-testid="counter"
        className="custom-counter"
      />
    );

    expect(
      screen.getByTestId(
        "counter"
      )
    ).toHaveClass(
      "fb-animated-counter",
      "custom-counter"
    );
  });

  it("forwards HTML attributes and preserves custom styles", () => {
    setupAnimation();

    render(
      <AnimatedCounter
        data-testid="counter"
        aria-label="Active user count"
        title="Users"
        style={{
          marginTop:
            "20px",
        }}
      />
    );

    const counter =
      screen.getByTestId(
        "counter"
      );

    expect(
      counter
    ).toHaveAttribute(
      "aria-label",
      "Active user count"
    );

    expect(
      counter
    ).toHaveAttribute(
      "title",
      "Users"
    );

    expect(
      counter
    ).toHaveStyle({
      marginTop:
        "20px",
    });
  });

  it("uses a minimum animation duration for zero duration", () => {
    const {
      runFrame,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={100}
        duration={0}
        suffix=""
      />
    );

    /*
      duration is clamped internally
      to at least 0.01 seconds,
      which equals 10ms.
    */

    runFrame(10);

    const counter =
      document.querySelector(
        ".fb-animated-counter strong"
      );

    expect(
      counter?.textContent
    ).toContain(
      "100"
    );
  });

  it("requests another frame while the animation is incomplete", () => {
    const {
      runFrame,
      requestAnimationFrameMock,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={100}
        duration={1}
      />
    );

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      1
    );

    runFrame(500);

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      2
    );
  });

  it("does not request another frame after reaching completion", () => {
    const {
      runFrame,
      requestAnimationFrameMock,
    } =
      setupAnimation();

    render(
      <AnimatedCounter
        value={100}
        duration={1}
      />
    );

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      1
    );

    runFrame(1000);

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      1
    );
  });

  it("cancels the scheduled animation frame when unmounted", () => {
    const {
      cancelAnimationFrameMock,
    } =
      setupAnimation();

    const {
      unmount,
    } =
      render(
        <AnimatedCounter />
      );

    unmount();

    expect(
      cancelAnimationFrameMock
    ).toHaveBeenCalledTimes(
      1
    );

    expect(
      cancelAnimationFrameMock
    ).toHaveBeenCalledWith(
      1
    );
  });

  it("restarts the animation when the value changes", () => {
    const {
      requestAnimationFrameMock,
    } =
      setupAnimation();

    const {
      rerender,
    } =
      render(
        <AnimatedCounter
          value={100}
        />
      );

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      1
    );

    rerender(
      <AnimatedCounter
        value={200}
      />
    );

    expect(
      requestAnimationFrameMock
    ).toHaveBeenCalledTimes(
      2
    );
  });

  it("has no obvious accessibility violations", async () => {
    setupAnimation();

    const {
      container,
    } =
      render(
        <AnimatedCounter
          aria-label="Active users"
        />
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});