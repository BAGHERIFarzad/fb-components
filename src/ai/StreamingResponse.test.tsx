import {
  act,
  render,
  screen,
} from "@testing-library/react";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { StreamingResponse } from "./StreamingResponse";

describe("StreamingResponse", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
	  act(() => {
		vi.runOnlyPendingTimers();
	  });

	  vi.useRealTimers();
	  vi.restoreAllMocks();
	});

  it("renders the default status", () => {
    render(
      <StreamingResponse />
    );

    expect(
      screen.getByText(
        "GENERATING"
      )
    ).toBeInTheDocument();
  });

  it("starts with no streamed text", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="Hello"
        />
      );

    const paragraph =
      container.querySelector(
        ".fb-streaming-response p"
      );

    expect(
      paragraph?.textContent
    ).toBe("");
  });

  it("streams one character per interval", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="ABC"
          speed={20}
        />
      );

    const paragraph =
      container.querySelector(
        ".fb-streaming-response p"
      );

    act(() => {
      vi.advanceTimersByTime(
        20
      );
    });

    expect(
      paragraph?.textContent
    ).toBe("A");

    act(() => {
      vi.advanceTimersByTime(
        20
      );
    });

    expect(
      paragraph?.textContent
    ).toBe("AB");

    act(() => {
      vi.advanceTimersByTime(
        20
      );
    });

    expect(
      paragraph?.textContent
    ).toBe("ABC");
  });

  it("shows COMPLETE when streaming finishes", () => {
    render(
      <StreamingResponse
        text="ABC"
        speed={10}
      />
    );

    expect(
      screen.getByText(
        "GENERATING"
      )
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(
        30
      );
    });

    expect(
      screen.getByText(
        "COMPLETE"
      )
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        "GENERATING"
      )
    ).not.toBeInTheDocument();
  });

  it("uses the custom status label while generating", () => {
    render(
      <StreamingResponse
        text="Hello"
        statusLabel="THINKING"
      />
    );

    expect(
      screen.getByText(
        "THINKING"
      )
    ).toBeInTheDocument();
  });

  it("adds the complete class to the status indicator when finished", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="A"
          speed={10}
        />
      );

    const indicator =
      container.querySelector(
        ".fb-streaming-response__status span"
      );

    expect(
      indicator
    ).not.toHaveClass(
      "is-complete"
    );

    act(() => {
      vi.advanceTimersByTime(
        10
      );
    });

    expect(
      indicator
    ).toHaveClass(
      "is-complete"
    );
  });

  it("renders the cursor while streaming", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="Hello"
        />
      );

    expect(
      container.querySelector(
        ".fb-streaming-response__cursor"
      )
    ).toBeInTheDocument();
  });

  it("removes the cursor after completion", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="AB"
          speed={10}
        />
      );

    expect(
      container.querySelector(
        ".fb-streaming-response__cursor"
      )
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(
        20
      );
    });

    expect(
      container.querySelector(
        ".fb-streaming-response__cursor"
      )
    ).not.toBeInTheDocument();
  });

  it("can hide the cursor", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="Hello"
          showCursor={false}
        />
      );

    expect(
      container.querySelector(
        ".fb-streaming-response__cursor"
      )
    ).not.toBeInTheDocument();
  });

  it("can hide the status", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          showStatus={false}
        />
      );

    expect(
      container.querySelector(
        ".fb-streaming-response__status"
      )
    ).not.toBeInTheDocument();
  });

  it("uses a minimum interval speed of five milliseconds", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="AB"
          speed={1}
        />
      );

    const paragraph =
      container.querySelector(
        ".fb-streaming-response p"
      );

    act(() => {
      vi.advanceTimersByTime(
        4
      );
    });

    expect(
      paragraph?.textContent
    ).toBe("");

    act(() => {
      vi.advanceTimersByTime(
        1
      );
    });

    expect(
      paragraph?.textContent
    ).toBe("A");
  });

  it("handles empty text without starting streaming", () => {
    const setIntervalSpy =
      vi.spyOn(
        window,
        "setInterval"
      );

    const {
      container,
    } =
      render(
        <StreamingResponse
          text=""
        />
      );

    expect(
      setIntervalSpy
    ).not.toHaveBeenCalled();

    expect(
      container.querySelector(
        ".fb-streaming-response p"
      )?.textContent
    ).toBe("");

    expect(
      screen.getByText(
        "COMPLETE"
      )
    ).toBeInTheDocument();
  });

  it("resets streaming when the text changes", () => {
    const {
      container,
      rerender,
    } =
      render(
        <StreamingResponse
          text="First"
          speed={10}
        />
      );

    act(() => {
      vi.advanceTimersByTime(
        20
      );
    });

    expect(
      container.querySelector(
        ".fb-streaming-response p"
      )?.textContent
    ).toBe("Fi");

    rerender(
      <StreamingResponse
        text="Second"
        speed={10}
      />
    );

    expect(
      container.querySelector(
        ".fb-streaming-response p"
      )?.textContent
    ).toBe("");

    act(() => {
      vi.advanceTimersByTime(
        10
      );
    });

    expect(
      container.querySelector(
        ".fb-streaming-response p"
      )?.textContent
    ).toBe("S");
  });

  it("clears the interval when unmounted", () => {
    const clearIntervalSpy =
      vi.spyOn(
        window,
        "clearInterval"
      );

    const {
      unmount,
    } =
      render(
        <StreamingResponse
          text="Hello"
          speed={20}
        />
      );

    unmount();

    expect(
      clearIntervalSpy
    ).toHaveBeenCalled();
  });

  it("applies custom visual properties", () => {
    render(
      <StreamingResponse
        data-testid="streaming-response"
        accent="#ff00ff"
        textColor="#00ff00"
      />
    );

    const response =
      screen.getByTestId(
        "streaming-response"
      );

    expect(
      response.style.color
    ).toBe(
      "rgb(0, 255, 0)"
    );

    expect(
      response.style.getPropertyValue(
        "--fb-streaming-accent"
      )
    ).toBe(
      "#ff00ff"
    );
  });

  it("applies a custom class name", () => {
    render(
      <StreamingResponse
        data-testid="streaming-response"
        className="custom-streaming"
      />
    );

    expect(
      screen.getByTestId(
        "streaming-response"
      )
    ).toHaveClass(
      "fb-streaming-response",
      "custom-streaming"
    );
  });

  it("forwards HTML attributes", () => {
    render(
      <StreamingResponse
        data-testid="streaming-response"
        title="AI response"
      />
    );

    expect(
      screen.getByTestId(
        "streaming-response"
      )
    ).toHaveAttribute(
      "title",
      "AI response"
    );
  });

  it("always exposes a polite live region", () => {
    render(
      <StreamingResponse
        data-testid="streaming-response"
      />
    );

    expect(
      screen.getByTestId(
        "streaming-response"
      )
    ).toHaveAttribute(
      "aria-live",
      "polite"
    );
  });

  it("preserves custom inline styles", () => {
    render(
      <StreamingResponse
        data-testid="streaming-response"
        style={{
          marginTop:
            "24px",
        }}
      />
    );

    expect(
      screen.getByTestId(
        "streaming-response"
      )
    ).toHaveStyle({
      marginTop:
        "24px",
    });
  });

  it("marks decorative status and cursor elements as hidden from assistive technology", () => {
    const {
      container,
    } =
      render(
        <StreamingResponse
          text="Hello"
        />
      );

    const statusIndicator =
      container.querySelector(
        ".fb-streaming-response__status span"
      );

    const cursor =
      container.querySelector(
        ".fb-streaming-response__cursor"
      );

    expect(
      statusIndicator
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    expect(
      cursor
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("has no obvious accessibility violations", async () => {
	  /*
		axe-core relies on real timers internally.

		The rest of this test suite uses fake timers
		to test the streaming interval deterministically,
		to test the streaming interval deterministically,
		so we temporarily switch back to real timers.

		text="" is intentional here because it prevents
		StreamingResponse from starting an interval.
	  */
	  vi.useRealTimers();

	  const {
		container,
	  } =
		render(
		  <StreamingResponse
			text=""
			aria-label="AI streaming response"
		  />
		);

	  await expectNoAccessibilityViolations(
		container
	  );

	  /*
		Restore fake timers because the suite's
		afterEach cleanup expects them.
	  */
	  vi.useFakeTimers();
	});
});