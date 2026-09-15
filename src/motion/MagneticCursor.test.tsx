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
import { MagneticCursor } from "./MagneticCursor";

describe("MagneticCursor", () => {
  it("renders custom children", () => {
    render(
      <MagneticCursor>
        <button type="button">
          Explore
        </button>
      </MagneticCursor>
    );

    expect(
      screen.getByRole("button", {
        name: "Explore",
      })
    ).toBeInTheDocument();
  });

  it("renders the base component structure", () => {
    const {
      container,
    } =
      render(
        <MagneticCursor>
          Content
        </MagneticCursor>
      );

    expect(
      container.querySelector(
        ".fb-magnetic-cursor"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-magnetic-cursor__content"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-magnetic-cursor__ring"
      )
    ).toBeInTheDocument();

    expect(
      container.querySelector(
        ".fb-magnetic-cursor__dot"
      )
    ).toBeInTheDocument();
  });

  it("applies a custom class name", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
        className="custom-magnetic-cursor"
      >
        Content
      </MagneticCursor>
    );

    expect(
      screen.getByTestId(
        "magnetic-cursor"
      )
    ).toHaveClass(
      "fb-magnetic-cursor",
      "custom-magnetic-cursor"
    );
  });

  it("hides the native cursor", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
      >
        Content
      </MagneticCursor>
    );

    expect(
      screen.getByTestId(
        "magnetic-cursor"
      ).style.cursor
    ).toBe(
      "none"
    );
  });

  it("starts with ring and dot hidden", () => {
    const {
      container,
    } =
      render(
        <MagneticCursor>
          Content
        </MagneticCursor>
      );

    const ring =
      container.querySelector(
        ".fb-magnetic-cursor__ring"
      );

    const dot =
      container.querySelector(
        ".fb-magnetic-cursor__dot"
      );

    expect(
      ring
    ).not.toHaveClass(
      "is-visible"
    );

    expect(
      dot
    ).not.toHaveClass(
      "is-visible"
    );
  });

  it("tracks pointer position relative to the container", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
      >
        Content
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

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

    fireEvent.pointerMove(
      root,
      {
        clientX: 170,
        clientY: 140,
      }
    );

    const ring =
      root.querySelector(
        ".fb-magnetic-cursor__ring"
      ) as HTMLElement;

    const dot =
      root.querySelector(
        ".fb-magnetic-cursor__dot"
      ) as HTMLElement;

    expect(
      ring.style.left
    ).toBe(
      "150px"
    );

    expect(
      ring.style.top
    ).toBe(
      "100px"
    );

    expect(
      dot.style.left
    ).toBe(
      "150px"
    );

    expect(
      dot.style.top
    ).toBe(
      "100px"
    );
  });

  it("shows ring and dot after pointer movement", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
      >
        Content
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    fireEvent.pointerMove(
      root,
      {
        clientX: 50,
        clientY: 40,
      }
    );

    expect(
      root.querySelector(
        ".fb-magnetic-cursor__ring"
      )
    ).toHaveClass(
      "is-visible"
    );

    expect(
      root.querySelector(
        ".fb-magnetic-cursor__dot"
      )
    ).toHaveClass(
      "is-visible"
    );
  });

  it("hides ring and dot after pointer leave", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
      >
        Content
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    fireEvent.pointerMove(
      root,
      {
        clientX: 50,
        clientY: 40,
      }
    );

    fireEvent.pointerLeave(
      root
    );

    expect(
      root.querySelector(
        ".fb-magnetic-cursor__ring"
      )
    ).not.toHaveClass(
      "is-visible"
    );

    expect(
      root.querySelector(
        ".fb-magnetic-cursor__dot"
      )
    ).not.toHaveClass(
      "is-visible"
    );
  });

  it("applies magnetic attraction toward a magnetic target", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
        magneticStrength={0.5}
      >
        <button
          type="button"
          data-magnetic-target
        >
          Target
        </button>
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

    const target =
      screen.getByRole(
        "button",
        {
          name: "Target",
        }
      );

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 400,
      height: 300,
      top: 0,
      left: 0,
      right: 400,
      bottom: 300,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    vi.spyOn(
      target,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 100,
      height: 40,
      top: 80,
      left: 100,
      right: 200,
      bottom: 120,
      x: 100,
      y: 80,
      toJSON: () => {},
    });

    /*
      pointer = (120, 90)

      target center:
      x = 100 + 50 = 150
      y = 80 + 20 = 100

      base local point:
      x = 120
      y = 90

      magnetic adjustment at strength 0.5:
      x += (150 - 120) * 0.5 = 15
      y += (100 - 90) * 0.5 = 5

      final:
      x = 135
      y = 95
    */

    fireEvent.pointerMove(
      target,
      {
        clientX: 120,
        clientY: 90,
      }
    );

    const ring =
      root.querySelector(
        ".fb-magnetic-cursor__ring"
      ) as HTMLElement;

    expect(
      ring.style.left
    ).toBe(
      "135px"
    );

    expect(
      ring.style.top
    ).toBe(
      "95px"
    );

    expect(
      ring
    ).toHaveClass(
      "is-targeting"
    );
  });

  it("removes targeting state when pointer moves away from a target", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
      >
        <button
          type="button"
          data-magnetic-target
        >
          Target
        </button>

        <span>
          Outside
        </span>
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

    const target =
      screen.getByRole(
        "button",
        {
          name: "Target",
        }
      );

    const outside =
      screen.getByText(
        "Outside"
      );

    vi.spyOn(
      root,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 400,
      height: 300,
      top: 0,
      left: 0,
      right: 400,
      bottom: 300,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    vi.spyOn(
      target,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 100,
      height: 40,
      top: 80,
      left: 100,
      right: 200,
      bottom: 120,
      x: 100,
      y: 80,
      toJSON: () => {},
    });

    fireEvent.pointerMove(
      target,
      {
        clientX: 120,
        clientY: 90,
      }
    );

    const ring =
      root.querySelector(
        ".fb-magnetic-cursor__ring"
      );

    expect(
      ring
    ).toHaveClass(
      "is-targeting"
    );

    fireEvent.pointerMove(
      outside,
      {
        clientX: 250,
        clientY: 180,
      }
    );

    expect(
      ring
    ).not.toHaveClass(
      "is-targeting"
    );
  });

  it("applies custom ring and dot sizes", () => {
    const {
      container,
    } =
      render(
        <MagneticCursor
          size={24}
          ringSize={60}
        >
          Content
        </MagneticCursor>
      );

    const ring =
      container.querySelector(
        ".fb-magnetic-cursor__ring"
      ) as HTMLElement;

    const dot =
      container.querySelector(
        ".fb-magnetic-cursor__dot"
      ) as HTMLElement;

    expect(
      ring.style.width
    ).toBe(
      "60px"
    );

    expect(
      ring.style.height
    ).toBe(
      "60px"
    );

    expect(
      dot.style.width
    ).toBe(
      "24px"
    );

    expect(
      dot.style.height
    ).toBe(
      "24px"
    );
  });

  it("applies custom color", () => {
	  const {
		container,
	  } =
		render(
		  <MagneticCursor
			color="#ff0000"
			size={24}
		  >
			Content
		  </MagneticCursor>
		);

	  const ring =
		container.querySelector(
		  ".fb-magnetic-cursor__ring"
		) as HTMLElement;

	  const dot =
		container.querySelector(
		  ".fb-magnetic-cursor__dot"
		) as HTMLElement;

	  expect(
		ring.style.borderColor
	  ).toBe(
		"rgb(255, 0, 0)"
	  );

	  expect(
		dot.style.background
	  ).toBe(
		"rgb(255, 0, 0)"
	  );

	  expect(
		dot.style.boxShadow
	  ).toContain(
		"24px"
	  );
	});

  it("applies follow speed to the ring transition", () => {
    const {
      container,
    } =
      render(
        <MagneticCursor
          followSpeed={0.35}
        >
          Content
        </MagneticCursor>
      );

    const ring =
      container.querySelector(
        ".fb-magnetic-cursor__ring"
      ) as HTMLElement;

    expect(
      ring.style.transitionDuration
    ).toBe(
      "0.35s"
    );
  });

  it("forwards HTML attributes and custom styles", () => {
    render(
      <MagneticCursor
        data-testid="magnetic-cursor"
        aria-label="Interactive magnetic region"
        title="Magnetic cursor"
        style={{
          marginTop:
            "24px",
        }}
      >
        Content
      </MagneticCursor>
    );

    const root =
      screen.getByTestId(
        "magnetic-cursor"
      );

    expect(
      root
    ).toHaveAttribute(
      "aria-label",
      "Interactive magnetic region"
    );

    expect(
      root
    ).toHaveAttribute(
      "title",
      "Magnetic cursor"
    );

    expect(
      root
    ).toHaveStyle({
      marginTop:
        "24px",
    });

    expect(
      root.style.cursor
    ).toBe(
      "none"
    );
  });

  it("marks decorative cursor elements as hidden from assistive technology", () => {
    const {
      container,
    } =
      render(
        <MagneticCursor>
          Content
        </MagneticCursor>
      );

    expect(
      container.querySelector(
        ".fb-magnetic-cursor__ring"
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );

    expect(
      container.querySelector(
        ".fb-magnetic-cursor__dot"
      )
    ).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("removes native pointer listeners when unmounted", () => {
    const addSpy =
      vi.spyOn(
        HTMLElement.prototype,
        "addEventListener"
      );

    const removeSpy =
      vi.spyOn(
        HTMLElement.prototype,
        "removeEventListener"
      );

    const {
      unmount,
    } =
      render(
        <MagneticCursor>
          Content
        </MagneticCursor>
      );

    expect(
      addSpy
    ).toHaveBeenCalledWith(
      "pointermove",
      expect.any(Function)
    );

    expect(
      addSpy
    ).toHaveBeenCalledWith(
      "pointerleave",
      expect.any(Function)
    );

    unmount();

    expect(
      removeSpy
    ).toHaveBeenCalledWith(
      "pointermove",
      expect.any(Function)
    );

    expect(
      removeSpy
    ).toHaveBeenCalledWith(
      "pointerleave",
      expect.any(Function)
    );
  });

  it("has no obvious accessibility violations", async () => {
    const {
      container,
    } =
      render(
        <MagneticCursor>
          <button
            type="button"
            data-magnetic-target
          >
            Accessible target
          </button>
        </MagneticCursor>
      );

    await expectNoAccessibilityViolations(
      container
    );
  });
});