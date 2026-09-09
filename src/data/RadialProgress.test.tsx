import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RadialProgress } from "./RadialProgress";

describe("RadialProgress", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <RadialProgress value={72} />
    );

    expect(container.firstChild).toBeTruthy();
  });
});