"use client";
const DEV_EDITOR = true;
import Logo from "@/components/ui/logo";

import AmbientGlow from "./AmbientGlow";
import DirectionalGlow from "./DirectionalGlow";
import SignalBackground from "./SignalBackground";
import SignalActive from "./SignalActive";

import type { SignalPathId } from "./types";

interface SignalEngineProps {
  selected: SignalPathId;
}

export default function SignalEngine({
  selected,
}: SignalEngineProps) {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Permanent Network */}
      <SignalBackground />

      {/* Ambient Engine Glow */}
      <AmbientGlow />

      {/* Directional Energy */}
      <DirectionalGlow selected={selected} />

      {/* Active Signal */}
      <SignalActive selected={selected} />

      {/* Intelligence Engine */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Logo
          iconOnly
          size="lg"
        />
      </div>
    </div>
  );
}