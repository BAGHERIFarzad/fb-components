FB Components

Production-minded React components for modern interfaces, motion, AI experiences, dashboards, and product websites.

Installation

npm install @farzadbagheri/fb-components

Recommended usage

For the smallest bundle, import from a category entry point and load only that category's CSS.

import {
  GlowButton,
  GlassButton,
} from "@farzadbagheri/fb-components/buttons";

import "@farzadbagheri/fb-components/buttons.css";

export function Example() {
  return (
    <GlowButton>
      Get started
    </GlowButton>
  );
}

Data visualization

import {
  AnimatedCounter,
  MetricGrid,
  RadialProgress,
} from "@farzadbagheri/fb-components/data";

import "@farzadbagheri/fb-components/data.css";

AI components

import {
  AiPromptBox,
  StreamingResponse,
} from "@farzadbagheri/fb-components/ai";

import "@farzadbagheri/fb-components/ai.css";

Backgrounds

import {
  AuroraGrid,
  DotMatrix,
  GradientMesh,
  NoiseField,
  PredictiveArc,
  SignalParticles,
} from "@farzadbagheri/fb-components/backgrounds";

import "@farzadbagheri/fb-components/backgrounds.css";

Root import

For convenience, components can also be imported from the package root.

import {
  GlowButton,
  RadialProgress,
  StreamingResponse,
} from "@farzadbagheri/fb-components";

import "@farzadbagheri/fb-components/styles.css";

The root stylesheet contains the complete Free component stylesheet.

For production applications where bundle size matters, category imports are recommended.

Available entry points

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

Category styles

@farzadbagheri/fb-components/backgrounds.css
@farzadbagheri/fb-components/buttons.css
@farzadbagheri/fb-components/text.css
@farzadbagheri/fb-components/ui.css
@farzadbagheri/fb-components/motion.css
@farzadbagheri/fb-components/ai.css
@farzadbagheri/fb-components/heroes.css
@farzadbagheri/fb-components/landing.css
@farzadbagheri/fb-components/data.css

Complete stylesheet

import "@farzadbagheri/fb-components/styles.css";

TypeScript

FB Components ships TypeScript declarations.

import type {
  GlowButtonProps,
} from "@farzadbagheri/fb-components/buttons";

Requirements

React 18+

React DOM 18+

TypeScript recommended

Documentation

Interactive documentation, Live Preview, Playground, installation guides, and MCP integration are available through the FB Components website.

MCP

FB Components also exposes component metadata, recommendations, installation information, and Free source through MCP-compatible tooling.

License

MIT