import { describe, expect, it } from "vitest";

import * as Root from "./index";
import * as Buttons from "./buttons";
import * as Data from "./data";
import * as AI from "./ai";
import * as Backgrounds from "./backgrounds";
import * as Heroes from "./heroes";
import * as Landing from "./landing";
import * as Motion from "./motion";
import * as Text from "./text";
import * as UI from "./ui";

describe("FB Components public API", () => {
  it("exports all expected root components", () => {
    const expectedExports = [
      "AiPromptBox",
      "AnimatedCounter",
      "AuroraGrid",
      "BlurReveal",
      "DotMatrix",
      "GlassButton",
      "GlassCard",
      "GlowButton",
      "GlowCursor",
      "GradientMesh",
      "MagneticButton",
      "MagneticCursor",
      "MetricGrid",
      "NoiseField",
      "PredictiveArc",
      "RadialProgress",
      "RevealText",
      "SaasLaunchHero",
      "SignalParticles",
      "SpotlightCard",
      "StartupLanding",
      "StreamingResponse"
    ];

    expect(
      Object.keys(Root).sort()
    ).toEqual(
      expectedExports.sort()
    );
  });

  it("keeps button exports stable", () => {
    expect(
      Object.keys(Buttons).sort()
    ).toEqual(
      [
        "GlassButton",
        "GlowButton",
        "MagneticButton"
      ].sort()
    );
  });

  it("keeps data exports stable", () => {
    expect(
      Object.keys(Data).sort()
    ).toEqual(
      [
        "AnimatedCounter",
        "MetricGrid",
        "RadialProgress"
      ].sort()
    );
  });

  it("keeps AI exports stable", () => {
    expect(
      Object.keys(AI).sort()
    ).toEqual(
      [
        "AiPromptBox",
        "StreamingResponse"
      ].sort()
    );
  });

  it("keeps background exports stable", () => {
    expect(
      Object.keys(Backgrounds).sort()
    ).toEqual(
      [
        "AuroraGrid",
        "DotMatrix",
        "GradientMesh",
        "NoiseField",
        "PredictiveArc",
        "SignalParticles"
      ].sort()
    );
  });

  it("keeps remaining category exports stable", () => {
    expect(Object.keys(Heroes)).toContain(
      "SaasLaunchHero"
    );

    expect(Object.keys(Landing)).toContain(
      "StartupLanding"
    );

    expect(Object.keys(Motion)).toEqual(
      expect.arrayContaining([
        "GlowCursor",
        "MagneticCursor"
      ])
    );

    expect(Object.keys(Text)).toEqual(
      expect.arrayContaining([
        "BlurReveal",
        "RevealText"
      ])
    );

    expect(Object.keys(UI)).toEqual(
      expect.arrayContaining([
        "GlassCard",
        "SpotlightCard"
      ])
    );
  });
});