"use client";

import { useId } from "react";

import {
  signalCompassLayout,
  SignalCompassNodeId,
} from "./signalCompassLayout";

interface IntelligenceNetworkProps {
  className?: string;

  selectedId: SignalCompassNodeId;

  // NEW
  observedId?: string | null;
}

const logoAnchors = {
  top: { x: 500, y: 465 },
  right: { x: 535, y: 500 },
  bottom: { x: 500, y: 535 },
  left: { x: 465, y: 500 },
} as const;

function percent(value?: string) {
  return value ? Number.parseFloat(value) : undefined;
}

export default function IntelligenceNetwork({
  className,
  selectedId,
  observedId,
}: IntelligenceNetworkProps) {
  const id = useId();

  //
  // Observed temporarily overrides selected
  //

  const targetId =
    (observedId as SignalCompassNodeId | null) ?? selectedId;

  const observed = observedId !== null;

  const layout = signalCompassLayout[targetId];

  const start = logoAnchors[layout.network.logoAnchor];

  let targetX = 500;
  let targetY = 500;

  //
  // Determine node position
  //

  if ("left" in layout.node && layout.node.left) {
    targetX = percent(layout.node.left)! * 10;
  }

  if ("right" in layout.node && layout.node.right) {
    targetX = 1000 - percent(layout.node.right)! * 10;
  }

  if ("top" in layout.node && layout.node.top) {
    targetY = percent(layout.node.top)! * 10;
  }

  if ("bottom" in layout.node && layout.node.bottom) {
    targetY = 1000 - percent(layout.node.bottom)! * 10;
  }

  //
  // Move endpoint to edge of node
  //

  switch (layout.network.entrySide) {
    case "left":
      targetX -= 35;
      break;

    case "right":
      targetX += 35;
      break;

    case "top":
      targetY -= 35;
      break;

    case "bottom":
      targetY += 35;
      break;
  }

  //
  // Routed path
  //

  let d = "";

  switch (layout.network.logoAnchor) {
    case "top":
    case "bottom":
      d = `
        M ${start.x} ${start.y}
        L ${start.x} ${targetY}
      `;
      break;

    case "left":
    case "right":
      d = `
        M ${start.x} ${start.y}
        L ${targetX} ${start.y}
      `;
      break;
  }

  const networkGradient = `${id}-network`;
  const activeGradient = `${id}-active`;
  const flowGlow = `${id}-glow`;

  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Base Network */}

        <linearGradient
          id={networkGradient}
          x1={start.x}
          y1={start.y}
          x2={targetX}
          y2={targetY}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
          <stop offset="45%" stopColor="#2563EB" stopOpacity="0.035" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>

        {/* Active / Observed Flow */}

        <linearGradient
          id={activeGradient}
          x1={start.x}
          y1={start.y}
          x2={targetX}
          y2={targetY}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0%"
            stopColor="#2563EB"
            stopOpacity={observed ? "0.75" : "0.55"}
          />

          <stop
            offset="20%"
            stopColor="#3B82F6"
            stopOpacity={observed ? "0.50" : "0.35"}
          />

          <stop
            offset="60%"
            stopColor="#60A5FA"
            stopOpacity={observed ? "0.22" : "0.14"}
          />

          <stop
            offset="100%"
            stopColor="#60A5FA"
            stopOpacity="0"
          />
        </linearGradient>

        {/* Glow */}

        <filter
          id={flowGlow}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            stdDeviation={observed ? "3.2" : "2.5"}
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base Network */}

      <path
        d={d}
        fill="none"
        stroke={`url(#${networkGradient})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Intelligence Flow */}

      <path
        d={d}
        fill="none"
        stroke={`url(#${activeGradient})`}
        strokeWidth={observed ? "2.8" : "2.25"}
        strokeLinecap="round"
        filter={`url(#${flowGlow})`}
        style={{
          transition:
            "stroke-width 250ms ease, filter 250ms ease",
        }}
      />
    </svg>
  );
}