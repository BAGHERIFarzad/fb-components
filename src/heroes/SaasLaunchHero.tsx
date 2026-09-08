import type {
  HTMLAttributes,
} from "react";

import "./SaasLaunchHero.css";

export interface SaasLaunchHeroProps
  extends HTMLAttributes<HTMLElement> {
  accent?: string;
  background?: string;
  headlineSize?: number;

  eyebrow?: string;
  title?: string;
  description?: string;

  primaryLabel?: string;
  secondaryLabel?: string;

  showSecondary?: boolean;
  showProof?: boolean;

  className?: string;
}

export function SaasLaunchHero({
  accent = "#8f73ff",
  background = "#09090d",
  headlineSize = 72,

  eyebrow =
    "BUILT FOR MODERN TEAMS",

  title =
    "Ship faster.\nScale smarter.",

  description =
    "Everything your team needs to launch, learn and scale without adding unnecessary complexity.",

  primaryLabel =
    "Start free",

  secondaryLabel =
    "See demo",

  showSecondary = true,
  showProof = true,

  className = "",
  style,

  ...props
}: SaasLaunchHeroProps) {
  return (
    <section
      {...props}
      className={`fb-saas-launch-hero ${className}`}
      style={{
        ...style,

        background,

        ["--fb-saas-accent" as string]:
          accent,

        ["--fb-saas-headline-size" as string]:
          `${headlineSize}px`,
      }}
    >
      <div
        className="fb-saas-launch-hero__glow"
        aria-hidden="true"
      />

      <div className="fb-saas-launch-hero__content">
        <span className="fb-saas-launch-hero__eyebrow">
          {eyebrow}
        </span>

        <h2>
          {title
            .split("\n")
            .map(
              (
                line,
                index
              ) => (
                <span
                  key={`${line}-${index}`}
                >
                  {line}
                </span>
              )
            )}
        </h2>

        <p>
          {description}
        </p>

        <div className="fb-saas-launch-hero__actions">
          <button
            type="button"
            className="fb-saas-launch-hero__primary"
          >
            {primaryLabel}
          </button>

          {showSecondary && (
            <button
              type="button"
              className="fb-saas-launch-hero__secondary"
            >
              {secondaryLabel}
            </button>
          )}
        </div>

        {showProof && (
          <div className="fb-saas-launch-hero__proof">
            <div
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>

            <p>
              Trusted by product
              teams building the
              next generation.
            </p>
          </div>
        )}
      </div>

      <div
        className="fb-saas-launch-hero__visual"
        aria-hidden="true"
      >
        <div className="fb-saas-launch-hero__visual-card">
          <span>
            ACTIVE USERS
          </span>

          <strong>
            42,891
          </strong>

          <small>
            +18.4%
          </small>
        </div>

        <div className="fb-saas-launch-hero__bars">
          {[
            42,
            64,
            51,
            76,
            68,
            88,
            72,
          ].map(
            (
              height,
              index
            ) => (
              <span
                key={index}
                style={{
                  height:
                    `${height}%`,
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}