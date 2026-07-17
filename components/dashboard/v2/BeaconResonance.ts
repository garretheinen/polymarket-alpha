import { SignalCompassState } from "./signalCompassState";

export interface BeaconResonance {
  state: SignalCompassState;

  atmosphereScale: number;
  haloScale: number;
  coreScale: number;

  glowOpacity: number;

  duration: number;
}

export function getBeaconResonance(
  state: SignalCompassState
): BeaconResonance {
  switch (state) {
  case "observed":
    return {
      state,

      atmosphereScale: 1.03,
      haloScale: 1.025,
      coreScale: 1.008,

      glowOpacity: 1.15,

      duration: 0.35,
    };

  case "focused":
    return {
      state,

      atmosphereScale: 1.05,
      haloScale: 1.04,
      coreScale: 1.012,

      glowOpacity: 1.30,

      duration: 0.45,
    };

  case "updated":
    return {
      state,

      atmosphereScale: 1.06,
      haloScale: 1.045,
      coreScale: 1.014,

      glowOpacity: 1.40,

      duration: 0.50,
    };

  case "critical":
    return {
      state,

      atmosphereScale: 1.08,
      haloScale: 1.06,
      coreScale: 1.018,

      glowOpacity: 1.50,

      duration: 0.55,
    };

   default:
    return {
      state: "idle",

      atmosphereScale: 1,
      haloScale: 1,
      coreScale: 1,

      glowOpacity: 1,

      duration: 0.6,
    };
  }
}