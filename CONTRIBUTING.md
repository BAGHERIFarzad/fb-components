# Contributing to FB Components

Thank you for considering a contribution to FB Components.

FB Components is a production-minded React + TypeScript component library focused on modern product UI, AI interfaces, motion, dashboards, data visualization, SaaS experiences, and developer-friendly package architecture.

## Before You Start

Check the existing resources first:

- Issues: https://github.com/BAGHERIFarzad/fb-components/issues
- Roadmap: https://github.com/BAGHERIFarzad/fb-components/blob/main/ROADMAP.md
- Support: https://github.com/BAGHERIFarzad/fb-components/blob/main/SUPPORT.md
- Component API: https://github.com/BAGHERIFarzad/fb-components/blob/main/COMPONENTS.md
- Examples: https://github.com/BAGHERIFarzad/fb-components/blob/main/EXAMPLES.md
- Live showcase: https://farzadbagheri.fr/en/components

If an issue already exists, use it as the source of truth. For a new component or larger feature, open a feature request before implementation.

## Good First Contributions

Start with issues labeled `good first issue`, `documentation`, `accessibility`, `testing`, or `DX`.

Read the dedicated guide:

https://github.com/BAGHERIFarzad/fb-components/blob/main/GOOD_FIRST_CONTRIBUTION.md

## Development Setup

Requirements: Node.js 18+, npm, and Git.

```bash
git clone https://github.com/BAGHERIFarzad/fb-components.git
cd fb-components
npm install
npm run release:check
```

Useful commands:

```bash
npm run typecheck
npm test
npm run test:coverage
npm run build
npm run package:size
npm run install-test
```

## Branch Workflow

Do not work directly on `main`.

```bash
git switch main
git fetch origin
git reset --hard origin/main
git switch -c <branch-name>
```

Recommended prefixes: `feat/`, `fix/`, `docs/`, `test/`, `refactor/`, `chore/`.

Keep one pull request focused on one logical change.

## Component Contribution Standards

New public components should solve a reusable product-interface problem.

A strong contribution should include:

- clear use case
- typed public API
- React 18/19 compatibility
- correct category exports
- category-specific CSS where required
- meaningful tests
- accessibility considerations
- reduced-motion handling when relevant
- documentation and copy-paste examples
- package-size awareness

Avoid large runtime dependencies unless they provide clear value.

## Public API Rules

Use public category entry points in consumer-facing examples:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import { GlassCard } from "@farzadbagheri/fb-components/ui";
import { RadialProgress } from "@farzadbagheri/fb-components/data";
```

If public API changes, update exports, tests, `COMPONENTS.md`, examples where appropriate, and verify declaration generation and packed-package behavior.

Do not use internal source imports in consumer documentation.

## CSS Rules

Prefer category CSS:

```tsx
import "@farzadbagheri/fb-components/buttons.css";
```

Full CSS remains available:

```tsx
import "@farzadbagheri/fb-components/styles.css";
```

Keep selectors scoped, avoid global resets, support reduced motion where appropriate, and preserve package-size limits.

## Accessibility

Review semantic HTML, accessible names, keyboard behavior, focus, ARIA, state communication, reduced motion, and color-independent feedback.

Prefer native semantics over unnecessary ARIA.

## Testing

Run:

```bash
npm test
npm run test:coverage
```

Tests should focus on observable behavior rather than implementation details.

Do not add brittle tests solely to increase coverage.

## Package Validation

Before opening a PR:

```bash
npm run release:check
```

This validates TypeScript, tests, ESM/CJS builds, declarations, package-size limits, packed-package behavior, fresh consumer installation, and public exports.

## Documentation

Update docs when a change affects public APIs, installation, package entry points, CSS usage, accessibility, framework integration, examples, or release workflow.

Keep examples copy-paste friendly and aligned with the real public API.

## Commit Messages

Examples:

```text
feat: add skeleton component
fix: preserve keyboard focus in toast
docs: expand Next.js examples
test: cover radial progress labels
chore: improve package validation
```

## Pull Requests

Before opening a PR:

```bash
git status
git diff --check
npm run release:check
```

A good PR explains what changed, why, the related issue, accessibility impact, API impact, and validation performed.

Use `Closes #123` when the PR should close an issue.

## Review Checklist

Changes may be reviewed for correctness, API clarity, TypeScript quality, accessibility, test quality, package architecture, CSS isolation, documentation, package cost, and backward compatibility.

## Security

Do not report vulnerabilities through public issues. Follow:

https://github.com/BAGHERIFarzad/fb-components/blob/main/SECURITY.md

## Code of Conduct

https://github.com/BAGHERIFarzad/fb-components/blob/main/CODE_OF_CONDUCT.md

## Thank You

Code, tests, documentation, accessibility feedback, bug reports, examples, and thoughtful feature proposals all help improve FB Components.
