# FB Components — Component API Reference
Complete API reference for the **23 public components** shipped in:

```text

@farzadbagheri/fb-components

```

This file is designed as the technical companion to `README.md`.

It covers:

- purpose

- import path

- CSS import

- key props

- defaults

- usage examples

- accessibility notes

- behavior notes

---
# Table of Contents
1. [Backgrounds](#backgrounds)

   - [PredictiveArc](#predictivearc)

   - [SignalParticles](#signalparticles)

   - [DotMatrix](#dotmatrix)

   - [GradientMesh](#gradientmesh)

   - [AuroraGrid](#auroragrid)

   - [NoiseField](#noisefield)

2. [Buttons](#buttons)

   - [MagneticButton](#magneticbutton)

   - [GlowButton](#glowbutton)

   - [GlassButton](#glassbutton)

3. [Text](#text)

   - [RevealText](#revealtext)

   - [BlurReveal](#blurreveal)

4. [UI](#ui)

   - [SpotlightCard](#spotlightcard)

   - [GlassCard](#glasscard)

5. [Motion](#motion)

   - [GlowCursor](#glowcursor)

   - [MagneticCursor](#magneticcursor)

6. [AI](#ai)

   - [AiPromptBox](#aipromptbox)

   - [StreamingResponse](#streamingresponse)

7. [Heroes](#heroes)

   - [SaasLaunchHero](#saaslaunchhero)

8. [Landing](#landing)

   - [StartupLanding](#startuplanding)

   - [LivingWorldLanding](#livingworldlanding)

9. [Data](#data)

   - [AnimatedCounter](#animatedcounter)

   - [RadialProgress](#radialprogress)

   - [MetricGrid](#metricgrid)

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

---
## PredictiveArc
Decorative animated arc background with configurable color, size, thickness, glow, and animation state.

### Import
```tsx

import { PredictiveArc } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `color` | `string` | `"#9b7cff"` | Main arc color |

| `background` | `string` | `"#0d0d11"` | Background color |

| `size` | `number` | `70` | Arc size percentage |

| `thickness` | `number` | `3` | Arc thickness in pixels |

| `glow` | `number` | `16` | Glow radius in pixels |

| `animated` | `boolean` | `true` | Enables animation class |

| `className` | `string` | `""` | Additional CSS class |

### Example
```tsx

<PredictiveArc

  color="#9b7cff"

  background="#0d0d11"

  size={82}

  thickness={4}

  glow={24}

/>

```

### Notes
- Styling values are exposed through CSS custom properties.

- Intended primarily as a decorative visual layer.

- `animated={false}` removes the animation modifier class.

### Accessibility
The component is decorative and does not expose interactive semantics.

---
## SignalParticles
Animated particle background for modern product surfaces and landing sections.

### Import
```tsx

import { SignalParticles } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Props
`SignalParticles` exposes visual configuration props and a `className` hook. Refer to generated TypeScript declarations for the exact type surface for the installed package version.

### Example
```tsx

<SignalParticles />

```

### Notes
- Designed as a decorative background.

- Works well behind hero, dashboard, and AI-interface sections.

- Visual behavior is animation-oriented.

### Accessibility
Decorative rendering should not be treated as meaningful page content.

---
## DotMatrix
Dot-matrix visual background for dashboards, product surfaces, and modern landing sections.

### Import
```tsx

import { DotMatrix } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Example
```tsx

<DotMatrix />

```

### Notes
- Best used as a visual layer rather than semantic content.

- Can be combined with cards, hero sections, and content overlays.

---
## GradientMesh
Layered gradient mesh background for modern interfaces.

### Import
```tsx

import { GradientMesh } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Example
```tsx

<GradientMesh />

```

### Notes
- Intended for decorative visual composition.

- Useful in hero sections and product landing pages.

---
## AuroraGrid
Aurora-inspired animated grid background.

### Import
```tsx

import { AuroraGrid } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Example
```tsx

<AuroraGrid />

```

### Notes
- Combines grid-like visual structure with an aurora-inspired effect.

- Best suited to product, AI, and deep-tech themed sections.

---
## NoiseField
Noise-based visual layer for adding depth and texture to surfaces.

### Import
```tsx

import { NoiseField } from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

```

### Example
```tsx

<NoiseField />

```

### Notes
- Decorative component.

- Works well as a subtle visual texture behind content.

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

---
## MagneticButton
Interactive button with magnetic pointer behavior.

### Import
```tsx

import { MagneticButton } from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";

```

### Example
```tsx

<MagneticButton>

  Explore

</MagneticButton>

```

### Notes
- Uses native button semantics.

- Supports standard button props.

- Designed for high-visibility calls to action.

### Accessibility
- Keyboard-compatible through native button behavior.

- Consumers should provide clear button text.

---
## GlowButton
Modern glowing action button.

### Import
```tsx

import { GlowButton } from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";

```

### Example
```tsx

<GlowButton>

  Launch

</GlowButton>

```

### Notes
- Uses native button semantics.

- Suitable for primary product actions.

### Accessibility
- Native button keyboard interaction is preserved.

- Use descriptive action labels.

---
## GlassButton
Glass-style button with configurable tint, opacity, blur, radius, and border opacity.

### Import
```tsx

import { GlassButton } from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";

```

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `children` | `ReactNode` | `"Explore"` | Button content |

| `textColor` | `string` | `"#ffffff"` | Text color |

| `tint` | `string` | `"#ffffff"` | Glass tint color |

| `opacity` | `number` | `0.08` | Background tint opacity |

| `blur` | `number` | `16` | Backdrop blur radius |

| `radius` | `number` | `16` | Border radius |

| `borderOpacity` | `number` | `0.18` | Border opacity |

| Standard button props | `ButtonHTMLAttributes<HTMLButtonElement>` | — | Native button attributes |

### Example
```tsx

<GlassButton

  tint="#9b7cff"

  opacity={0.12}

  blur={18}

  radius={18}

>

  Explore

</GlassButton>

```

### Behavior Notes
- Defaults to `type="button"` when no type is provided.

- Invalid non-six-digit hex tint values fall back to white RGB values.

- Custom `style` is merged before component-controlled visual styles.

### Accessibility
- Native button semantics.

- Decorative shine element is hidden from assistive technology.

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

---
## RevealText
Animated text reveal component.

### Import
```tsx

import { RevealText } from "@farzadbagheri/fb-components/text";

import "@farzadbagheri/fb-components/text.css";

```

### Example
```tsx

<RevealText>

  Build better interfaces.

</RevealText>

```

### Notes
- Intended for headings, highlights, and animated copy.

- Supports custom content through children.

---
## BlurReveal
Text reveal component using blur-based entrance effects.

### Import
```tsx

import { BlurReveal } from "@farzadbagheri/fb-components/text";

import "@farzadbagheri/fb-components/text.css";

```

### Example
```tsx

<BlurReveal>

  Ship faster.

</BlurReveal>

```

### Notes
- Useful for hero titles, section intros, and emphasized text.

- Designed for visual presentation rather than semantic transformation.

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

---
## SpotlightCard
Interactive card with spotlight-style pointer feedback.

### Import
```tsx

import { SpotlightCard } from "@farzadbagheri/fb-components/ui";

import "@farzadbagheri/fb-components/ui.css";

```

### Example
```tsx

<SpotlightCard>

  <h3>AI Platform</h3>

  <p>Build modern AI experiences.</p>

</SpotlightCard>

```

### Notes
- Suitable for pricing, features, dashboards, and product cards.

- Supports children content.

---
## GlassCard
Reusable glass-style container.

### Import
```tsx

import { GlassCard } from "@farzadbagheri/fb-components/ui";

import "@farzadbagheri/fb-components/ui.css";

```

### Example
```tsx

<GlassCard>

  Dashboard content

</GlassCard>

```

### Notes
- Useful as a composable visual surface.

- Works well with buttons, metrics, and AI content.

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

---
## GlowCursor
Decorative cursor-following effect.

### Import
```tsx

import { GlowCursor } from "@farzadbagheri/fb-components/motion";

import "@farzadbagheri/fb-components/motion.css";

```

### Example
```tsx

<GlowCursor>

  <div>

    Interactive content

  </div>

</GlowCursor>

```

### Notes
- Intended to enhance interaction feedback.

- Should wrap a meaningful content region.

---
## MagneticCursor
Custom cursor that follows the pointer and can magnetically attract toward marked targets.

### Import
```tsx

import { MagneticCursor } from "@farzadbagheri/fb-components/motion";

import "@farzadbagheri/fb-components/motion.css";

```

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `children` | `ReactNode` | — | Wrapped content |

| `color` | `string` | `"#b99cff"` | Cursor color |

| `size` | `number` | `18` | Dot size in pixels |

| `ringSize` | `number` | `44` | Ring size in pixels |

| `followSpeed` | `number` | `0.14` | Ring transition duration in seconds |

| `magneticStrength` | `number` | `0.25` | Attraction strength |

| `className` | `string` | `""` | Additional class |

| Standard div props | `HTMLAttributes<HTMLDivElement>` | — | Native div attributes |

### Example
```tsx

<MagneticCursor

  color="#b99cff"

  size={18}

  ringSize={44}

  magneticStrength={0.25}

>

  <button

    type="button"

    data-magnetic-target

  >

    Explore

  </button>

</MagneticCursor>

```

### Behavior Notes
- The native cursor is hidden within the component region.

- Add `data-magnetic-target` to elements that should attract the cursor.

- Pointer movement updates local cursor coordinates.

- Pointer leave hides the custom cursor.

- Native event listeners are removed during cleanup.

### Accessibility
- Cursor visuals are decorative and use `aria-hidden="true"`.

- Interactive content remains represented by its original semantic elements.

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

---
## AiPromptBox
AI prompt composer with internal text state, optional model label, optional attachment action, and submit handling.

### Import
```tsx

import { AiPromptBox } from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

```

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `background` | `string` | `"#111116"` | Root background |

| `accent` | `string` | `"#9b7cff"` | Accent color |

| `textColor` | `string` | `"#ffffff"` | Text color |

| `radius` | `number` | `20` | Border radius |

| `minHeight` | `number` | `150` | Minimum height |

| `showModel` | `boolean` | `true` | Shows model label |

| `showAttachment` | `boolean` | `true` | Shows attachment button |

| `modelLabel` | `string` | `"FB AI · Fast"` | Model label |

| `placeholder` | `string` | `"Ask anything..."` | Textarea placeholder and accessible name |

| `defaultValue` | `string` | `""` | Initial prompt value |

| `disabled` | `boolean` | `false` | Disables text entry and submit |

| `onSubmit` | `(value: string) => void` | — | Called with trimmed prompt |

| `className` | `string` | `""` | Additional class |

| Standard div props | `HTMLAttributes<HTMLDivElement>` minus `onSubmit` | — | Root attributes |

### Example
```tsx

<AiPromptBox

  modelLabel="FB AI · Fast"

  placeholder="Describe your task"

  onSubmit={(value) => {

    console.log(value);

  }}

/>

```

### Behavior Notes
- Input is trimmed before submission.

- Empty or whitespace-only values are not submitted.

- Submit is disabled when the prompt is empty.

- Disabled state blocks submission.

- `showModel={false}` hides the model label.

- `showAttachment={false}` hides the attachment action.

### Accessibility
- Textarea receives an accessible name from `placeholder`.

- Buttons expose explicit accessible labels.

- Decorative icons are hidden from assistive technology.

---
## StreamingResponse
Presentation component for streaming-style AI output.

### Import
```tsx

import { StreamingResponse } from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

```

### Example
```tsx

<StreamingResponse />

```

### Notes
- Intended for AI answer or response presentation.

- Can be paired with `AiPromptBox` for a complete AI-oriented interface.

---
# Heroes
Import:

```tsx

import { SaasLaunchHero } from "@farzadbagheri/fb-components/heroes";

import "@farzadbagheri/fb-components/heroes.css";

```

---
## SaasLaunchHero
Ready-to-use SaaS hero section with configurable copy, actions, proof section, and visual styling.

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `accent` | `string` | `"#8f73ff"` | Accent color |

| `background` | `string` | `"#09090d"` | Section background |

| `headlineSize` | `number` | `72` | Headline size in pixels |

| `eyebrow` | `string` | `"BUILT FOR MODERN TEAMS"` | Eyebrow copy |

| `title` | `string` | `"Ship faster.\nScale smarter."` | Multiline title |

| `description` | `string` | Default marketing copy | Supporting description |

| `primaryLabel` | `string` | `"Start free"` | Primary CTA label |

| `secondaryLabel` | `string` | `"See demo"` | Secondary CTA label |

| `showSecondary` | `boolean` | `true` | Shows secondary CTA |

| `showProof` | `boolean` | `true` | Shows proof section |

| `className` | `string` | `""` | Additional class |

| Standard section props | `HTMLAttributes<HTMLElement>` | — | Native section attributes |

### Example
```tsx

<SaasLaunchHero

  eyebrow="BUILT FOR MODERN TEAMS"

  title={"Ship faster.\nScale smarter."}

  primaryLabel="Start free"

  secondaryLabel="See demo"

/>

```

### Behavior Notes
- Newline characters in `title` are rendered as separate line spans.

- `showSecondary={false}` removes the secondary CTA.

- `showProof={false}` removes the proof section.

- Component-level `background` overrides `style.background`.

### Accessibility
- CTA controls use native buttons.

- Decorative glow and visual dashboard sections are hidden from assistive technology.

---
# Landing

Import:

```tsx
import {
  StartupLanding,
  LivingWorldLanding,
} from "@farzadbagheri/fb-components/landing";

import "@farzadbagheri/fb-components/landing.css";
```

---

## StartupLanding

Startup-oriented landing page composition with navigation, hero copy, metrics, and feature cards.

### Props

| Prop | Type | Default | Description |
|---|---|---:|---|
| `accent` | `string` | `"#7d63ff"` | Accent color |
| `background` | `string` | `"#08080c"` | Section background |
| `radius` | `number` | `20` | Shared radius custom property |
| `showMetrics` | `boolean` | `true` | Shows metrics section |
| `showFeatures` | `boolean` | `true` | Shows feature section |
| `className` | `string` | `""` | Additional class |
| Standard section props | `HTMLAttributes<HTMLElement>` | — | Native section attributes |

### Example

```tsx
<StartupLanding
  accent="#7d63ff"
  background="#08080c"
  radius={20}
  showMetrics
  showFeatures
/>
```

### Behavior Notes

Default navigation contains:

- Product
- Features
- Pricing

Default metrics:

- `42K` — Early users
- `4.9` — Average rating
- `99.9%` — Platform uptime

Default features:

- Ship
- Measure
- Scale

Feature numbering is rendered as:

```text
01
02
03
```

### Accessibility

- Navigation links use native anchors.
- CTA controls use native buttons.
- Consumers should verify page-level heading structure in the final application.

---

## LivingWorldLanding

A cinematic, production-minded landing page for modern SaaS products, AI platforms, creative tools, and polished digital experiences.

### Import

```tsx
import {
  LivingWorldLanding,
} from "@farzadbagheri/fb-components/landing";

import "@farzadbagheri/fb-components/landing.css";
```

### Basic Usage

```tsx
export function Example() {
  return (
    <LivingWorldLanding />
  );
}
```

### Custom Content

```tsx
export function CustomExample() {
  return (
    <LivingWorldLanding
      eyebrow="NEW PLATFORM"
      title="Create something remarkable."
      description="A cinematic landing experience for modern digital products."
      primaryLabel="Launch"
      secondaryLabel="Preview"
      onPrimaryClick={() => {
        console.log("Primary action");
      }}
      onSecondaryClick={() => {
        console.log("Secondary action");
      }}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `eyebrow` | `string` | `"DESIGNED FOR MODERN PRODUCTS"` | Small label displayed above the main heading. |
| `title` | `string` | `"Build digital experiences that feel alive."` | Main hero heading. |
| `description` | `string` | Cinematic product description | Supporting hero copy. |
| `primaryLabel` | `string` | `"Start building"` | Primary CTA label. |
| `secondaryLabel` | `string` | `"Explore components"` | Secondary CTA label. |
| `onPrimaryClick` | `() => void` | `undefined` | Primary CTA callback. |
| `onSecondaryClick` | `() => void` | `undefined` | Secondary CTA callback. |
| `stats` | `Array<{ value: string; label: string }>` | Built-in stats | Custom hero metrics. |
| `features` | `Array<{ icon?: ReactNode; title: string; description: string }>` | Built-in features | Custom feature cards. |
| `className` | `string` | `""` | Additional root class name. |
| `style` | `CSSProperties` | `undefined` | Inline styles for the root section. |

### Notes

- Responsive across desktop, tablet, and mobile layouts.
- Includes reduced-motion handling.
- Uses scoped CSS through the landing category stylesheet.
- Designed to work without additional runtime dependencies.

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

---
## AnimatedCounter
Animated numeric metric with cubic easing and configurable display formatting.

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `value` | `number` | `128` | Target value |

| `duration` | `number` | `1.5` | Animation duration in seconds |

| `color` | `string` | `"#ffffff"` | Text color |

| `accent` | `string` | `"#9b7cff"` | Accent color |

| `fontSize` | `number` | `72` | Number size in pixels |

| `prefix` | `string` | `""` | Prefix before number |

| `suffix` | `string` | `"K"` | Suffix after number |

| `label` | `string` | `"ACTIVE USERS"` | Metric label |

| `delta` | `string` | `"+18.4%"` | Delta text |

| `decimals` | `number` | `0` | Decimal precision |

| `className` | `string` | `""` | Additional class |

| Standard div props | `HTMLAttributes<HTMLDivElement>` | — | Native div attributes |

### Example
```tsx

<AnimatedCounter

  value={128}

  suffix="K"

  label="ACTIVE USERS"

  delta="+18.4%"

  duration={1.5}

/>

```

### Behavior Notes
- Uses cubic easing.

- Duration is clamped to a minimum of `0.01` seconds.

- `delta=""` hides the delta element.

- Animation restarts when `value` or `duration` changes.

- Scheduled animation frames are cleaned up on unmount.

---
## RadialProgress
Accessible radial progress visualization.

### Props
| Prop | Type | Default | Description |

|---|---|---:|---|

| `value` | `number` | `72` | Progress value |

| `size` | `number` | `180` | Component width/height |

| `strokeWidth` | `number` | `10` | SVG circle stroke width |

| `color` | `string` | `"#9b7cff"` | Progress stroke color |

| `trackColor` | `string` | `"#24242c"` | Track stroke color |

| `animated` | `boolean` | `true` | Enables animated value class |

| `label` | `string` | `"COMPLETE"` | Visible label |

| `ariaLabel` | `string` | `"Progress"` | Accessible progressbar label |

| `className` | `string` | `""` | Additional class |

| Standard div props | `HTMLAttributes<HTMLDivElement>` | — | Native div attributes |

### Example
```tsx

<RadialProgress

  value={72}

  label="COMPLETE"

  ariaLabel="Profile completion"

/>

```

### Behavior Notes
- Values are clamped between `0` and `100`.

- Displayed text uses `Math.round`.

- `animated={false}` removes the animated modifier class.

- Radius is calculated from `strokeWidth`.

- Stroke offset is calculated from the clamped progress value.

### Accessibility
The root exposes:

```text

role="progressbar"

aria-valuemin="0"

aria-valuemax="100"

aria-valuenow

aria-valuetext

```

The SVG is decorative and hidden from assistive technology.

---
## MetricGrid
Reusable grid for presenting multiple metrics.

### Import
```tsx

import { MetricGrid } from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";

```

### Example
```tsx

<MetricGrid />

```

### Notes
- Intended for dashboard and product analytics layouts.

- Can be composed with `AnimatedCounter` and `RadialProgress`.

---
# Root Import
All 23 public components can also be imported from the package root:

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

  LivingWorldLanding,

  StreamingResponse,

} from "@farzadbagheri/fb-components";

import "@farzadbagheri/fb-components/styles.css";

```

---
# Package Entry Points
| Category | JavaScript | CSS |

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
# General Integration Notes
## CSS
Prefer category CSS when possible:

```tsx

import "@farzadbagheri/fb-components/buttons.css";

```

Use the root stylesheet when your application uses many categories:

```tsx

import "@farzadbagheri/fb-components/styles.css";

```

## TypeScript
Type declarations are bundled with the package.

No separate `@types` package is required.

## React Compatibility
```text

React >=18 <20

React DOM >=18 <20

Node >=18

```

## Accessibility
FB Components includes accessibility-oriented implementation and automated checks, but consumers should still validate complete page-level accessibility in their own application context.

## Tree Shaking
Category entry points are recommended for focused imports and smaller CSS usage.

---
# Related Documentation
- Main README: `README.md`

- Contributing guide: `CONTRIBUTING.md`

- Security policy: `SECURITY.md`

- Release guide: `RELEASING.md`

- Changelog: `CHANGELOG.md`

Live catalog:

https\://farzadbagheri.fr/en/components

French catalog:

https\://farzadbagheri.fr/fr/composants

MCP documentation:

https\://farzadbagheri.fr/en/components/mcp

---
# License
MIT © 2026 Farzad Bagheri.
