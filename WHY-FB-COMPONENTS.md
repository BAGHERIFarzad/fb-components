# Why FB Components?

FB Components is built for developers who want polished React interfaces without pulling an entire design system into every project.

It focuses on a smaller, practical set of production-minded components for modern product experiences: AI interfaces, motion, dashboards, data visualization, SaaS sections, landing pages, and premium UI patterns.

## What makes FB Components different?

### 1. Production-minded, not demo-only

The goal is not to ship visual experiments that only look good in a playground.

FB Components is designed around real application concerns:

- typed public APIs
- native React behavior
- accessibility-aware semantics
- predictable component props
- category-based imports
- category-specific CSS
- clean package exports
- ESM and CommonJS output
- package-size validation
- fresh consumer install verification

Every public component is intended to be usable inside real products, not just screenshots.

---

### 2. Focused package architecture

You do not need to import the whole library when you only need one category.

Example:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

Or:

```tsx
import {
  AiPromptBox,
  StreamingResponse,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";
```

The package exposes category entry points for:

- backgrounds
- buttons
- text
- UI
- motion
- AI
- heroes
- landing
- data

This gives developers tighter control over JavaScript imports and CSS usage.

---

### 3. Built for modern product UI

FB Components is especially suited to interfaces such as:

- AI assistants
- SaaS dashboards
- developer tools
- analytics interfaces
- startup landing pages
- premium marketing pages
- internal tools
- modern product surfaces

The library includes components such as:

- `AiPromptBox`
- `StreamingResponse`
- `AnimatedCounter`
- `RadialProgress`
- `MetricGrid`
- `SaasLaunchHero`
- `StartupLanding`
- `SpotlightCard`
- `GlassCard`
- motion and cursor components
- animated background components

---

### 4. Strong TypeScript experience

TypeScript declarations are included with the package.

No separate `@types` package is required.

```tsx
import { RadialProgress } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function Example() {
  return (
    <RadialProgress
      value={72}
      ariaLabel="Profile completion"
    />
  );
}
```

The public API is intentionally typed so components are easier to discover, compose, and refactor.

---

### 5. Accessibility is part of the API

Accessibility is treated as a component requirement rather than an afterthought.

The library includes patterns such as:

- native button semantics
- keyboard-compatible controls
- progressbar ARIA semantics
- explicit accessible labels
- decorative elements hidden from assistive technology
- automated accessibility-oriented tests

Consumers should still validate complete page accessibility in their own application context, but the components are designed with sensible semantics from the start.

---

### 6. Tested as a real package

FB Components is validated beyond simple component rendering tests.

The release process includes:

- TypeScript typecheck
- 307 automated tests
- ESM build verification
- CommonJS build verification
- TypeScript declaration generation
- package-size guard
- fresh consumer installation verification
- public export checks
- category export checks
- CSS export resolution checks

The published package is also verified from the npm registry after release.

---

### 7. React 18 and React 19 support

FB Components supports:

```text
React 18
React 19
```

Peer dependency range:

```text
>=18 <20
```

This makes the library suitable for current React applications while keeping the public API straightforward.

---

### 8. Small enough to understand

FB Components is intentionally not trying to become a giant all-purpose framework.

The current package contains 22 public components.

That makes the library:

- easier to explore
- easier to document
- easier to test
- easier to maintain
- easier to adopt selectively

The focus is on useful, polished building blocks rather than maximum component count.

---

## Who is FB Components for?

FB Components is a good fit if you are building:

- a React or TypeScript product
- an AI interface
- a SaaS application
- a dashboard
- a modern landing page
- a developer-focused product
- an analytics experience
- a polished internal tool

It is especially useful when you want stronger visuals than basic UI primitives without adopting a large design-system dependency.

---

## When should you not use it?

FB Components may not be the right choice if you need:

- a complete enterprise design system
- hundreds of form controls
- a full accessibility framework
- opinionated application routing
- state management
- a utility CSS framework
- a complete theme engine

FB Components is designed to complement your existing React stack, not replace it.

---

## Quick Start

```bash
npm install @farzadbagheri/fb-components
```

Example:

```tsx
import { GlassButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function Example() {
  return (
    <GlassButton>
      Explore
    </GlassButton>
  );
}
```

---

## Positioning Summary

**FB Components is a focused React + TypeScript component library for modern product interfaces, combining polished visuals, accessible APIs, category-based imports, production-oriented testing, and practical support for AI, SaaS, motion, data, and landing-page experiences.**

---

## Short Version

Use this when space is limited:

**Polished React + TypeScript components for AI interfaces, motion, dashboards, data visualization, SaaS heroes, landing pages, and modern product UI.**

---

## One-line Version

**Production-minded React components for modern product experiences.**
