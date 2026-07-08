"use client";

import { motion } from "framer-motion";
import type { SignalPathId } from "./types";

interface Props {
  selected: SignalPathId;
}

const offsets: Record<SignalPathId, { x: number; y: number }> = {
  politics: { x: 0, y: -30 },
  sports: { x: 30, y: -10 },
  crypto: { x: 28, y: 20 },
  weather: { x: 15, y: 35 },
  entertainment: { x: 0, y: 40 },
  macro: { x: -15, y: 35 },
  ai: { x: -28, y: 20 },
  economy: { x: -30, y: -10 },
};

export default function DirectionalGlow({
  selected,
}: Props) {
  const offset = offsets[selected];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl"
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    />
  );
}