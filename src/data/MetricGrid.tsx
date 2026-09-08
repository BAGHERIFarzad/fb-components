import type {
  HTMLAttributes,
} from "react";

import "./MetricGrid.css";

export interface MetricItem {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}

export interface MetricGridProps
  extends HTMLAttributes<HTMLDivElement> {
  accent?: string;
  background?: string;

  columns?: number;
  radius?: number;

  items?: MetricItem[];

  className?: string;
}

const defaultItems:
  MetricItem[] = [
    {
      label:
        "Revenue",

      value:
        "$84.2K",

      delta:
        "+12.6%",

      positive:
        true,
    },

    {
      label:
        "Users",

      value:
        "18.4K",

      delta:
        "+8.1%",

      positive:
        true,
    },

    {
      label:
        "Conversion",

      value:
        "7.8%",

      delta:
        "+2.4%",

      positive:
        true,
    },

    {
      label:
        "Latency",

      value:
        "94ms",

      delta:
        "-11%",

      positive:
        true,
    },
  ];

export function MetricGrid({
  accent = "#9b7cff",
  background = "#111116",

  columns = 3,
  radius = 18,

  items =
    defaultItems,

  className = "",
  style,

  ...props
}: MetricGridProps) {
  return (
    <div
      {...props}
      className={`fb-metric-grid ${className}`}
      style={{
        ...style,

        gridTemplateColumns:
          `repeat(${Math.max(
            1,
            columns
          )}, minmax(0, 1fr))`,

        ["--fb-metric-accent" as string]:
          accent,

        ["--fb-metric-background" as string]:
          background,

        ["--fb-metric-radius" as string]:
          `${radius}px`,
      }}
    >
      {items.map(
        (
          item
        ) => (
          <article
            key={
              item.label
            }
          >
            <span>
              {
                item.label
              }
            </span>

            <strong>
              {
                item.value
              }
            </strong>

            {item.delta && (
              <small
                className={
                  item.positive ===
                  false
                    ? "is-negative"
                    : ""
                }
              >
                {
                  item.delta
                }
              </small>
            )}
          </article>
        )
      )}
    </div>
  );
}