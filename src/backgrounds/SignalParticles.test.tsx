import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { expectNoAccessibilityViolations } from "../test/accessibility";
import { SignalParticles } from "./SignalParticles";

describe("SignalParticles", () => {
  it("renders the root container", () => {
    const { container } = render(
      <SignalParticles />
    );

    expect(
      container.querySelector(
        ".fb-signal-particles"
      )
    ).toBeInTheDocument();
  });

  it("renders the default number of particles", () => {
    const { container } = render(
      <SignalParticles />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(30);
  });

  it("renders the requested density", () => {
    const { container } = render(
      <SignalParticles
        density={8}
      />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(8);
  });

  it("clamps density to at least one particle", () => {
    const { container } = render(
      <SignalParticles
        density={0}
      />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(1);
  });

  it("also clamps negative density to one particle", () => {
    const { container } = render(
      <SignalParticles
        density={-10}
      />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(1);
  });

  it("applies a custom class name", () => {
    const { container } = render(
      <SignalParticles
        className="custom-particles"
      />
    );

    expect(
      container.querySelector(
        ".fb-signal-particles"
      )
    ).toHaveClass(
      "fb-signal-particles",
      "custom-particles"
    );
  });

  it("applies the custom background color", () => {
    const { container } = render(
      <SignalParticles
        background="#123456"
      />
    );

    const root =
      container.querySelector(
        ".fb-signal-particles"
      ) as HTMLElement;

    expect(
      root.style.background
    ).toBe(
      "rgb(18, 52, 86)"
    );
  });

  it("applies the animated class by default", () => {
    const { container } = render(
      <SignalParticles
        density={3}
      />
    );

    const particles =
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      );

    particles.forEach(
      (particle) => {
        expect(
          particle
        ).toHaveClass(
          "fb-signal-particles__particle--animated"
        );
      }
    );
  });

  it("removes the animated class when animated is false", () => {
    const { container } = render(
      <SignalParticles
        density={3}
        animated={false}
      />
    );

    const particles =
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      );

    particles.forEach(
      (particle) => {
        expect(
          particle
        ).not.toHaveClass(
          "fb-signal-particles__particle--animated"
        );
      }
    );
  });

  it("applies custom particle size", () => {
    const { container } = render(
      <SignalParticles
        density={1}
        size={6}
      />
    );

    const particle =
      container.querySelector(
        ".fb-signal-particles__particle"
      ) as HTMLElement;

    expect(
      particle.style.width
    ).toBe(
      "6px"
    );

    expect(
      particle.style.height
    ).toBe(
      "6px"
    );
  });

  it("applies the custom particle color", () => {
    const { container } = render(
      <SignalParticles
        density={1}
        color="#ff0000"
      />
    );

    const particle =
      container.querySelector(
        ".fb-signal-particles__particle"
      ) as HTMLElement;

    expect(
      particle.style.background
    ).toBe(
      "rgb(255, 0, 0)"
    );
  });

  it("calculates animation duration from speed", () => {
    const { container } = render(
      <SignalParticles
        density={1}
        speed={2}
      />
    );

    const particle =
      container.querySelector(
        ".fb-signal-particles__particle"
      ) as HTMLElement;

    expect(
      particle.style.animationDuration
    ).toBe(
      "1.5s"
    );
  });

  it("supports fractional speed values", () => {
    const { container } = render(
      <SignalParticles
        density={1}
        speed={1.5}
      />
    );

    const particle =
      container.querySelector(
        ".fb-signal-particles__particle"
      ) as HTMLElement;

    expect(
      Number(
        particle.style.animationDuration.replace(
          "s",
          ""
        )
      )
    ).toBeCloseTo(
      2
    );
  });

  it("calculates deterministic particle positions", () => {
    const { container } = render(
      <SignalParticles
        density={3}
      />
    );

    const particles =
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      );

    const first =
      particles[0] as HTMLElement;

    const second =
      particles[1] as HTMLElement;

    const third =
      particles[2] as HTMLElement;

    expect(
      first.style.left
    ).toBe(
      "0%"
    );

    expect(
      first.style.top
    ).toBe(
      "0%"
    );

    expect(
      second.style.left
    ).toBe(
      "37%"
    );

    expect(
      second.style.top
    ).toBe(
      "53%"
    );

    expect(
      third.style.left
    ).toBe(
      "74%"
    );

    expect(
      third.style.top
    ).toBe(
      "6%"
    );
  });

  it("calculates animation delays from the particle index", () => {
    const { container } = render(
      <SignalParticles
        density={3}
      />
    );

    const particles =
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      );

    expect(
      (
        particles[0] as HTMLElement
      ).style.animationDelay
    ).toBe(
      "0s"
    );

    expect(
      (
        particles[1] as HTMLElement
      ).style.animationDelay
    ).toBe(
      "0.12s"
    );

    expect(
      (
        particles[2] as HTMLElement
      ).style.animationDelay
    ).toBe(
      "0.24s"
    );
  });

  it("wraps animation delay after every ten particles", () => {
    const { container } = render(
      <SignalParticles
        density={11}
      />
    );

    const particles =
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      );

    expect(
      (
        particles[10] as HTMLElement
      ).style.animationDelay
    ).toBe(
      "0s"
    );
  });

  it("calculates box shadow using particle size and color", () => {
    const { container } = render(
      <SignalParticles
        density={1}
        size={5}
        color="rgb(255, 0, 0)"
      />
    );

    const particle =
      container.querySelector(
        ".fb-signal-particles__particle"
      ) as HTMLElement;

    expect(
      particle.style.boxShadow
    ).toContain(
      "20px"
    );

    expect(
      particle.style.boxShadow
    ).toContain(
      "rgb(255, 0, 0)"
    );
  });

  it("updates particle count when density changes", () => {
    const {
      container,
      rerender,
    } = render(
      <SignalParticles
        density={2}
      />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(2);

    rerender(
      <SignalParticles
        density={5}
      />
    );

    expect(
      container.querySelectorAll(
        ".fb-signal-particles__particle"
      )
    ).toHaveLength(5);
  });

  it("has no obvious accessibility violations", async () => {
    const { container } = render(
      <SignalParticles />
    );

    await expectNoAccessibilityViolations(
      container
    );
  });
});