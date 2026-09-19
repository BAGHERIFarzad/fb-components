# FB Components — Usage Examples

Practical copy-paste examples for:

```text
@farzadbagheri/fb-components
```

This guide complements:

- `README.md`
- `COMPONENTS.md`

It focuses on real integration patterns, category imports, CSS strategy, React usage, TypeScript, accessibility, and common compositions.

---

# Table of Contents

1. [Installation](#installation)
2. [Quick Start](#quick-start)
3. [Buttons](#buttons)
4. [Backgrounds](#backgrounds)
5. [Text Animations](#text-animations)
6. [UI Cards](#ui-cards)
7. [Motion](#motion)
8. [AI Interface](#ai-interface)
9. [Hero Section](#hero-section)
10. [Startup Landing](#startup-landing)
11. [Dashboard Metrics](#dashboard-metrics)
12. [Mixed Product Section](#mixed-product-section)
13. [Category CSS Strategy](#category-css-strategy)
14. [Full Stylesheet Strategy](#full-stylesheet-strategy)
15. [TypeScript Example](#typescript-example)
16. [Vite Example](#vite-example)
17. [Next.js Client Component Example](#nextjs-client-component-example)
18. [Next.js App Router Examples](#nextjs-app-router-examples)
19. [Accessibility Examples](#accessibility-examples)
20. [Recommended Composition Patterns](#recommended-composition-patterns)

---

# Installation

```bash
npm install @farzadbagheri/fb-components
```

Requirements:

```text
React >=18 <20
React DOM >=18 <20
Node >=18
```

---

# Quick Start

Use category imports when possible.

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function QuickStart() {
  return (
    <GlowButton>
      Launch
    </GlowButton>
  );
}
```

This keeps the CSS footprint focused on the category you use.

---

# Buttons

## GlowButton

```tsx
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function GlowButtonExample() {
  return (
    <GlowButton>
      Start now
    </GlowButton>
  );
}
```

---

## GlassButton

```tsx
import { GlassButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function GlassButtonExample() {
  return (
    <GlassButton
      tint="#9b7cff"
      opacity={0.12}
      blur={18}
      radius={18}
    >
      Explore
    </GlassButton>
  );
}
```

---

## MagneticButton

```tsx
import { MagneticButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";

export function MagneticButtonExample() {
  return (
    <MagneticButton>
      View project
    </MagneticButton>
  );
}
```

---

# Backgrounds

## PredictiveArc

```tsx
import { PredictiveArc } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function PredictiveArcExample() {
  return (
    <div style={{ minHeight: 320 }}>
      <PredictiveArc
        color="#9b7cff"
        background="#0d0d11"
        size={82}
        thickness={4}
        glow={24}
      />
    </div>
  );
}
```

---

## SignalParticles

```tsx
import { SignalParticles } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function SignalParticlesExample() {
  return (
    <div style={{ minHeight: 360 }}>
      <SignalParticles />
    </div>
  );
}
```

---

## DotMatrix

```tsx
import { DotMatrix } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function DotMatrixExample() {
  return (
    <div style={{ minHeight: 320 }}>
      <DotMatrix />
    </div>
  );
}
```

---

## GradientMesh

```tsx
import { GradientMesh } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function GradientMeshExample() {
  return (
    <div style={{ minHeight: 360 }}>
      <GradientMesh />
    </div>
  );
}
```

---

## AuroraGrid

```tsx
import { AuroraGrid } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function AuroraGridExample() {
  return (
    <div style={{ minHeight: 360 }}>
      <AuroraGrid />
    </div>
  );
}
```

---

## NoiseField

```tsx
import { NoiseField } from "@farzadbagheri/fb-components/backgrounds";
import "@farzadbagheri/fb-components/backgrounds.css";

export function NoiseFieldExample() {
  return (
    <div style={{ minHeight: 300 }}>
      <NoiseField />
    </div>
  );
}
```

---

# Text Animations

## RevealText

```tsx
import { RevealText } from "@farzadbagheri/fb-components/text";
import "@farzadbagheri/fb-components/text.css";

export function RevealTextExample() {
  return (
    <RevealText>
      Build better interfaces.
    </RevealText>
  );
}
```

---

## BlurReveal

```tsx
import { BlurReveal } from "@farzadbagheri/fb-components/text";
import "@farzadbagheri/fb-components/text.css";

export function BlurRevealExample() {
  return (
    <BlurReveal>
      Ship faster.
    </BlurReveal>
  );
}
```

---

# UI Cards

## GlassCard

```tsx
import { GlassCard } from "@farzadbagheri/fb-components/ui";
import "@farzadbagheri/fb-components/ui.css";

export function GlassCardExample() {
  return (
    <GlassCard>
      <h3>Project status</h3>
      <p>All systems operational.</p>
    </GlassCard>
  );
}
```

---

## SpotlightCard

```tsx
import { SpotlightCard } from "@farzadbagheri/fb-components/ui";
import "@farzadbagheri/fb-components/ui.css";

export function SpotlightCardExample() {
  return (
    <SpotlightCard>
      <h3>AI Platform</h3>
      <p>Build modern AI experiences.</p>
    </SpotlightCard>
  );
}
```

---

# Motion

## GlowCursor

```tsx
import { GlowCursor } from "@farzadbagheri/fb-components/motion";
import "@farzadbagheri/fb-components/motion.css";

export function GlowCursorExample() {
  return (
    <GlowCursor>
      <section
        style={{
          minHeight: 280,
          display: "grid",
          placeItems: "center",
        }}
      >
        <button type="button">
          Hover here
        </button>
      </section>
    </GlowCursor>
  );
}
```

---

## MagneticCursor

```tsx
import { MagneticCursor } from "@farzadbagheri/fb-components/motion";
import "@farzadbagheri/fb-components/motion.css";

export function MagneticCursorExample() {
  return (
    <MagneticCursor
      color="#b99cff"
      size={18}
      ringSize={44}
      magneticStrength={0.25}
    >
      <div
        style={{
          minHeight: 320,
          display: "grid",
          placeItems: "center",
        }}
      >
        <button
          type="button"
          data-magnetic-target
        >
          Explore
        </button>
      </div>
    </MagneticCursor>
  );
}
```

Use:

```tsx
data-magnetic-target
```

on any element that should attract the custom cursor.

---

# AI Interface

## Prompt Composer

```tsx
import { AiPromptBox } from "@farzadbagheri/fb-components/ai";
import "@farzadbagheri/fb-components/ai.css";

export function AiPromptExample() {
  return (
    <AiPromptBox
      modelLabel="FB AI · Fast"
      placeholder="Describe your task"
      onSubmit={(value) => {
        console.log("Prompt:", value);
      }}
    />
  );
}
```

---

## Prompt + Response

```tsx
import {
  AiPromptBox,
  StreamingResponse,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

export function AiWorkspace() {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        maxWidth: 760,
        margin: "0 auto",
      }}
    >
      <AiPromptBox
        placeholder="Ask anything..."
        onSubmit={(value) => {
          console.log(value);
        }}
      />

      <StreamingResponse />
    </div>
  );
}
```

---

# Hero Section

```tsx
import { SaasLaunchHero } from "@farzadbagheri/fb-components/heroes";
import "@farzadbagheri/fb-components/heroes.css";

export function HeroExample() {
  return (
    <SaasLaunchHero
      eyebrow="BUILT FOR MODERN TEAMS"
      title={"Ship faster.\nScale smarter."}
      description="Everything your team needs to launch, learn and scale."
      primaryLabel="Start free"
      secondaryLabel="See demo"
      showSecondary
      showProof
    />
  );
}
```

Minimal version:

```tsx
<SaasLaunchHero
  title="Launch your next product."
  showSecondary={false}
  showProof={false}
/>
```

---

# Startup Landing

```tsx
import { StartupLanding } from "@farzadbagheri/fb-components/landing";
import "@farzadbagheri/fb-components/landing.css";

export function StartupLandingExample() {
  return (
    <StartupLanding
      accent="#7d63ff"
      background="#08080c"
      radius={20}
      showMetrics
      showFeatures
    />
  );
}
```

Minimal version:

```tsx
<StartupLanding
  showMetrics={false}
  showFeatures={false}
/>
```

---

# Dashboard Metrics

```tsx
import {
  AnimatedCounter,
  MetricGrid,
  RadialProgress,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";

export function DashboardMetrics() {
  return (
    <section
      style={{
        display: "grid",
        gap: 24,
      }}
    >
      <AnimatedCounter
        value={128}
        suffix="K"
        label="ACTIVE USERS"
        delta="+18.4%"
      />

      <RadialProgress
        value={72}
        label="COMPLETE"
        ariaLabel="Profile completion"
      />

      <MetricGrid />
    </section>
  );
}
```

---

## AnimatedCounter

```tsx
import { AnimatedCounter } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function RevenueCounter() {
  return (
    <AnimatedCounter
      value={12.35}
      prefix="$"
      suffix="M"
      decimals={2}
      label="MONTHLY REVENUE"
      delta="+24.6%"
      duration={1.2}
    />
  );
}
```

---

## RadialProgress

```tsx
import { RadialProgress } from "@farzadbagheri/fb-components/data";
import "@farzadbagheri/fb-components/data.css";

export function ProgressExample() {
  return (
    <RadialProgress
      value={84}
      size={180}
      strokeWidth={10}
      color="#9b7cff"
      trackColor="#24242c"
      label="COMPLETE"
      ariaLabel="Profile completion"
    />
  );
}
```

Static version:

```tsx
<RadialProgress
  value={84}
  animated={false}
  ariaLabel="Profile completion"
/>
```

---

# Mixed Product Section

Use multiple categories together while still importing focused CSS.

```tsx
import {
  GlowButton,
  GlassButton,
} from "@farzadbagheri/fb-components/buttons";

import {
  GlassCard,
  SpotlightCard,
} from "@farzadbagheri/fb-components/ui";

import {
  AnimatedCounter,
  RadialProgress,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/buttons.css";
import "@farzadbagheri/fb-components/ui.css";
import "@farzadbagheri/fb-components/data.css";

export function ProductOverview() {
  return (
    <SpotlightCard>
      <GlassCard>
        <h2>
          Product analytics
        </h2>

        <AnimatedCounter
          value={128}
          suffix="K"
          label="ACTIVE USERS"
          delta="+18.4%"
        />

        <RadialProgress
          value={72}
          ariaLabel="Adoption progress"
        />

        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          <GlowButton>
            Open dashboard
          </GlowButton>

          <GlassButton>
            Learn more
          </GlassButton>
        </div>
      </GlassCard>
    </SpotlightCard>
  );
}
```

---

# Category CSS Strategy

Recommended for focused imports:

```tsx
import { GlassButton } from "@farzadbagheri/fb-components/buttons";
import "@farzadbagheri/fb-components/buttons.css";
```

For multiple categories:

```tsx
import { GlassButton } from "@farzadbagheri/fb-components/buttons";
import { GlassCard } from "@farzadbagheri/fb-components/ui";
import { RadialProgress } from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/buttons.css";
import "@farzadbagheri/fb-components/ui.css";
import "@farzadbagheri/fb-components/data.css";
```

This is the preferred pattern when you want tighter CSS control.

---

# Full Stylesheet Strategy

For applications using many categories:

```tsx
import {
  GlassButton,
  GlassCard,
  RadialProgress,
  SaasLaunchHero,
} from "@farzadbagheri/fb-components";

import "@farzadbagheri/fb-components/styles.css";

export function App() {
  return (
    <>
      <SaasLaunchHero />

      <GlassCard>
        <RadialProgress
          value={72}
          ariaLabel="Progress"
        />

        <GlassButton>
          Continue
        </GlassButton>
      </GlassCard>
    </>
  );
}
```

The root stylesheet includes all public component styles.

---

# TypeScript Example

Type declarations ship with the package.

```tsx
import type {
  ComponentProps,
} from "react";

import {
  RadialProgress,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";

type ProgressProps =
  ComponentProps<
    typeof RadialProgress
  >;

const progressProps:
  ProgressProps = {
    value: 72,
    label: "COMPLETE",
    ariaLabel:
      "Profile completion",
  };

export function TypedExample() {
  return (
    <RadialProgress
      {...progressProps}
    />
  );
}
```

No separate `@types` package is required.

---

# Vite Example

Install:

```bash
npm install @farzadbagheri/fb-components
```

Example `src/App.tsx`:

```tsx
import {
  GlowButton,
  GlassCard,
} from "@farzadbagheri/fb-components";

import "@farzadbagheri/fb-components/styles.css";

export default function App() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "40px auto",
      }}
    >
      <GlassCard>
        <h1>
          FB Components
        </h1>

        <GlowButton>
          Launch
        </GlowButton>
      </GlassCard>
    </main>
  );
}
```

No additional setup is required beyond standard React/Vite configuration.

---

# Next.js Client Component Example

Interactive components should be used in a client component when required by the Next.js rendering model.

```tsx
"use client";

import {
  AiPromptBox,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

export default function AiClientPanel() {
  return (
    <AiPromptBox
      placeholder="Ask anything..."
      onSubmit={(value) => {
        console.log(value);
      }}
    />
  );
}
```

For App Router projects, place the component inside a file that begins with:

```tsx
"use client";
```

when the component or surrounding logic requires client-side interactivity.

---

# Next.js App Router Examples

## Where imports go

FB Components ship as Client Components. In the App Router:

- **Server Components (default)** can render FB Components only through a client wrapper — do not add `"use client"` to your `page.tsx`; wrap once instead.
- **Client wrappers** (files starting with `"use client"`) import components and their category CSS.

## Recommended structure

```text
app/
  layout.tsx          <- global or category CSS here
  page.tsx            <- Server Component (no "use client")
  components/
    HeroClient.tsx    <- "use client" wrapper
    MetricsClient.tsx <- "use client" wrapper
```

## 1. Client wrapper

```tsx
// app/components/HeroClient.tsx
"use client";

import { GlowButton } from "@farzadbagheri/fb-components/buttons";
import { GradientMesh } from "@farzadbagheri/fb-components/backgrounds";

export default function HeroClient() {
  return (
    <section style={{ position: "relative", minHeight: "60vh" }}>
      <GradientMesh />
      <GlowButton onClick={() => console.log("cta")}>Get started</GlowButton>
    </section>
  );
}
```

## 2. Server page renders the wrapper

```tsx
// app/page.tsx — no "use client" needed here
import HeroClient from "./components/HeroClient";

export default function Page() {
  return (
    <main>
      <HeroClient />
    </main>
  );
}
```

## 3. Category CSS

Import only the CSS for the categories you use, once, in the root layout — not per page:

```tsx
// app/layout.tsx
import "@farzadbagheri/fb-components/buttons.css";
import "@farzadbagheri/fb-components/backgrounds.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

If you prefer component-local CSS, importing the category CSS inside the `"use client"` wrapper also works — Next.js hoists it. Pick one strategy per category and stay consistent to avoid duplicate rule payloads.

## 4. When "use client" is required

| Situation | Needs `"use client"`? |
| --- | --- |
| Component uses event handlers (`onClick`, `onSubmit`) | Yes |
| Component uses hooks (`useState`, context) internally | Yes (all FB interactive components do) |
| You only compose already-wrapped client components | No — keep the page a Server Component |
| Static/SSR-friendly usage (e.g. backgrounds with no props handlers) | Still yes at the import site; the wrapper pattern above covers it |

Rule of thumb: pages stay server, wrappers stay client, and the boundary is exactly one file per interactive island.

---

# Accessibility Examples

## Accessible progress

```tsx
<RadialProgress
  value={72}
  label="COMPLETE"
  ariaLabel="Profile completion"
/>
```

The component exposes progressbar semantics including:

```text
role="progressbar"
aria-valuemin
aria-valuemax
aria-valuenow
aria-valuetext
```

---

## Accessible button labels

Prefer clear action text:

```tsx
<GlowButton>
  Create project
</GlowButton>
```

instead of vague labels when context is not obvious.

---

## AI prompt accessibility

`AiPromptBox` uses its placeholder as the textarea accessible label.

```tsx
<AiPromptBox
  placeholder="Describe the report you want to generate"
/>
```

Use a meaningful placeholder when accessibility and clarity matter.

---

## Decorative motion

Cursor visuals and several decorative elements are hidden from assistive technology.

Keep meaningful interaction on native semantic elements:

```tsx
<MagneticCursor>
  <button
    type="button"
    data-magnetic-target
  >
    Open project
  </button>
</MagneticCursor>
```

---

# Recommended Composition Patterns

## Product Hero

```tsx
<SaasLaunchHero />
```

Use when you want a complete polished hero section quickly.

---

## Startup Page

```tsx
<StartupLanding />
```

Use when you want a more complete landing-page composition with navigation, metrics, and features.

---

## AI Workspace

```tsx
<div>
  <AiPromptBox />
  <StreamingResponse />
</div>
```

Use for prompt-and-response interfaces.

---

## Analytics Surface

```tsx
<div>
  <AnimatedCounter />
  <RadialProgress />
  <MetricGrid />
</div>
```

Use for dashboard or product analytics views.

---

## Premium Product Card

```tsx
<SpotlightCard>
  <GlassCard>
    <h3>
      Pro Workspace
    </h3>

    <p>
      A polished product card composition.
    </p>

    <GlowButton>
      Upgrade
    </GlowButton>
  </GlassCard>
</SpotlightCard>
```

---

# Root Import Reference

All public components:

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
  StreamingResponse,
} from "@farzadbagheri/fb-components";
```

Root CSS:

```tsx
import "@farzadbagheri/fb-components/styles.css";
```

---

# Useful Links

- Main documentation: `README.md`
- API reference: `COMPONENTS.md`
- Contributing: `CONTRIBUTING.md`
- Security: `SECURITY.md`
- Release guide: `RELEASING.md`

Live catalog:

https://farzadbagheri.fr/en/components

French catalog:

https://farzadbagheri.fr/fr/composants

MCP documentation:

https://farzadbagheri.fr/en/components/mcp

---

# License

MIT © 2026 Farzad Bagheri.
