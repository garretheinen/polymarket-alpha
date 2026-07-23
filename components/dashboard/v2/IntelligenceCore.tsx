"use client";

import clsx from "clsx";

import Logo from "@/components/ui/logo";

import {
  SignalCompassNodeId,
  signalCompassLayout,
} from "./signalCompassLayout";

import {
  SignalCompassState,
} from "./signalCompassState";

import {
  getCompassDirection,
} from "./signalCompassDirection";

import {
  getBeaconResonance,
} from "./BeaconResonance";

interface IntelligenceCoreProps {
  className?: string;
  interactionState: SignalCompassState;
  observedId?: string | null;
}

export default function IntelligenceCore({
  className,
  interactionState,
  observedId,
}: IntelligenceCoreProps) {
  const validObservedId =
    observedId &&
    Object.prototype.hasOwnProperty.call(
      signalCompassLayout,
      observedId
    )
      ? (observedId as SignalCompassNodeId)
      : null;

  const direction = getCompassDirection(validObservedId);

  const resonance = getBeaconResonance(interactionState);

  return (
    <div
      className={clsx(
        "relative flex h-[270px] w-[270px] items-center justify-center",
        className
      )}
    >
      {/* Ambient Atmosphere */}

      <div
        className="absolute h-[300px] w-[300px] rounded-full blur-[95px] transition-all duration-500 ease-out"
        style={{
          transform: `
            translate(
              ${direction.haloOffset.x * 0.25}px,
              ${direction.haloOffset.y * 0.25}px
            )
            scale(${resonance.atmosphereScale})
          `,
          background:
            "radial-gradient(circle, rgba(37,99,235,.08) 0%, rgba(37,99,235,.03) 55%, transparent 100%)",
        }}
      />

      {/* Outer Halo */}

      <div
        className="absolute h-[220px] w-[220px] rounded-full blur-[55px] transition-all duration-500 ease-out"
        style={{
          transform: `
            translate(
              ${direction.haloOffset.x * 0.55}px,
              ${direction.haloOffset.y * 0.55}px
            )
            scale(${resonance.haloScale})
          `,
          background:
            "radial-gradient(circle, rgba(59,130,246,.08) 0%, rgba(59,130,246,.02) 75%, transparent 100%)",
        }}
      />

      {/* Inner Halo */}

      <div
        className="absolute h-[180px] w-[180px] rounded-full blur-[24px] transition-all duration-500 ease-out"
        style={{
          transform: `
            translate(
              ${direction.haloOffset.x}px,
              ${direction.haloOffset.y}px
            )
            scale(${resonance.haloScale})
          `,
          background:
            "radial-gradient(circle, rgba(96,165,250,.18) 0%, rgba(96,165,250,.04) 70%, transparent 100%)",
        }}
      />

      {/* Beacon Frame */}

      <div
        className="relative z-20 flex h-[108px] w-[108px] items-center justify-center rounded-[26px] border-2 border-slate-100 bg-white/[0.05] backdrop-blur-sm transition-all duration-500 ease-out"
        style={{
          transform: `scale(${resonance.coreScale})`,
          boxShadow: `
            0 10px 24px rgba(15,23,42,.045),
            0 0 ${28 * resonance.glowOpacity}px rgba(37,99,235,.08),
            inset 0 1px 0 rgba(255,255,255,.72),
            inset 0 -2px 4px rgba(15,23,42,.04)
          `,
        }}
      >
        {/* Blue Intelligence Core */}

        <div
          className="relative flex h-[100px] w-[100px] items-center justify-center rounded-[20px] transition-all duration-500 ease-out"
          style={{
            background:
              "linear-gradient(180deg,#3B82F6 0%, #2563EB 55%, #1D4ED8 100%)",
            boxShadow: `
              0 12px 30px rgba(37,99,235,.20),
              inset 0 2px 2px rgba(255,255,255,.12),
              inset 0 -3px 6px rgba(0,0,0,.08)
            `,
          }}
        >
          {/* Directional Energy */}

          <div
            className="absolute inset-0 rounded-[20px] transition-all duration-500 ease-out"
            style={{
              background: `
                radial-gradient(
                  circle at ${direction.glowOrigin.x}% ${direction.glowOrigin.y}%,
                  rgba(255,255,255,${0.18 * resonance.glowOpacity}),
                  transparent 36%
                ),
                radial-gradient(
                  circle at 50% 50%,
                  rgba(255,255,255,.035),
                  transparent 72%
                )
              `,
            }}
          />

          {/* Edge Reflection */}

          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,.06), transparent 42%)",
            }}
          />

          {/* Logo */}

          <div
            className="relative z-20 transition-all duration-500 ease-out"
            style={{
              transform: `scale(${resonance.coreScale})`,
            }}
          >
            <Logo
              iconOnly
              size="md"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}