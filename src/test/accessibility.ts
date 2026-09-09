import axe from "axe-core";

export async function expectNoAccessibilityViolations(
  container: HTMLElement
) {
  const results = await axe.run(container);

  if (results.violations.length > 0) {
    const message = results.violations
      .map((violation) => {
        const nodes = violation.nodes
          .map((node) => `  - ${node.target.join(", ")}`)
          .join("\n");

        return [
          `${violation.id}: ${violation.help}`,
          violation.description,
          nodes
        ].join("\n");
      })
      .join("\n\n");

    throw new Error(
      `Accessibility violations found:\n\n${message}`
    );
  }
}