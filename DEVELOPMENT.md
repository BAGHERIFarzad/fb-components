# FB Components — Development Guide

Internal development and contributor guide for:

```text
@farzadbagheri/fb-components
```

This document explains how to work on the repository safely and consistently.

It complements:

- `README.md`
- `COMPONENTS.md`
- `EXAMPLES.md`
- `CONTRIBUTING.md`
- `RELEASING.md`
- `BRANCH-PROTECTION.md`
- `SECURITY.md`

---

# Table of Contents

1. [Repository Overview](#repository-overview)
2. [Local Setup](#local-setup)
3. [Project Structure](#project-structure)
4. [Core npm Scripts](#core-npm-scripts)
5. [Development Workflow](#development-workflow)
6. [Branch Naming](#branch-naming)
7. [Protected Main Workflow](#protected-main-workflow)
8. [Pull Request Workflow](#pull-request-workflow)
9. [Testing Philosophy](#testing-philosophy)
10. [Coverage Philosophy](#coverage-philosophy)
11. [Accessibility Testing](#accessibility-testing)
12. [Package Size Guard](#package-size-guard)
13. [Fresh Install Verification](#fresh-install-verification)
14. [Build and Package Architecture](#build-and-package-architecture)
15. [Adding a New Component](#adding-a-new-component)
16. [Adding a New Category](#adding-a-new-category)
17. [Updating Exports](#updating-exports)
18. [Adding CSS](#adding-css)
19. [Adding Tests](#adding-tests)
20. [Updating Coverage Configuration](#updating-coverage-configuration)
21. [Updating Documentation](#updating-documentation)
22. [Release Validation](#release-validation)
23. [Release Preparation](#release-preparation)
24. [Code Quality Checklist](#code-quality-checklist)
25. [Troubleshooting](#troubleshooting)

---

# Repository Overview

FB Components is a public React component library published as:

```text
@farzadbagheri/fb-components
```

The package currently contains 22 public components across these categories:

```text
backgrounds
buttons
text
ui
motion
ai
heroes
landing
data
```

The package supports:

```text
React >=18 <20
React DOM >=18 <20
Node >=18
```

The project publishes:

- ESM output
- CommonJS output
- TypeScript declarations
- root CSS bundle
- category-specific CSS bundles
- root JavaScript entry point
- category-specific JavaScript entry points

---

# Local Setup

Clone the repository:

```bash
git clone https://github.com/BAGHERIFarzad/fb-components.git
cd fb-components
```

Install dependencies:

```bash
npm install
```

Confirm the package is healthy:

```bash
npm run typecheck
npm run test
npm run build
```

For complete validation:

```bash
npm run release:check
```

---

# Project Structure

Current high-level structure:

```text
fb-components/
├─ .github/
│  └─ workflows/
├─ scripts/
├─ src/
│  ├─ ai/
│  ├─ backgrounds/
│  ├─ buttons/
│  ├─ data/
│  ├─ heroes/
│  ├─ landing/
│  ├─ motion/
│  ├─ test/
│  ├─ text/
│  ├─ ui/
│  ├─ index.ts
│  ├─ PublicApi.test.ts
│  ├─ styles.css
│  └─ styles.d.ts
├─ BRANCH-PROTECTION.md
├─ CHANGELOG.md
├─ CODE_OF_CONDUCT.md
├─ COMPONENTS.md
├─ CONTRIBUTING.md
├─ DEVELOPMENT.md
├─ EXAMPLES.md
├─ LICENSE
├─ README-BADGES.md
├─ README.md
├─ RELEASING.md
├─ SECURITY.md
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ tsup.config.ts
└─ vitest.config.ts
```

Each component category normally contains:

```text
Component.tsx
Component.css
Component.test.tsx
index.ts
```

---

# Core npm Scripts

The repository exposes these important scripts.

## Build

```bash
npm run build
```

Runs the package build through `tsup`.

The build produces:

- ESM bundles
- CommonJS bundles
- CSS bundles
- source maps
- `.d.ts` declarations
- `.d.cts` declarations

---

## Type Checking

```bash
npm run typecheck
```

Runs:

```text
tsc --noEmit
```

No output means the type check passed.

---

## Tests

```bash
npm run test
```

Runs:

```text
vitest run
```

---

## Watch Tests

```bash
npm run test:watch
```

Useful during active component development.

---

## Coverage

```bash
npm run test:coverage
```

Runs the test suite with coverage enabled.

---

## Package Size

```bash
npm run package:size
```

Runs the package-size guard.

---

## Fresh Install Test

```bash
npm run install-test
```

Packs the real package and installs it into a temporary clean consumer project.

---

## Complete Release Validation

```bash
npm run release:check
```

Current release check validates:

```text
typecheck
tests
build
package size
fresh install
```

This is the most important command before opening a release-oriented PR.

---

# Development Workflow

The preferred workflow is:

```text
main
  ↓
feature branch
  ↓
local validation
  ↓
commit
  ↓
push feature branch
  ↓
pull request
  ↓
CI checks
  ↓
squash merge
  ↓
sync local main
```

Do not develop directly on `main`.

---

# Branch Naming

Use clear prefixes.

Recommended patterns:

```text
feat/component-name
fix/component-name
test/component-name
docs/topic-name
chore/topic-name
refactor/topic-name
```

Examples:

```text
test/coverage-gap-closure
docs/readme-developer-experience
chore/cleanup-test-whitespace
feat/new-data-component
fix/glass-button-focus
```

Keep branch names:

- lowercase
- hyphen-separated
- descriptive
- scoped to one meaningful change

---

# Protected Main Workflow

The `main` branch is protected.

Use:

```text
feature branch → pull request → CI → merge
```

Do not push feature work directly to:

```text
main
```

After a PR is squash-merged, sync local `main` with:

```powershell
git switch main
git fetch origin
git reset --hard origin/main
git status
```

Then delete the local feature branch:

```powershell
git branch -D <feature-branch>
```

`-D` is used because squash-merged feature commits are not necessarily ancestors of the final `main` commit.

---

# Pull Request Workflow

Before opening a PR:

```bash
git diff --check
npm run release:check
git status
```

Then stage only the intended files.

Example:

```bash
git add src/buttons/GlassButton.test.tsx README.md
```

Avoid broad staging when a precise list is possible.

Commit with a focused message:

```bash
git commit -m "test: cover glass button tint fallback"
```

Push:

```bash
git push -u origin <branch-name>
```

Create a PR and wait for all required checks.

Current CI includes:

```text
Typecheck and Build
Test Coverage
Package Size Guard
Fresh Install Test
```

Merge only after required checks are green.

Preferred merge strategy:

```text
Squash and merge
```

---

# Testing Philosophy

Tests should validate real public behavior.

Good tests cover:

- rendering
- props
- interactions
- keyboard behavior
- native HTML behavior
- accessibility semantics
- class changes
- style output
- lifecycle cleanup
- public exports
- animation behavior
- edge cases
- package installation behavior

Avoid tests that only exist to make a coverage percentage look better.

---

# Coverage Philosophy

Coverage is used as a quality signal, not as a target to game.

Current global thresholds are:

```text
Statements: 80%
Branches:   70%
Functions:  80%
Lines:      80%
```

The current project is substantially above those thresholds.

Only add a component to `coverage.include` when that component has meaningful tests.

This prevents untested files from creating misleading coverage noise during staged expansion of the suite.

---

## Intentional Defensive Gaps

Some defensive branches may remain uncovered when they are unrealistic to trigger without mocking React internals.

Examples already reviewed:

```text
PredictiveArc
- defensive null-ref early return

MagneticCursor
- defensive null-ref early return

AnimatedCounter
- defensive cleanup branch when no animation frame exists
```

These are acceptable when forcing them would require brittle implementation mocking.

---

# Accessibility Testing

Accessibility is part of the component API.

The repository uses automated accessibility checks through the shared helper:

```text
src/test/accessibility.ts
```

Typical test:

```tsx
it("has no obvious accessibility violations", async () => {
  const { container } = render(
    <MyComponent />
  );

  await expectNoAccessibilityViolations(
    container
  );
});
```

Important areas to verify:

- native button semantics
- explicit button types
- keyboard interaction
- ARIA labels
- progressbar semantics
- decorative element hiding
- semantic content structure

---

## jsdom Canvas Warning

Accessibility tests may emit:

```text
Not implemented: HTMLCanvasElement's getContext() method:
without installing the canvas npm package
```

This warning is currently considered harmless for this test suite.

Do not install the native `canvas` dependency only to suppress this warning unless the project later genuinely needs Canvas API testing.

---

# Package Size Guard

The repository validates package size automatically.

Current limits:

```text
Packed size:   <= 100 kB
Unpacked size: <= 600 kB
Files:         <= 150
```

Run:

```bash
npm run package:size
```

A typical successful result ends with:

```text
Package-size guard PASSED.
```

The goal is to prevent accidental package growth.

---

# Fresh Install Verification

The install test validates the actual packed npm artifact.

Run:

```bash
npm run install-test
```

The script:

1. packs the package
2. creates a temporary clean consumer project
3. installs React
4. installs the packed package
5. checks public exports
6. checks category exports
7. resolves CSS exports
8. verifies real consumer usage

A successful run ends with:

```text
Fresh install verification PASSED.
FB Components install-test PASSED.
```

This is a critical protection against problems that unit tests alone cannot detect.

---

# Build and Package Architecture

The package is built with `tsup`.

Entry points include:

```text
index
backgrounds
buttons
text
ui
motion
ai
heroes
landing
data
```

The package produces category-specific JS and CSS output.

Examples:

```text
dist/index.js
dist/index.cjs
dist/index.css

dist/buttons.js
dist/buttons.cjs
dist/buttons.css

dist/data.js
dist/data.cjs
dist/data.css
```

TypeScript declarations are generated for both module formats.

---

# Adding a New Component

Use this process.

## 1. Choose the Category

Example:

```text
src/data/
```

## 2. Create the Component

Example:

```text
src/data/SparklineMetric.tsx
```

## 3. Create the Stylesheet

```text
src/data/SparklineMetric.css
```

## 4. Create Tests

```text
src/data/SparklineMetric.test.tsx
```

## 5. Export from the Category

Update:

```text
src/data/index.ts
```

## 6. Export from the Root API

Update:

```text
src/index.ts
```

## 7. Verify Public API Tests

Update:

```text
src/PublicApi.test.ts
```

if the component changes the public root export count or expected export set.

## 8. Add Coverage

Update:

```text
vitest.config.ts
```

only after meaningful tests exist.

## 9. Update Documentation

Update:

```text
README.md
COMPONENTS.md
EXAMPLES.md
```

when relevant.

## 10. Validate

Run:

```bash
git diff --check
npm run release:check
```

---

# Adding a New Category

A new category requires more work than a single component.

Example new category:

```text
charts
```

Typical required changes:

```text
src/charts/
src/charts/index.ts
tsup.config.ts
package.json exports
src/index.ts
src/styles.css
src/PublicApi.test.ts
scripts/install-test.mjs
README.md
COMPONENTS.md
EXAMPLES.md
```

You must also add:

```text
@farzadbagheri/fb-components/charts
@farzadbagheri/fb-components/charts.css
```

to the package export map if the category is intended to be public.

---

# Updating Exports

Each public component should normally be exported from two places.

## Category Export

Example:

```ts
export { GlassButton } from "./GlassButton";
export type { GlassButtonProps } from "./GlassButton";
```

in:

```text
src/buttons/index.ts
```

## Root Export

The root package should expose the component through:

```text
src/index.ts
```

Always verify:

```bash
npm run build
npm run install-test
```

after changing exports.

---

# Adding CSS

Every public category has its own CSS bundle.

When adding component CSS:

```text
src/buttons/NewButton.css
```

ensure the category stylesheet includes or bundles it through the existing category build pattern.

Also verify the root stylesheet includes the category styles as expected.

Check both usage paths:

```tsx
import "@farzadbagheri/fb-components/buttons.css";
```

and:

```tsx
import "@farzadbagheri/fb-components/styles.css";
```

---

# Adding Tests

Prefer behavior-driven tests.

For a new component, consider coverage for:

```text
default rendering
custom props
optional sections
native attributes
custom className
custom style
interaction
keyboard behavior
disabled behavior
edge values
accessibility
cleanup
rerender behavior
```

Not every component needs every category of test.

Test what the component actually does.

---

# Updating Coverage Configuration

Coverage configuration lives in:

```text
vitest.config.ts
```

Add the component only after meaningful tests exist.

Example:

```ts
"src/data/SparklineMetric.tsx",
```

Then run:

```bash
npm run test:coverage
```

Review the component row rather than only the total percentage.

---

# Updating Documentation

Documentation should stay synchronized with the actual public API.

Main files:

```text
README.md
COMPONENTS.md
EXAMPLES.md
DEVELOPMENT.md
CHANGELOG.md
```

Update `README.md` when changing:

- installation
- supported versions
- public component count
- entry points
- major usage patterns
- package version examples

Update `COMPONENTS.md` when changing:

- props
- defaults
- behavior
- component exports
- accessibility behavior

Update `EXAMPLES.md` when a change affects recommended integration patterns.

---

# Release Validation

Before any release-oriented PR:

```bash
git diff --check
npm run release:check
```

A successful `release:check` validates:

```text
TypeScript
tests
build
package size
fresh install
```

Do not ignore failures.

Fix them before merging.

---

# Release Preparation

Release-specific instructions are maintained in:

```text
RELEASING.md
```

The package currently follows pre-1.0 semantic versioning.

General direction:

```text
0.1.x
maintenance, fixes, docs, tests

0.2.0
meaningful public API expansion

1.0.0
stable public API milestone
```

Always verify the changelog and release notes before publishing.

---

# Code Quality Checklist

Before opening a PR, check:

```text
[ ] correct feature branch
[ ] no direct main development
[ ] git diff --check clean
[ ] TypeScript passes
[ ] tests pass
[ ] relevant accessibility tests pass
[ ] build passes
[ ] package size passes
[ ] fresh install passes
[ ] exports updated
[ ] CSS exports updated
[ ] public API tests updated
[ ] docs updated
[ ] no unrelated files staged
```

Then run:

```bash
git status
```

and verify every staged file is intentional.

---

# Troubleshooting

## Tests show Canvas warnings

Message:

```text
Not implemented: HTMLCanvasElement's getContext() method
```

Current interpretation:

```text
harmless jsdom/axe warning
```

Do not install native Canvas dependencies only to hide it.

---

## `git diff --check` reports trailing whitespace

Use VS Code:

```text
Ctrl + Shift + P
```

then run:

```text
Trim Trailing Whitespace
```

Save the file and retry:

```bash
git diff --check
```

A clean result prints nothing.

---

## Feature Branch Was Squash-Merged

After squash merge:

```powershell
git switch main
git fetch origin
git reset --hard origin/main
git status
git branch -D <feature-branch>
```

Using `-D` is normal here because the local feature commit may not be an ancestor of the squashed commit on `main`.

---

## Coverage Does Not Change After Adding a Test

Check:

```text
1. Was the test file saved?
2. Did the test count increase?
3. Is the component included in vitest.config.ts coverage.include?
4. Is the test actually exercising the uncovered branch?
```

Always inspect the individual component coverage row.

---

## Disabled Button Does Not Trigger Submit Handler

A disabled native submit button does not submit the form.

If a test needs to validate the form handler's empty-input guard directly, submit the form itself:

```tsx
fireEvent.submit(form);
```

This tests the handler without pretending a disabled button is clickable.

---

# Final Development Principle

Prefer tests and documentation that describe real user-facing behavior.

Do not add brittle implementation mocks purely to reach a prettier coverage percentage.

The goal is a package that is:

```text
predictable
typed
accessible
testable
small
installable
well documented
safe to release
```

---

# Related Documentation

- `README.md`
- `COMPONENTS.md`
- `EXAMPLES.md`
- `CONTRIBUTING.md`
- `RELEASING.md`
- `BRANCH-PROTECTION.md`
- `SECURITY.md`
- `CHANGELOG.md`

Live component catalog:

https://farzadbagheri.fr/en/components

GitHub:

https://github.com/BAGHERIFarzad/fb-components

npm:

https://www.npmjs.com/package/@farzadbagheri/fb-components

---

MIT © 2026 Farzad Bagheri.
