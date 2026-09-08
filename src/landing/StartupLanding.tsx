import type {
  HTMLAttributes,
} from "react";

import "./StartupLanding.css";

export interface StartupLandingProps
  extends HTMLAttributes<HTMLElement> {
  accent?: string;
  background?: string;
  radius?: number;

  showMetrics?: boolean;
  showFeatures?: boolean;

  className?: string;
}

export function StartupLanding({
  accent = "#7d63ff",
  background = "#08080c",
  radius = 20,

  showMetrics = true,
  showFeatures = true,

  className = "",
  style,

  ...props
}: StartupLandingProps) {
  return (
    <section
      {...props}
      className={`fb-startup-landing ${className}`}
      style={{
        ...style,

        background,

        ["--fb-startup-accent" as string]:
          accent,

        ["--fb-startup-radius" as string]:
          `${radius}px`,
      }}
    >
      <nav className="fb-startup-landing__nav">
        <strong>
          ACME.
        </strong>

        <div>
          <a href="#product">
            Product
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#pricing">
            Pricing
          </a>
        </div>

        <button
          type="button"
        >
          Join waitlist
        </button>
      </nav>

      <div className="fb-startup-landing__hero">
        <span>
          LAUNCHING 2026
        </span>

        <h2>
          From idea
          <br />
          to momentum.
        </h2>

        <p>
          A focused operating
          layer for ambitious
          startups that want to
          build, launch and learn
          faster.
        </p>

        <button
          type="button"
        >
          Get early access
        </button>
      </div>

      {showMetrics && (
        <div className="fb-startup-landing__metrics">
          {[
            [
              "42K",
              "Early users",
            ],
            [
              "4.9",
              "Average rating",
            ],
            [
              "99.9%",
              "Platform uptime",
            ],
          ].map(
            (
              [
                value,
                label,
              ]
            ) => (
              <article
                key={
                  label
                }
              >
                <strong>
                  {value}
                </strong>

                <span>
                  {label}
                </span>
              </article>
            )
          )}
        </div>
      )}

      {showFeatures && (
        <div
          id="features"
          className="fb-startup-landing__features"
        >
          {[
            "Ship",
            "Measure",
            "Scale",
          ].map(
            (
              feature,
              index
            ) => (
              <article
                key={
                  feature
                }
              >
                <span>
                  0{
                    index +
                    1
                  }
                </span>

                <h3>
                  {feature}
                </h3>

                <p>
                  Simple tools
                  designed around
                  the decisions
                  that matter.
                </p>
              </article>
            )
          )}
        </div>
      )}
    </section>
  );
}