import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],

    include: ["src/**/*.test.{ts,tsx}"],

    coverage: {
      provider: "v8",

      reporter: [
        "text",
        "json",
        "html"
      ],

      reportsDirectory: "./coverage",

      include: [
		  "src/buttons/GlowButton.tsx",
		  "src/buttons/GlassButton.tsx",
		  "src/buttons/MagneticButton.tsx",
		  "src/data/RadialProgress.tsx",
		  "src/data/AnimatedCounter.tsx",
		  "src/ui/GlassCard.tsx",
		  "src/ui/SpotlightCard.tsx",
		  "src/text/RevealText.tsx",
		],

      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80
      }
    }
  }
});