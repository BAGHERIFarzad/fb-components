# Changelog

All notable changes to FB Components will be documented in this file.

The project follows Semantic Versioning.

---

## 0.1.6

### Added

- `LivingWorldLanding`
- 23 public React components

### Improved

- Fresh-install validation now verifies landing exports and `landing.css`
- Reduced published package size by removing generated sourcemaps

## [0.1.5] - 2026-09-19

### Added

- Added `WHY-FB-COMPONENTS.md` with project positioning, package philosophy, architecture principles, and adoption guidance.
- Added `SHOWCASE.md` documenting the live component showcase and interactive documentation experience.
- Added `ROADMAP.md` describing the public direction of FB Components and planned component, documentation, accessibility, and developer-experience improvements.
- Added `SUPPORT.md` with clear guidance for bug reports, feature requests, security issues, documentation questions, and community support.
- Added clearer contribution paths for new component proposals, documentation improvements, accessibility work, testing, and developer-experience enhancements.
- Added live showcase, roadmap, support, examples, API documentation, and contribution links to the main project documentation.

### Changed

- Reworked the README for stronger npm and GitHub adoption with clearer positioning, installation guidance, category imports, framework compatibility, popular component examples, live showcase links, documentation discovery, and contribution calls to action.
- Improved npm-facing documentation links so repository-only resources resolve correctly when viewed from the npm package page.
- Improved package discoverability for React 18, React 19, TypeScript, Vite, Next.js, AI interfaces, motion, dashboards, data visualization, SaaS, and modern product UI.
- Improved repository contributor onboarding with clearer issue categories and contribution opportunities.
- Hardened the npm publishing workflow by replacing separate typecheck and build steps with the complete `npm run release:check` validation pipeline.
- Publishing now validates tests, builds, declarations, package size, packed-package behavior, and fresh consumer installation before npm publication.
- Improved release consistency by using the same validation pipeline locally and in the trusted GitHub Actions publishing workflow.

### Quality

- 23 test files passing.
- 307 tests passing.
- 100% function coverage across the measured public component set.
- TypeScript typecheck passing.
- ESM build passing.
- CommonJS build passing.
- TypeScript declaration generation passing.
- Package-size guard passing.
- Fresh React 19 consumer installation verification passing.
- All 22 root component exports verified.
- Category exports and CSS entry points verified from the packed package.

### Package Validation

Package validation remains within the configured limits:

| Metric | Current | Limit |
|---|---:|---:|
| Packed size | 84.3 kB | 100 kB |
| Unpacked size | 532.3 kB | 600 kB |
| Files | 121 | 150 |

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