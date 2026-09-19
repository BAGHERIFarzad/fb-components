# Good First Contribution

Welcome to FB Components.

This guide is for developers making their first contribution. You do not need to understand the entire codebase before starting.

## 1. Choose an Issue

Open:

https://github.com/BAGHERIFarzad/fb-components/issues

Look for `good first issue`, `documentation`, `accessibility`, `testing`, or `DX`.

### Current Contributor-Friendly Issues

These issues are intentionally scoped to be approachable:

| Issue | Focus | Suggested labels |
| --- | --- | --- |
| [#22 — Add a Skeleton loading component](https://github.com/BAGHERIFarzad/fb-components/issues/22) | New reusable UI component | `good first issue`, `component request`, `enhancement` |
| [#24 — Expand Next.js usage examples](https://github.com/BAGHERIFarzad/fb-components/issues/24) | Documentation / framework integration | `good first issue`, `documentation`, `DX` |
| [#25 — Add accessibility examples for interactive components](https://github.com/BAGHERIFarzad/fb-components/issues/25) | Accessibility documentation | `good first issue`, `documentation`, `accessibility` |
| [#26 — Create a minimal Vite consumer example](https://github.com/BAGHERIFarzad/fb-components/issues/26) | Developer experience / example app | `help wanted`, `DX`, `testing`, `documentation` |
| [#28 — Improve component request guidance](https://github.com/BAGHERIFarzad/fb-components/issues/28) | Contribution documentation | `good first issue`, `documentation`, `component request` |

Always check the issue before starting in case its status, scope, or acceptance criteria changed.

## 2. Read the Issue

Understand:

- the problem
- the expected outcome
- the acceptance criteria
- the relevant component or documentation area
- accessibility requirements
- whether the issue changes the public API

Ask a focused question if something is unclear. Do not silently expand the scope.

## 3. Set Up

```bash
git clone https://github.com/BAGHERIFarzad/fb-components.git
cd fb-components
npm install
npm run release:check
```

Begin from a green baseline.

## 4. Create a Branch

```bash
git switch main
git fetch origin
git reset --hard origin/main
```

Then create a focused branch.

Examples:

```bash
git switch -c docs/nextjs-examples
```

```bash
git switch -c docs/accessibility-examples
```

```bash
git switch -c feat/skeleton-component
```

Do not commit directly to `main`.

## 5. Make One Focused Change

Good first contributions include:

- improving one documentation section
- adding one useful example
- adding meaningful tests
- improving one accessibility behavior
- implementing one clearly scoped approved component

Avoid unrelated refactors.

## 6. Validate

At minimum:

```bash
git diff --check
npm run release:check
```

The release check validates:

- TypeScript
- tests
- ESM and CommonJS builds
- TypeScript declarations
- package-size limits
- packed-package behavior
- fresh consumer installation
- public exports

Fix failures before opening a pull request.

## 7. Review Your Diff

Run:

```bash
git status
git diff
```

Confirm:

- only required files changed
- tests were added or updated where needed
- documentation matches the real public API
- accessibility was considered
- no unrelated formatting changes were introduced
- no secrets or temporary files were added

## 8. Commit

Use a focused commit message.

Examples:

```text
docs: expand Next.js usage examples
docs: add accessibility examples
test: add GlowButton keyboard coverage
feat: add Skeleton loading component
fix: improve RadialProgress accessible label
```

## 9. Open a Pull Request

Push your branch and open a PR against `main`.

A useful PR description includes:

```markdown
## Summary

What changed and why.

## Related Issue

Closes #123

## Validation

- [x] `git diff --check`
- [x] `npm run release:check`

## Accessibility

Describe accessibility impact.

## Public API

Describe any API change, or write `No public API change`.
```

The repository pull request template will guide you through the complete checklist.

## 10. Respond to Review

A maintainer may request changes.

Update the same branch, rerun validation, and push the new commits. You do not need to open a new pull request for ordinary review changes.

## Useful Resources

- Contributing guide: https://github.com/BAGHERIFarzad/fb-components/blob/main/CONTRIBUTING.md
- Component API: https://github.com/BAGHERIFarzad/fb-components/blob/main/COMPONENTS.md
- Examples: https://github.com/BAGHERIFarzad/fb-components/blob/main/EXAMPLES.md
- Development guide: https://github.com/BAGHERIFarzad/fb-components/blob/main/DEVELOPMENT.md
- Roadmap: https://github.com/BAGHERIFarzad/fb-components/blob/main/ROADMAP.md
- Support: https://github.com/BAGHERIFarzad/fb-components/blob/main/SUPPORT.md
- Live showcase: https://farzadbagheri.fr/en/components

## Thank You

A small, well-tested contribution is more valuable than a large unfocused one.

Welcome to FB Components.
