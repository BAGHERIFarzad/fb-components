import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { MagneticButton } from "./MagneticButton";

describe("MagneticButton", () => {
  it("renders its default label", () => {
    render(<MagneticButton />);

    expect(
      screen.getByRole("button", {
        name: "Explore",
      })
    ).toBeInTheDocument();
  });

  it("renders custom children", () => {
    render(
      <MagneticButton>
        Open project
      </MagneticButton>
    );

    expect(
      screen.getByRole("button", {
        name: "Open project",
      })
    ).toBeInTheDocument();
  });

  it("uses type button by default", () => {
    render(
      <MagneticButton>
        Action
      </MagneticButton>
    );

    expect(
      screen.getByRole("button", {
        name: "Action",
      })
    ).toHaveAttribute("type", "button");
  });

  it("applies custom visual props", () => {
    render(
      <MagneticButton
        background="#111111"
        textColor="#ffffff"
        fontSize={18}
        radius={20}
        paddingX={30}
        paddingY={16}
      >
        Styled
      </MagneticButton>
    );

    const button = screen.getByRole("button", {
      name: "Styled",
    });

    expect(button).toHaveStyle({
      background: "#111111",
      color: "#ffffff",
      fontSize: "18px",
      borderRadius: "20px",
      padding: "16px 30px",
    });
  });

  it("applies a custom class name", () => {
    render(
      <MagneticButton className="custom-button">
        Styled
      </MagneticButton>
    );

    const button = screen.getByRole("button", {
      name: "Styled",
    });

    expect(button).toHaveClass(
      "fb-magnetic-button",
      "custom-button"
    );
  });

  it("moves according to pointer position and strength", () => {
    render(
      <MagneticButton strength={0.5}>
        Move me
      </MagneticButton>
    );

    const button = screen.getByRole("button", {
      name: "Move me",
    });

    vi.spyOn(
      button,
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

    fireEvent.mouseMove(button, {
      clientX: 160,
      clientY: 95,
    });

    /*
      center:
      x = 200 / 2 = 100
      y = 100 / 2 = 50

      relative pointer:
      x = 160 - 10 - 100 = 50
      y = 95 - 20 - 50 = 25

      strength 0.5:
      x = 25
      y = 12.5
    */

    expect(button.style.transform).toContain(
      "25px"
    );

    expect(button.style.transform).toContain(
      "12.5px"
    );
  });

  it("resets its transform on mouse leave", () => {
    render(
      <MagneticButton strength={1}>
        Reset me
      </MagneticButton>
    );

    const button = screen.getByRole("button", {
      name: "Reset me",
    });

    vi.spyOn(
      button,
      "getBoundingClientRect"
    ).mockReturnValue({
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    fireEvent.mouseMove(button, {
      clientX: 100,
      clientY: 100,
    });

    expect(button.style.transform).not.toContain(
      "0px,\n            0px"
    );

    fireEvent.mouseLeave(button);

    expect(button.style.transform).toContain(
      "0px"
    );
  });

  it("supports keyboard focus", async () => {
    const user = userEvent.setup();

    render(
      <MagneticButton>
        Keyboard
      </MagneticButton>
    );

    await user.tab();

    expect(
      screen.getByRole("button", {
        name: "Keyboard",
      })
    ).toHaveFocus();
  });

  it("can be activated from the keyboard", async () => {
    const user = userEvent.setup();

    render(
      <MagneticButton>
        Activate
      </MagneticButton>
    );

    const button = screen.getByRole("button", {
      name: "Activate",
    });

    button.focus();

    await user.keyboard("{Enter}");

    expect(button).toHaveFocus();
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <MagneticButton>
        Accessible magnetic button
      </MagneticButton>
    );

    await expectNoAccessibilityViolations(container);
  });
});