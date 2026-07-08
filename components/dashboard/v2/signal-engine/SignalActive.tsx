"use client";

import { motion } from "framer-motion";

import { signalNetwork } from "./SignalNetwork";
import type { SignalPathId } from "./types";

interface Props {
  selected: SignalPathId;
}

export default function SignalActive({
  selected,
}: Props) {
  const path = signalNetwork[selected];

  // No active path yet
  if (!path || !path.trim()) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <motion.path
        key={selected}
        d={path}
        fill="none"
        stroke="#2563EB"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    </svg>
  );
}