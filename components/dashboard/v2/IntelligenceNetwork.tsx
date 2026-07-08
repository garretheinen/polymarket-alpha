"use client";

import {
  signalCompassLayout,
  SignalCompassNodeId,
} from "./signalCompassLayout";

interface IntelligenceNetworkProps {
  className?: string;
  selectedId: SignalCompassNodeId;
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
}: IntelligenceNetworkProps) {
  const layout = signalCompassLayout[selectedId];

  const start = logoAnchors[layout.network.logoAnchor];

  let targetX = 500;
  let targetY = 500;

  // Determine node position from layout
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

  // Move the endpoint onto the edge of the node
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
  // V3 ROUTED PATHS
  //

  let d = "";

  switch (layout.network.logoAnchor) {
    case "top":
      d = `
        M ${start.x} ${start.y}
        L ${start.x} ${targetY}
      `;
      break;

    case "bottom":
      d = `
        M ${start.x} ${start.y}
        L ${start.x} ${targetY}
      `;
      break;

    case "left":
      d = `
        M ${start.x} ${start.y}
        L ${targetX} ${start.y}
      `;
      break;

    case "right":
      d = `
        M ${start.x} ${start.y}
        L ${targetX} ${start.y}
      `;
      break;
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".10"
      />
    </svg>
  );
}