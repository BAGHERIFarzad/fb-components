# Changelog

All notable changes to FB Components will be documented in this file.

The project follows Semantic Versioning.

---

## [0.1.4] - 2026-09-17

### Added

- Added comprehensive `COMPONENTS.md` API documentation for all 22 public components.
- Added `EXAMPLES.md` with practical React, TypeScript, Vite, Next.js, accessibility, AI UI, dashboard, motion, hero, and landing-page examples.
- Added `DEVELOPMENT.md` covering repository structure, testing, coverage, release validation, package architecture, and contributor workflows.
- Added structured GitHub bug report and feature request templates.
- Added a GitHub pull request template with validation, accessibility, API-impact, documentation, and package checks.
- Added `.gitattributes` to normalize repository text files and define binary file handling.
- Added `./package.json` to the public package export map.
- Added `COMPONENTS.md` and `EXAMPLES.md` to the published npm package.

### Changed

- Expanded automated test coverage across all 22 public components.
- Increased the public test suite to 307 passing tests.
- Improved meaningful branch coverage without adding brittle implementation-only tests.
- Reworked the README with installation guidance, category imports, CSS strategy, TypeScript usage, accessibility guidance, compatibility details, testing information, and developer documentation links.
- Improved npm package description and author metadata.
- Expanded npm keywords for React, TypeScript, component libraries, AI UI, motion, dashboards, data visualization, SaaS, accessibility, Vite, and Next.js discoverability.
- Improved GitHub repository About metadata and repository topics.
- Added a custom GitHub social preview.
- Improved GitHub contributor experience and repository presentation.
- Standardized documentation around category-specific imports and CSS entry points.

### Quality

- 23 test files passing.
- 307 tests passing.
- 100% function coverage across the measured public component set.
- Full TypeScript typecheck passing.
- ESM build passing.
- CommonJS build passing.
- TypeScript declaration generation passing.
- Package-size guard passing.
- Fresh consumer installation verification passing.
- All 22 root component exports verified from the packed package.

### Package Validation

Current package validation remains within the configured limits:

| Metric | Current | Limit |
|---|---:|---:|
| Packed size | 83.7 kB | 100 kB |
| Unpacked size | 533.9 kB | 600 kB |
| Files | 121 | 150 |

---

## [0.1.1] - 2026-09-08

### Changed

- Added trusted npm publishing with GitHub Actions.
- Added npm provenance-ready release workflow.
- Improved package README and documentation.
- Added release automation foundation.

---

## [0.1.0] - 2026-09-08

### Added

- First public release of FB Components.
- 22 free React components.
- TypeScript declarations.
- ESM and CommonJS builds.
- Root and category-based exports.
- Category-specific CSS entry points.
- React 18 and React 19 support.
- Tree-shaking-friendly JavaScript structure.
- MIT license.