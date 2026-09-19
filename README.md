# FB Components

> Production-minded React + TypeScript components for AI interfaces, motion, dashboards, data visualization, SaaS experiences, and modern product UI.

[![npm version](https://img.shields.io/npm/v/@farzadbagheri/fb-components?style=flat-square&label=npm)](https://www.npmjs.com/package/@farzadbagheri/fb-components)
[![npm downloads](https://img.shields.io/npm/dm/@farzadbagheri/fb-components?style=flat-square)](https://www.npmjs.com/package/@farzadbagheri/fb-components)
[![CI](https://img.shields.io/github/actions/workflow/status/BAGHERIFarzad/fb-components/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/BAGHERIFarzad/fb-components/actions)
[![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

FB Components is a modern component library for teams building polished React products. It combines expressive visuals with practical package architecture: typed APIs, category entry points, category-specific CSS, React 18/19 support, ESM/CommonJS builds, accessibility-aware patterns, and real consumer-install validation.

**Current release:** `0.1.5`

**23 public components · React 18/19 · TypeScript · ESM/CJS · Category imports · Accessibility-aware**

[Live Components](https://farzadbagheri.fr/en/components) ·
[npm](https://www.npmjs.com/package/@farzadbagheri/fb-components) ·
[Component API](./COMPONENTS.md) ·
[Examples](./EXAMPLES.md) ·
[Why FB Components?](./WHY-FB-COMPONENTS.md) ·
[Showcase](./SHOWCASE.md)

---

## Quick Start

Install the package:

```bash
npm install @farzadbagheri/fb-components
```

Import from a focused category:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function Example() {
  return (
    <GlowButton>
      Get started
    </GlowButton>
  );
}
```

Or import from the root package:

```tsx
import {
  GlowButton,
  AiPromptBox,
  MetricGrid,
} from "@farzadbagheri/fb-components";

import "@farzadbagheri/fb-components/styles.css";
```

---

## Why FB Components?

Many UI libraries optimize either for visual impact or for production ergonomics. FB Components is built to do both.

- **Production-minded** — typed APIs, package validation, predictable exports, and real consumer-install checks.
- **TypeScript-first** — declarations ship with the package.
- **Focused imports** — import JavaScript and CSS by category instead of loading the whole library.
- **React 18 + 19** — designed for current React applications.
- **Accessibility-aware** — native semantics, ARIA patterns, keyboard behavior, and accessibility-focused testing where appropriate.
- **Product-oriented** — components for AI interfaces, dashboards, SaaS experiences, motion, data visualization, and landing pages.
- **Framework-friendly** — works well with modern React tooling including Vite and Next.js.

Read the full positioning guide: [WHY-FB-COMPONENTS.md](./WHY-FB-COMPONENTS.md)

---

## Explore the Library

### Backgrounds

- `PredictiveArc`
- `SignalParticles`
- `DotMatrix`
- `GradientMesh`
- `AuroraGrid`
- `NoiseField`

```tsx
import {
  PredictiveArc,
  AuroraGrid,
} from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";
```

### Buttons

- `MagneticButton`
- `GlowButton`
- `GlassButton`

```tsx
import {
  MagneticButton,
  GlowButton,
  GlassButton,
} from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";
```

### Text

- `RevealText`
- `BlurReveal`

```tsx
import {
  RevealText,
  BlurReveal,
} from "@farzadbagheri/fb-components/text";

import "@farzadbagheri/fb-components/text.css";
```

### UI

- `SpotlightCard`
- `GlassCard`

```tsx
import {
  SpotlightCard,
  GlassCard,
} from "@farzadbagheri/fb-components/ui";

import "@farzadbagheri/fb-components/ui.css";
```

### Motion

- `GlowCursor`
- `MagneticCursor`

```tsx
import {
  GlowCursor,
  MagneticCursor,
} from "@farzadbagheri/fb-components/motion";

import "@farzadbagheri/fb-components/motion.css";
```

### AI

- `AiPromptBox`
- `StreamingResponse`

```tsx
import {
  AiPromptBox,
  StreamingResponse,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";
```

### Heroes

- `SaasLaunchHero`

```tsx
import {
  SaasLaunchHero,
} from "@farzadbagheri/fb-components/heroes";

import "@farzadbagheri/fb-components/heroes.css";
```

### Landing Pages

- `StartupLanding`
- `LivingWorldLanding`

```tsx
import {
  StartupLanding,
  LivingWorldLanding,
} from "@farzadbagheri/fb-components/landing";

import "@farzadbagheri/fb-components/landing.css";
```

### Data

- `AnimatedCounter`
- `RadialProgress`
- `MetricGrid`

```tsx
import {
  AnimatedCounter,
  RadialProgress,
  MetricGrid,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";
```

---

## Popular Components

### GlowButton

A focused CTA button with configurable glow behavior.

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function CTA() {
  return (
    <GlowButton>
      Launch product
    </GlowButton>
  );
}
```

### AiPromptBox

A polished prompt input pattern for AI-native interfaces.

```tsx
import { AiPromptBox } from "@farzadbagheri/fb-components/ai";
import "@farzadbagheri/fb-components/ai.css";

export function AssistantInput() {
  return (
    <AiPromptBox
      placeholder="Ask anything..."
      modelLabel="FB AI · Fast"
      onSubmit={() => undefined}
    />
  );
}
```

### RadialProgress

A compact progress visualization for dashboards and product metrics.

```tsx
import { RadialProgress } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function Completion() {
  return (
    <RadialProgress
      value={72}
      label="COMPLETE"
      aria-label="Profile completion"
    />
  );
}
```

### SaasLaunchHero

A complete hero section for modern SaaS landing pages.

```tsx
import { SaasLaunchHero } from "@farzadbagheri/fb-components/heroes";
import "@farzadbagheri/fb-components/heroes.css";

export function LandingHero() {
  return (
    <SaasLaunchHero
      eyebrow="BUILT FOR MODERN TEAMS"
      title={"Ship faster.\nScale smarter."}
      primaryLabel="Start free"
      secondaryLabel="See demo"
    />
  );
}
```

---

## Live Showcase

The interactive component platform includes:

- live previews
- searchable catalog
- Free / Pro filters
- category filtering
- interactive playgrounds
- copy-paste usage examples
- installation snippets
- props and configuration tables
- source-code views
- EN / FR routes
- previous / next component navigation

Explore it here:

**https://farzadbagheri.fr/en/components**

French:

**https://farzadbagheri.fr/fr/composants**

---

## Package Entry Points

FB Components exposes both the root package and category-level entry points:

```text
@farzadbagheri/fb-components
@farzadbagheri/fb-components/backgrounds
@farzadbagheri/fb-components/buttons
@farzadbagheri/fb-components/text
@farzadbagheri/fb-components/ui
@farzadbagheri/fb-components/motion
@farzadbagheri/fb-components/ai
@farzadbagheri/fb-components/heroes
@farzadbagheri/fb-components/landing
@farzadbagheri/fb-components/data
```

CSS entry points:

```text
@farzadbagheri/fb-components/styles.css
@farzadbagheri/fb-components/backgrounds.css
@farzadbagheri/fb-components/buttons.css
@farzadbagheri/fb-components/text.css
@farzadbagheri/fb-components/ui.css
@farzadbagheri/fb-components/motion.css
@farzadbagheri/fb-components/ai.css
@farzadbagheri/fb-components/heroes.css
@farzadbagheri/fb-components/landing.css
@farzadbagheri/fb-components/data.css
```

The package also exposes:

```text
@farzadbagheri/fb-components/package.json
```

---

## TypeScript

Type declarations are generated and published with the package.

```tsx
import type { ComponentProps } from "react";
import { GlowButton } from "@farzadbagheri/fb-components/buttons";

type GlowButtonProps =
  ComponentProps<typeof GlowButton>;
```

Editors such as VS Code can provide type checking and IntelliSense directly from the package.

---

## CSS Strategy

You can choose between two approaches.

### Category CSS

Recommended when you want focused imports:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

### Root CSS

Useful when an application uses components across many categories:

```tsx
import "@farzadbagheri/fb-components/styles.css";
```

CSS files are marked as side effects so bundlers do not incorrectly remove imported component styles.

---

## React Compatibility

FB Components supports:

```text
React 18
React 19
```

The package declares React and ReactDOM as peer dependencies so your application controls the installed React version.

---

## Accessibility

Accessibility is treated as part of component design rather than an afterthought.

Depending on the component, this can include:

- native semantic elements
- `aria-*` attributes
- keyboard interaction
- accessible labels
- reduced-motion handling
- accessibility-oriented tests

Consumers remain responsible for providing meaningful accessible labels and content for their own product context.

---

## Vite

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install @farzadbagheri/fb-components
npm run dev
```

Then:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

---

## Next.js

Install normally:

```bash
npm install @farzadbagheri/fb-components
```

For interactive client-side components, use them from a Client Component when required:

```tsx
"use client";

import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export default function Example() {
  return (
    <GlowButton>
      Continue
    </GlowButton>
  );
}
```

See [EXAMPLES.md](./EXAMPLES.md) for more usage patterns.

---

## Documentation

| Resource | Purpose |
| --- | --- |
| [COMPONENTS.md](./COMPONENTS.md) | Public component API reference |
| [EXAMPLES.md](./EXAMPLES.md) | Practical React, Vite, Next.js, AI UI, dashboard, and accessibility examples |
| [WHY-FB-COMPONENTS.md](./WHY-FB-COMPONENTS.md) | Positioning and design philosophy |
| [SHOWCASE.md](./SHOWCASE.md) | Showcase-oriented component overview |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | Repository structure, testing, package architecture, and development workflow |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Contribution guide |
| [RELEASING.md](./RELEASING.md) | Release process |
| [SECURITY.md](./SECURITY.md) | Security reporting guidance |
| [CHANGELOG.md](./CHANGELOG.md) | Release history |

---

## Quality

The current public library is validated with:

- TypeScript type checking
- Vitest
- accessibility-oriented tests
- ESM builds
- CommonJS builds
- TypeScript declaration generation
- package-size limits
- packed-package inspection
- fresh consumer installation verification
- root export verification

Current validated test suite:

```text
23 test files
307 passing tests
100% function coverage across the measured public component set
```

Current package validation for `0.1.5`:

| Metric | Current | Limit |
| --- | ---: | ---: |
| Packed size | ~85.7 kB | 100 kB |
| Unpacked size | ~546.5 kB | 600 kB |
| Files | 121 | 150 |

Run the complete release validation locally:

```bash
npm run release:check
```

---

## Development

Clone the repository:

```bash
git clone https://github.com/BAGHERIFarzad/fb-components.git
cd fb-components
npm install
```

Useful commands:

```bash
npm run typecheck
npm test
npm run test:coverage
npm run build
npm run package:size
npm run install-test
npm run release:check
```

See [DEVELOPMENT.md](./DEVELOPMENT.md) for the complete development workflow.

---

## Contributing

Contributions, component ideas, bug reports, documentation improvements, and accessibility feedback are welcome.

Before contributing, read:

[CONTRIBUTING.md](./CONTRIBUTING.md)

When opening a pull request, please make sure relevant validation passes:

```bash
npm run typecheck
npm test
npm run build
```

For release-level validation:

```bash
npm run release:check
```

---

## Roadmap

Some areas being explored for future releases:

- additional AI-native interface components
- richer dashboard primitives
- tables and data-heavy UI
- command palette patterns
- notification and feedback components
- skeleton/loading states
- modal and drawer patterns
- tabs and navigation primitives
- additional complete product sections
- deeper framework examples
- stronger SSR guidance
- broader accessibility coverage
- community-requested components

Roadmap items are exploratory and may change.

---

## Support the Project

If FB Components helps you build something useful:

- star the repository
- share it with another React developer
- try the package in a real project
- open an issue with feedback
- suggest a component
- contribute an improvement

GitHub:

**https://github.com/BAGHERIFarzad/fb-components**

npm:

**https://www.npmjs.com/package/@farzadbagheri/fb-components**

Live documentation:

**https://farzadbagheri.fr/en/components**

---

## License

MIT © Farzad Bagheri
