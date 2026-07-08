"use client";

import {
  logoAnchors,
  nodeAnchors,
  NodeId,
} from "./intelligenceNetworkAnchors";

interface IntelligenceNetworkProps {
  className?: string;
  selectedId: NodeId;
}

export default function IntelligenceNetwork({
  className,
  selectedId,
}: IntelligenceNetworkProps) {
  const target = nodeAnchors[selectedId];
  const start = logoAnchors[target.logoAnchor];

  // Gentle control points for a premium-looking curve
  const cp1x =
    start.x + (target.x - start.x) * 0.35;

  const cp1y = start.y;

  const cp2x =
    start.x + (target.x - start.x) * 0.75;

  const cp2y = target.y;

  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path
        d={`
          M ${start.x} ${start.y}
          C
          ${cp1x} ${cp1y}
          ${cp2x} ${cp2y}
          ${target.x} ${target.y}
        `}
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".08"
      />

      {/* Temporary anchor visualization */}
      <circle
        cx={start.x}
        cy={start.y}
        r="3"
        fill="#2563EB"
        opacity=".3"
      />
    </svg>
  );
}