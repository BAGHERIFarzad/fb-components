# FB Components Showcase

A practical showcase of the public FB Components library.

FB Components is a focused React + TypeScript component library for modern product interfaces, with production-minded building blocks for AI experiences, motion, dashboards, data visualization, SaaS sections, landing pages, and polished product UI.

---

## Install

```bash
npm install @farzadbagheri/fb-components
```

React support:

```text
React 18
React 19
```

---

## Quick Example

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function Example() {
  return <GlowButton>Launch Product</GlowButton>;
}
```

---

# Component Categories

FB Components currently includes 22 public components across nine categories.

| Category | Components |
| --- | --- |
| Backgrounds | PredictiveArc, SignalParticles, DotMatrix, GradientMesh, AuroraGrid, NoiseField |
| Buttons | MagneticButton, GlowButton, GlassButton |
| Text | RevealText, BlurReveal |
| UI | SpotlightCard, GlassCard |
| Motion | GlowCursor, MagneticCursor |
| AI | AiPromptBox, StreamingResponse |
| Heroes | SaasLaunchHero |
| Landing | StartupLanding |
| Data | AnimatedCounter, RadialProgress, MetricGrid |

---

# Backgrounds

Import:

```tsx
import {
  PredictiveArc,
  SignalParticles,
  DotMatrix,
  GradientMesh,
  AuroraGrid,
  NoiseField,
} from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";
```

## PredictiveArc

A visual background for futuristic, analytical, AI, and data-oriented interfaces.

```tsx
import { PredictiveArc } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function PredictiveArcDemo() {
  return (
    <section style={{ position: "relative", minHeight: 420 }}>
      <PredictiveArc />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Predict what comes next.</h1>
      </div>
    </section>
  );
}
```

## SignalParticles

A particle-based visual layer for AI, network, signal, and technology experiences.

## DotMatrix

A structured dot-pattern background for dashboards, product surfaces, and technical interfaces.

## GradientMesh

A smooth visual background for premium SaaS, product, and landing-page experiences.

## AuroraGrid

A futuristic grid-and-light background suitable for AI and developer products.

## NoiseField

A subtle textural visual layer for premium product surfaces.

---

# Buttons

Import:

```tsx
import {
  MagneticButton,
  GlowButton,
  GlassButton,
} from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";
```

## MagneticButton

```tsx
import { MagneticButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function MagneticButtonDemo() {
  return <MagneticButton>Explore</MagneticButton>;
}
```

## GlowButton

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function GlowButtonDemo() {
  return <GlowButton>Launch Product</GlowButton>;
}
```

## GlassButton

```tsx
import { GlassButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function GlassButtonDemo() {
  return <GlassButton>View Dashboard</GlassButton>;
}
```

---

# Text

Import:

```tsx
import {
  RevealText,
  BlurReveal,
} from "@farzadbagheri/fb-components/text";

import "@farzadbagheri/fb-components/text.css";
```

## RevealText

```tsx
import { RevealText } from "@farzadbagheri/fb-components/text";
import "@farzadbagheri/fb-components/text.css";

export function RevealTextDemo() {
  return <RevealText>Build interfaces people remember.</RevealText>;
}
```

## BlurReveal

```tsx
import { BlurReveal } from "@farzadbagheri/fb-components/text";
import "@farzadbagheri/fb-components/text.css";

export function BlurRevealDemo() {
  return <BlurReveal>From idea to polished product UI.</BlurReveal>;
}
```

---

# UI

Import:

```tsx
import {
  SpotlightCard,
  GlassCard,
} from "@farzadbagheri/fb-components/ui";

import "@farzadbagheri/fb-components/ui.css";
```

## SpotlightCard

```tsx
import { SpotlightCard } from "@farzadbagheri/fb-components/ui";
import "@farzadbagheri/fb-components/ui.css";

export function SpotlightCardDemo() {
  return (
    <SpotlightCard>
      <h3>AI Workspace</h3>
      <p>Review, analyze, and ship with confidence.</p>
    </SpotlightCard>
  );
}
```

## GlassCard

```tsx
import { GlassCard } from "@farzadbagheri/fb-components/ui";
import "@farzadbagheri/fb-components/ui.css";

export function GlassCardDemo() {
  return (
    <GlassCard>
      <h3>Monthly Usage</h3>
      <p>12,480 requests</p>
    </GlassCard>
  );
}
```

---

# Motion

Import:

```tsx
import {
  GlowCursor,
  MagneticCursor,
} from "@farzadbagheri/fb-components/motion";

import "@farzadbagheri/fb-components/motion.css";
```

## GlowCursor

```tsx
import { GlowCursor } from "@farzadbagheri/fb-components/motion";
import "@farzadbagheri/fb-components/motion.css";

export function GlowCursorDemo() {
  return (
    <>
      <GlowCursor />
      <main>Move your pointer around the page.</main>
    </>
  );
}
```

## MagneticCursor

```tsx
import { MagneticCursor } from "@farzadbagheri/fb-components/motion";
import "@farzadbagheri/fb-components/motion.css";

export function MagneticCursorDemo() {
  return (
    <>
      <MagneticCursor />
      <main>Interactive motion experience</main>
    </>
  );
}
```

---

# AI

Import:

```tsx
import {
  AiPromptBox,
  StreamingResponse,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";
```

## AiPromptBox

A polished prompt input for AI products and assistant-style interfaces.

```tsx
import { AiPromptBox } from "@farzadbagheri/fb-components/ai";
import "@farzadbagheri/fb-components/ai.css";

export function AiPromptBoxDemo() {
  return <AiPromptBox placeholder="Ask anything..." />;
}
```

## StreamingResponse

A response presentation component for AI and streaming-content experiences.

```tsx
import { StreamingResponse } from "@farzadbagheri/fb-components/ai";
import "@farzadbagheri/fb-components/ai.css";

export function StreamingResponseDemo() {
  return <StreamingResponse>Your analysis is ready.</StreamingResponse>;
}
```

---

# Heroes

```tsx
import { SaasLaunchHero } from "@farzadbagheri/fb-components/heroes";
import "@farzadbagheri/fb-components/heroes.css";

export function SaasLaunchHeroDemo() {
  return <SaasLaunchHero />;
}
```

---

# Landing

```tsx
import { StartupLanding } from "@farzadbagheri/fb-components/landing";
import "@farzadbagheri/fb-components/landing.css";

export function StartupLandingDemo() {
  return <StartupLanding />;
}
```

---

# Data

Import:

```tsx
import {
  AnimatedCounter,
  RadialProgress,
  MetricGrid,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";
```

## AnimatedCounter

```tsx
import { AnimatedCounter } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function AnimatedCounterDemo() {
  return <AnimatedCounter value={12840} />;
}
```

## RadialProgress

```tsx
import { RadialProgress } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function RadialProgressDemo() {
  return <RadialProgress value={72} ariaLabel="Profile completion" />;
}
```

## MetricGrid

```tsx
import { MetricGrid } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function MetricGridDemo() {
  return <MetricGrid />;
}
```

---

# CSS Strategy

Full stylesheet:

```tsx
import "@farzadbagheri/fb-components/styles.css";
```

Or category CSS:

```tsx
import "@farzadbagheri/fb-components/buttons.css";
import "@farzadbagheri/fb-components/data.css";
```

---

# TypeScript

FB Components ships TypeScript declarations. No separate `@types` package is required.

---

# Accessibility

FB Components includes accessibility-aware behavior and automated accessibility-oriented testing.

Patterns include:

- native interactive semantics
- explicit accessible labels where needed
- keyboard-compatible controls
- ARIA progress semantics
- decorative content hidden from assistive technologies

---

# Package Quality

The public package is validated through:

- TypeScript typecheck
- 307 automated tests
- ESM build
- CommonJS build
- TypeScript declaration generation
- package-size guard
- fresh consumer installation test
- root export verification
- category export verification
- CSS export resolution
- real npm registry installation verification

Current public package:

```text
@farzadbagheri/fb-components@0.1.4
```

---

# Suggested Live Showcase Structure

## 1. Hero

Headline:

> Production-minded React components for modern product experiences.

Supporting copy:

> Build polished AI interfaces, dashboards, SaaS pages, motion experiences, and data-rich product UI with React + TypeScript.

Primary CTA:

```text
Explore Components
```

Secondary CTA:

```text
View on GitHub
```

Install command:

```bash
npm install @farzadbagheri/fb-components
```

## 2. Why FB Components?

Suggested value cards:

- Production-minded
- React 18/19
- TypeScript-first
- Category imports
- Accessible APIs
- Tested package
- AI-ready
- Lightweight adoption

## 3. Component Explorer

Recommended navigation:

```text
All
Backgrounds
Buttons
Text
UI
Motion
AI
Heroes
Landing
Data
```

Each component card should contain:

- component name
- live preview
- category
- short purpose
- copyable import
- copyable usage example
- documentation link

## 4. AI Experience

Feature `AiPromptBox` and `StreamingResponse` together in a realistic assistant demo.

## 5. Dashboard Experience

Combine:

- AnimatedCounter
- RadialProgress
- MetricGrid
- GlassCard
- SpotlightCard

## 6. SaaS Experience

Feature:

- SaasLaunchHero
- StartupLanding
- GradientMesh
- AuroraGrid
- GlowButton

## 7. Motion Experience

Feature:

- GlowCursor
- MagneticCursor
- MagneticButton
- RevealText
- BlurReveal

## 8. Developer Experience

Show:

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

Then highlight:

- TypeScript declarations
- ESM + CommonJS
- category exports
- category CSS
- React 18/19
- package tests

## 9. Final CTA

Headline:

> Build something people remember.

Actions:

```text
Install from npm
Explore GitHub
Read Documentation
```

---

# Useful Links

npm:

https://www.npmjs.com/package/@farzadbagheri/fb-components

GitHub:

https://github.com/BAGHERIFarzad/fb-components

Documentation:

https://farzadbagheri.fr/en/components

---

# Positioning

**FB Components is a focused React + TypeScript component library for modern product interfaces, combining polished visuals, accessible APIs, category-based imports, production-oriented testing, and practical support for AI, SaaS, motion, data, and landing-page experiences.**
