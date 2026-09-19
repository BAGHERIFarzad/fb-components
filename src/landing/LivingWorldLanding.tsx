import type { CSSProperties, ReactNode } from "react";
import "./LivingWorldLanding.css";

export interface LivingWorldLandingProps {
  eyebrow?: string;
  title?: string;
  description?: string;

  primaryLabel?: string;
  secondaryLabel?: string;

  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;

  stats?: Array<{
    value: string;
    label: string;
  }>;

  features?: Array<{
    icon?: ReactNode;
    title: string;
    description: string;
  }>;

  className?: string;
  style?: CSSProperties;
}

const DEFAULT_STATS = [
  {
    value: "22+",
    label: "Components",
  },
  {
    value: "React 19",
    label: "Ready",
  },
  {
    value: "100%",
    label: "TypeScript",
  },
];

const DEFAULT_FEATURES = [
  {
    title: "Beautiful by default",
    description:
      "Premium visual foundations designed for modern product experiences.",
  },
  {
    title: "Built for real products",
    description:
      "Responsive layouts, accessible patterns, and production-minded APIs.",
  },
  {
    title: "Ship faster",
    description:
      "Compose polished experiences without rebuilding every interface primitive.",
  },
];

export function LivingWorldLanding({
  eyebrow = "DESIGNED FOR MODERN PRODUCTS",
  title = "Build digital experiences that feel alive.",
  description = "A cinematic landing experience for SaaS products, AI platforms, creative tools, and ambitious digital products.",
  primaryLabel = "Start building",
  secondaryLabel = "Explore components",
  onPrimaryClick,
  onSecondaryClick,
  stats = DEFAULT_STATS,
  features = DEFAULT_FEATURES,
  className = "",
  style,
}: LivingWorldLandingProps) {
  return (
    <section
      className={`fb-living-world ${className}`.trim()}
      style={style}
      aria-label="Product landing page"
    >
      <div className="fb-living-world__ambient fb-living-world__ambient--one" />
      <div className="fb-living-world__ambient fb-living-world__ambient--two" />

      <header className="fb-living-world__nav">
        <a
          className="fb-living-world__brand"
          href="#living-world-home"
          aria-label="Living World home"
        >
          <span className="fb-living-world__brand-mark">
            <span />
            <span />
          </span>

          <span>Living World</span>
        </a>

        <nav
          className="fb-living-world__nav-links"
          aria-label="Landing page navigation"
        >
          <a href="#living-world-about">About</a>
          <a href="#living-world-features">Features</a>
          <a href="#living-world-explore">Explore</a>
        </nav>

        <button
          className="fb-living-world__nav-cta"
          type="button"
          onClick={onPrimaryClick}
        >
          Get started
        </button>
      </header>

      <div
        id="living-world-home"
        className="fb-living-world__hero"
      >
        <div className="fb-living-world__hero-copy">
          <p className="fb-living-world__eyebrow">
            <span />
            {eyebrow}
          </p>

          <h1>
            {title}
          </h1>

          <p className="fb-living-world__description">
            {description}
          </p>

          <div className="fb-living-world__actions">
            <button
              className="fb-living-world__primary"
              type="button"
              onClick={onPrimaryClick}
            >
              {primaryLabel}

              <span aria-hidden="true">
                ↗
              </span>
            </button>

            <button
              className="fb-living-world__secondary"
              type="button"
              onClick={onSecondaryClick}
            >
              <span
                className="fb-living-world__play"
                aria-hidden="true"
              >
                ▶
              </span>

              {secondaryLabel}
            </button>
          </div>

          <div className="fb-living-world__stats">
            {stats.map((stat) => (
              <div
                className="fb-living-world__stat"
                key={`${stat.value}-${stat.label}`}
              >
                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="fb-living-world__visual"
          aria-hidden="true"
        >
          <div className="fb-living-world__orb" />

          <div className="fb-living-world__planet">
            <div className="fb-living-world__planet-glow" />
            <div className="fb-living-world__planet-grid" />
          </div>

          <div className="fb-living-world__float-card fb-living-world__float-card--top">
            <span className="fb-living-world__mini-label">
              LIVE SIGNAL
            </span>

            <strong>
              +38.4%
            </strong>

            <div className="fb-living-world__mini-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="fb-living-world__float-card fb-living-world__float-card--bottom">
            <div className="fb-living-world__avatar-stack">
              <span />
              <span />
              <span />
            </div>

            <div>
              <strong>
                4.8K
              </strong>

              <span>
                creators building
              </span>
            </div>
          </div>

          <span className="fb-living-world__orbit fb-living-world__orbit--one" />
          <span className="fb-living-world__orbit fb-living-world__orbit--two" />
        </div>
      </div>

      <div
        id="living-world-features"
        className="fb-living-world__features"
      >
        {features.map((feature, index) => (
          <article
            className="fb-living-world__feature"
            key={feature.title}
          >
            <div className="fb-living-world__feature-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            {feature.icon ? (
              <div className="fb-living-world__feature-icon">
                {feature.icon}
              </div>
            ) : null}

            <h2>
              {feature.title}
            </h2>

            <p>
              {feature.description}
            </p>

            <span className="fb-living-world__feature-arrow">
              ↗
            </span>
          </article>
        ))}
      </div>

      <div
        id="living-world-explore"
        className="fb-living-world__marquee"
        aria-hidden="true"
      >
        <div>
          <span>AI EXPERIENCES</span>
          <i>✦</i>
          <span>SAAS PRODUCTS</span>
          <i>✦</i>
          <span>CREATIVE TOOLS</span>
          <i>✦</i>
          <span>MODERN INTERFACES</span>
          <i>✦</i>
          <span>AI EXPERIENCES</span>
          <i>✦</i>
          <span>SAAS PRODUCTS</span>
          <i>✦</i>
        </div>
      </div>
    </section>
  );
}