# Contributing to FB Components

Thank you for your interest in improving FB Components.

FB Components is a public React component library focused on modern product interfaces, motion, AI interfaces, data visualization, and reusable UI building blocks.

## Before you start

Please:

- search existing issues before opening a new one
- keep changes focused and reasonably small
- avoid unrelated refactors in feature or bug-fix pull requests
- do not include secrets, credentials, tokens, private data, or proprietary code
- preserve backward compatibility unless a breaking change is intentional and documented

## Development requirements

Recommended local environment:

```text
Node.js >= 18
npm
React 18 or 19 for consumer testing
```

Clone and install:

```bash
git clone https://github.com/BAGHERIFarzad/fb-components.git
cd fb-components
npm install
```

## Development commands

```bash
npm run typecheck
npm run build
npm run package:size
npm run install-test
npm run release:check
```

All checks should pass before opening a pull request.

## Adding a component

1. Place it in the appropriate category under `src/`.
2. Export it from that category's `index.ts`.
3. Export it through the package root when appropriate.
4. Include any required CSS in the category build path.
5. Ensure TypeScript declarations build successfully.
6. Add or update documentation.
7. Run `npm run release:check`.
8. Confirm the package-size guard and fresh install test pass.

Do not add Pro-only source code to the public npm package.

## Public API changes

Changes to exports, props, category entry points, or CSS contracts are public API changes. Document user-visible changes in `CHANGELOG.md`.

## Commit messages

Examples:

```text
feat: add animated status badge
fix: correct radial progress animation
docs: improve installation examples
ci: add package validation
refactor: simplify button exports
chore: update dependencies
```

## Pull requests

A good pull request should:

- explain the problem or goal
- describe the implementation
- mention public API changes
- include screenshots or recordings for visible UI changes when useful
- update documentation when behavior changes
- update `CHANGELOG.md` when user-visible
- pass all required CI checks

Required checks:

```text
Typecheck and Build
Package Size Guard
Fresh Install Test
```

## Security

Do not report sensitive vulnerabilities in a public issue. See [SECURITY.md](./SECURITY.md).

## Code of Conduct

Participation is governed by [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions may be distributed under the MIT License used by this project.
