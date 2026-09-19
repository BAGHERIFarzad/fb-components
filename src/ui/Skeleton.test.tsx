import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders a single text placeholder by default", () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector(".fb-skeleton");
    expect(el).toBeTruthy();
    expect(el!.className).toContain("fb-skeleton--text");
    expect(el!.className).toContain("fb-skeleton--pulse");
  });

  it("is hidden from assistive technology", () => {
    const { container } = render(<Skeleton />);
    const el = container.querySelector(".fb-skeleton");
    expect(el!.getAttribute("aria-hidden")).toBe("true");
    expect(el!.getAttribute("role")).toBe("presentation");
  });

  it("renders multiple text rows with a shorter last row", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);
    const rows = container.querySelectorAll(".fb-skeleton--text");
    expect(rows.length).toBe(3);
    expect(rows[2]!.className).toContain("fb-skeleton--last");
  });

  it("supports circular and rectangular variants", () => {
    const { container: c1 } = render(<Skeleton variant="circular" />);
    expect(c1.querySelector(".fb-skeleton--circular")).toBeTruthy();
    const { container: c2 } = render(<Skeleton variant="rectangular" />);
    expect(c2.querySelector(".fb-skeleton--rectangular")).toBeTruthy();
  });

  it("applies numeric and string dimensions", () => {
    const { container } = render(<Skeleton width={200} height="2rem" />);
    const el = container.querySelector(".fb-skeleton") as HTMLElement;
    expect(el.style.width).toBe("200px");
    expect(el.style.height).toBe("2rem");
  });

  it("supports disabling animation", () => {
    const { container } = render(<Skeleton animation="none" />);
    expect(container.querySelector(".fb-skeleton--none")).toBeTruthy();
  });

  it("accepts a custom className", () => {
    const { container } = render(<Skeleton className="my-card" />);
    expect(container.querySelector(".fb-skeleton.my-card")).toBeTruthy();
  });
});
