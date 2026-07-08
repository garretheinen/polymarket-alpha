"use client";

import { signalNetwork } from "./SignalNetwork";

export default function SignalBackground() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
     {Object.entries(signalNetwork).map(([id, path]) => {
  if (!path.trim()) return null;

  return (
    <path
      key={id}
      d={path}
      fill="none"
      stroke="#2563EB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity=".06"
    />
  );
})}
    </svg>
  );
}