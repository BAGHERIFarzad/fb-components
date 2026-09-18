# FB Components Roadmap

FB Components is a production-minded React + TypeScript component library focused on AI interfaces, motion, dashboards, data visualization, SaaS experiences, and modern product UI.

This roadmap communicates direction, not guaranteed delivery dates. Priorities may change based on adoption, community feedback, maintenance cost, accessibility requirements, and package quality.

---

## Current Stable Foundation

The current public package includes:

- 22 public React components
- React 18 and React 19 support
- TypeScript declarations
- ESM and CommonJS builds
- category-based JavaScript entry points
- category-specific CSS entry points
- accessibility-aware patterns
- automated tests
- package-size validation
- fresh-consumer installation verification
- live component documentation and playgrounds
- copy-paste usage examples
- EN / FR component documentation

Current package:

```bash
npm install @farzadbagheri/fb-components
```

Live documentation:

https://farzadbagheri.fr/en/components

---

## Near-Term Priorities

### Documentation & Developer Experience

- deepen public API documentation
- add more usage variants per component
- add framework-specific guidance
- improve SSR and Next.js examples
- expand troubleshooting documentation
- improve accessibility guidance
- add more real-world composition examples

### Example Applications

Planned example experiences include:

- Vite starter example
- Next.js starter example
- AI assistant interface
- analytics dashboard
- SaaS landing page
- multi-component showcase

### Package & Release Hardening

- run full `release:check` inside the publishing workflow
- continue fresh-install verification
- keep package-size budgets enforced
- expand consumer compatibility checks
- improve release automation where useful
- continue validating category exports and CSS entry points

---

## Component Areas Being Explored

### AI Interfaces

Potential additions:

- agent activity timeline
- tool-call viewer
- AI status indicator
- reasoning/progress surface
- model selector
- prompt history
- citation/source cards

### Data & Dashboards

Potential additions:

- data table
- sparkline
- KPI cards
- status distribution
- timeline visualization
- activity feed
- comparison metrics
- richer chart primitives

### Product UI

Potential additions:

- command palette
- modal
- drawer
- tabs
- toast / notification
- skeleton/loading states
- empty states
- segmented controls
- navigation primitives

### SaaS & Landing Experiences

Potential additions:

- pricing section
- feature comparison
- testimonial section
- integration grid
- product feature showcase
- launch CTA sections
- developer-focused hero sections

### Motion

Potential additions:

- staged reveal systems
- hover-follow effects
- scroll-aware transitions
- lightweight parallax primitives
- animated borders
- spotlight interaction patterns

---

## Community Priorities

The project aims to make contribution increasingly approachable.

Planned improvements include:

- `good first issue` tasks
- `help wanted` tasks
- community component requests
- clearer contribution examples
- contributor recognition
- GitHub Discussions
- public roadmap feedback
- more issue templates

---

## Quality Principles

New additions should preserve the project’s core expectations:

1. **Useful before flashy**
2. **TypeScript-first APIs**
3. **Accessible interaction patterns**
4. **React 18 / 19 compatibility**
5. **Focused package imports**
6. **Reasonable package cost**
7. **Tested public behavior**
8. **Clear documentation**
9. **Predictable styling**
10. **Real consumer validation**

A component should not be added only because it looks impressive. It should solve a reusable product-interface problem.

---

## Version Direction

### 0.1.x

Focus:

- stabilize the initial public component set
- improve documentation
- improve discoverability
- strengthen testing
- improve package validation
- gather real-world feedback

### 0.2.0

Likely focus:

- next public component batch
- stronger dashboard and AI primitives
- richer examples
- improved developer experience
- broader integration guidance

The exact scope will be decided from usage and community feedback before release.

---

## Request a Component

Have a reusable component idea?

Use the repository feature request template:

https://github.com/BAGHERIFarzad/fb-components/issues/new/choose

Good requests explain:

- the product problem
- the expected interaction
- accessibility requirements
- example use cases
- whether the component belongs in an existing category

---

## Contribute

Contributions are welcome.

Start here:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [DEVELOPMENT.md](./DEVELOPMENT.md)
- [COMPONENTS.md](./COMPONENTS.md)

Repository:

https://github.com/BAGHERIFarzad/fb-components

---

## Feedback

The roadmap is intentionally flexible.

If you use FB Components in a real project, feedback about API design, accessibility, package ergonomics, framework compatibility, missing primitives, or documentation gaps is especially valuable.
