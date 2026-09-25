import type { CSSProperties } from "react";
import type { SignalCompassNodeId } from "./signalCompassLayout";

// Shared by the node positions and guide so both follow the same ellipse.
// Insets reserve space for the 9rem-wide buttons and the labels below each orb.
export const signalCompassOrbit = {
  horizontalInsetRem: 5,
  verticalInsetRem: 6,
} as const;

const clockwiseOrder: SignalCompassNodeId[] = [
  "politics",
  "sports",
  "crypto",
  "weather",
  "entertainment",
  "macro",
  "ai",
  "economy",
];

function orbitCoordinate(direction: number, insetRem: number): string {
  const percent = 50 + direction * 50;
  const offset = -direction * insetRem;
  return `calc(${percent.toFixed(6)}% ${offset < 0 ? "-" : "+"} ${Math.abs(offset).toFixed(6)}rem)`;
}

export const signalCompassPositions = Object.fromEntries(
  clockwiseOrder.map((id, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / clockwiseOrder.length;

    return [id, {
      left: orbitCoordinate(Math.cos(angle), signalCompassOrbit.horizontalInsetRem),
      top: orbitCoordinate(Math.sin(angle), signalCompassOrbit.verticalInsetRem),
      // Orb center = button padding (0.75rem) + half the orb (2.25rem).
      // Center the orb on the guide, not the taller orb-and-label group.
      transform: "translate(-50%, -3rem)",
    }];
  })
) as Record<SignalCompassNodeId, CSSProperties>;
