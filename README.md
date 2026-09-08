# FB Components

[![npm version](https://img.shields.io/npm/v/@farzadbagheri/fb-components.svg)](https://www.npmjs.com/package/@farzadbagheri/fb-components)
[![npm downloads](https://img.shields.io/npm/dm/@farzadbagheri/fb-components.svg)](https://www.npmjs.com/package/@farzadbagheri/fb-components)
[![license](https://img.shields.io/npm/l/@farzadbagheri/fb-components.svg)](./LICENSE)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)

**Production-minded React components for motion, AI interfaces, data visualization, and modern product experiences.**

FB Components is a modern React component library built for polished product interfaces. It includes reusable components with TypeScript declarations, ESM/CommonJS builds, category-based entry points, and category-specific CSS so you can import only what you need.

- **npm:** `@farzadbagheri/fb-components`
- **Current release:** `0.1.0`
- **Website:** https://farzadbagheri.fr/en/components
- **GitHub:** https://github.com/BAGHERIFarzad/fb-components
- **License:** MIT

---

## Highlights

- 22 free React components
- React 18 and React 19 support
- TypeScript declarations included
- ESM and CommonJS builds
- Tree-shaking-friendly JavaScript exports
- Category-based imports
- Category-specific CSS exports
- Root convenience import
- Modern UI, motion, AI, data, hero, landing, and background components
- Simple installation and CSS setup

---

## Installation

```bash
npm install @farzadbagheri/fb-components
```

Requirements:

```text
React >=18 <20
React DOM >=18 <20
Node >=18
```

`lucide-react` is installed automatically as a package dependency.

---

## Recommended usage

For the smallest CSS footprint, import from a category entry point:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function Example() {
  return <GlowButton>Launch</GlowButton>;
}
```

This is the recommended pattern when you only need components from one category.

---

## Convenience usage

You can also import from the root package:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components";
import "@farzadbagheri/fb-components/styles.css";

export function Example() {
  return <GlowButton>Launch</GlowButton>;
}
```

The root JavaScript entry remains tree-shaking friendly, while `styles.css` includes the complete stylesheet bundle.

---

## Components

### Backgrounds

```tsx
import {
  PredictiveArc,
  SignalParticles,
  DotMatrix,
  GradientMesh,
  AuroraGrid,
  NoiseField
} from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";
```

Available components:

- `PredictiveArc`
- `SignalParticles`
- `DotMatrix`
- `GradientMesh`
- `AuroraGrid`
- `NoiseField`

### Buttons

```tsx
import {
  MagneticButton,
  GlowButton,
  GlassButton
} from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";
```

Available components:

- `MagneticButton`
- `GlowButton`
- `GlassButton`

### Text Animation

```tsx
import {
  RevealText,
  BlurReveal
} from "@farzadbagheri/fb-components/text";

import "@farzadbagheri/fb-components/text.css";
```

Available components:

- `RevealText`
- `BlurReveal`

### UI

```tsx
import {
  SpotlightCard,
  GlassCard
} from "@farzadbagheri/fb-components/ui";

import "@farzadbagheri/fb-components/ui.css";
```

Available components:

- `SpotlightCard`
- `GlassCard`

### Motion

```tsx
import {
  GlowCursor,
  MagneticCursor
} from "@farzadbagheri/fb-components/motion";

import "@farzadbagheri/fb-components/motion.css";
```

Available components:

- `GlowCursor`
- `MagneticCursor`

### AI

```tsx
import {
  AiPromptBox,
  StreamingResponse
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";
```

Available components:

- `AiPromptBox`
- `StreamingResponse`

### Heroes

```tsx
import { SaasLaunchHero } from "@farzadbagheri/fb-components/heroes";
import "@farzadbagheri/fb-components/heroes.css";
```

Available component:

- `SaasLaunchHero`

### Landing Pages

```tsx
import { StartupLanding } from "@farzadbagheri/fb-components/landing";
import "@farzadbagheri/fb-components/landing.css";
```

Available component:

- `StartupLanding`

### Data

```tsx
import {
  AnimatedCounter,
  RadialProgress,
  MetricGrid
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";
```

Available components:

- `AnimatedCounter`
- `RadialProgress`
- `MetricGrid`

---

## All root exports

The root entry exports all 22 free components:

```tsx
import {
  AiPromptBox,
  AnimatedCounter,
  AuroraGrid,
  BlurReveal,
  DotMatrix,
  GlassButton,
  GlassCard,
  GlowButton,
  GlowCursor,
  GradientMesh,
  MagneticButton,
  MagneticCursor,
  MetricGrid,
  NoiseField,
  PredictiveArc,
  RadialProgress,
  RevealText,
  SaasLaunchHero,
  SignalParticles,
  SpotlightCard,
  StartupLanding,
  StreamingResponse
} from "@farzadbagheri/fb-components";
```

---

## Package entry points

| Category | JavaScript import | CSS import |
|---|---|---|
| Root | `@farzadbagheri/fb-components` | `@farzadbagheri/fb-components/styles.css` |
| Backgrounds | `@farzadbagheri/fb-components/backgrounds` | `@farzadbagheri/fb-components/backgrounds.css` |
| Buttons | `@farzadbagheri/fb-components/buttons` | `@farzadbagheri/fb-components/buttons.css` |
| Text | `@farzadbagheri/fb-components/text` | `@farzadbagheri/fb-components/text.css` |
| UI | `@farzadbagheri/fb-components/ui` | `@farzadbagheri/fb-components/ui.css` |
| Motion | `@farzadbagheri/fb-components/motion` | `@farzadbagheri/fb-components/motion.css` |
| AI | `@farzadbagheri/fb-components/ai` | `@farzadbagheri/fb-components/ai.css` |
| Heroes | `@farzadbagheri/fb-components/heroes` | `@farzadbagheri/fb-components/heroes.css` |
| Landing | `@farzadbagheri/fb-components/landing` | `@farzadbagheri/fb-components/landing.css` |
| Data | `@farzadbagheri/fb-components/data` | `@farzadbagheri/fb-components/data.css` |

---

## CSS strategy

FB Components does **not** automatically inject the complete stylesheet when you import JavaScript.

### Category CSS — recommended

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

Use this when you want a smaller CSS footprint.

### Full stylesheet

```tsx
import { GlowButton } from "@farzadbagheri/fb-components";
import "@farzadbagheri/fb-components/styles.css";
```

Use this when you prefer convenience or are using components across several categories.

---

## TypeScript

Type declarations are included with the package. No separate `@types` package is required.

```tsx
import { RadialProgress } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function ProgressExample() {
  return <RadialProgress value={72} />;
}
```

---

## ESM and CommonJS

### ESM

```ts
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
```

### CommonJS

```js
const { GlowButton } = require("@farzadbagheri/fb-components/buttons");
```

---

## Tree shaking

FB Components is built with category entry points and tree-shaking-friendly JavaScript output.

For performance-oriented applications, prefer:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

This avoids importing unrelated category CSS.

The root JavaScript entry can still be tree-shaken by modern bundlers, while the root stylesheet intentionally contains styles for all categories.

---

## Example: AI interface

```tsx
import {
  AiPromptBox,
  StreamingResponse
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

export function AiExample() {
  return (
    <div>
      <AiPromptBox />
      <StreamingResponse />
    </div>
  );
}
```

---

## Documentation and live previews

Explore the component catalog, live previews, installation guidance, and additional examples:

https://farzadbagheri.fr/en/components

French component pages:

https://farzadbagheri.fr/fr/composants

---

## MCP

FB Components also has an MCP-oriented component discovery experience in the wider FB Components platform, allowing compatible AI tooling to discover component metadata and source availability.

Documentation:

https://farzadbagheri.fr/en/components/mcp

The npm package itself remains a standard React package and does not require MCP to use the components.

---

## Free and Pro components

The npm package currently contains the **22 free components** listed in this README.

The wider FB Components catalog may also display Pro components. Pro source code is not included in the public npm package.

---

## Versioning

FB Components currently follows pre-1.0 semantic versioning:

```text
0.1.x  → patches and fixes
0.2.0  → new public features/components or meaningful API expansion
1.0.0  → stable public API milestone
```

Release history:

https://github.com/BAGHERIFarzad/fb-components/releases

---

## Contributing

Issues, bug reports, ideas, and feedback are welcome:

https://github.com/BAGHERIFarzad/fb-components/issues

When reporting a problem, please include:

- component name
- React version
- package version
- reproduction steps
- expected behavior
- actual behavior
- a minimal reproduction when possible

---

## Security

Please do not publish secrets, credentials, tokens, or private application data in public issues.

---

## License

MIT © 2026 Farzad Bagheri.

See [LICENSE](./LICENSE).

---

## Links

- **Website:** https://farzadbagheri.fr/en/components
- **npm:** https://www.npmjs.com/package/@farzadbagheri/fb-components
- **GitHub:** https://github.com/BAGHERIFarzad/fb-components
- **Releases:** https://github.com/BAGHERIFarzad/fb-components/releases
- **Issues:** https://github.com/BAGHERIFarzad/fb-components/issues
- **MCP docs:** https://farzadbagheri.fr/en/components/mcp

---

Built for modern React product experiences.
