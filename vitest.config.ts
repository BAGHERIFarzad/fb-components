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
		  "src/data/MetricGrid.tsx",

		  "src/ui/GlassCard.tsx",
		  "src/ui/SpotlightCard.tsx",

		  "src/text/RevealText.tsx",
		  "src/text/BlurReveal.tsx",

		  "src/ai/AiPromptBox.tsx",
		  "src/ai/StreamingResponse.tsx",
		  
		  "src/motion/GlowCursor.tsx",
		  "src/motion/MagneticCursor.tsx",
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