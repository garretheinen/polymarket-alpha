import { SignalCompassState } from "./signalCompassState";

export interface NodeResonance {
  state: SignalCompassState;

  scale: number;

  borderOpacity: number;

  glowOpacity: number;

  ringOpacity: number;

  duration: number;
}

export function getNodeResonance(
  state: SignalCompassState
): NodeResonance {
  switch (state) {
    case "observed":
      return {
        state,

        scale: 1.02,

        borderOpacity: 0.9,

        glowOpacity: 0.35,

        ringOpacity: 0,

        duration: 0.25,
      };

    case "focused":
      return {
        state,

        scale: 1.05,

        borderOpacity: 1,

        glowOpacity: 0.55,

        ringOpacity: 0.45,

        duration: 0.3,
      };

    case "updated":
      return {
        state,

        scale: 1.01,

        borderOpacity: 0.9,

        glowOpacity: 0.45,

        ringOpacity: 0.22,

        duration: 0.4,
      };

    case "critical":
      return {
        state,

        scale: 1.03,

        borderOpacity: 1,

        glowOpacity: 0.75,

        ringOpacity: 0.5,

        duration: 0.45,
      };

    default:
      return {
        state: "idle",

        scale: 1,

        borderOpacity: 0.65,

        glowOpacity: 0,

        ringOpacity: 0,

        duration: 0.3,
      };
  }
}