"use client";

import type { Intelligence } from "@/lib/domain/intelligence";

interface IntelligenceNarrativeProps {
  intelligence: Intelligence;
}

export default function IntelligenceNarrative({
  intelligence,
}: IntelligenceNarrativeProps) {
  return (
    <section>

      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
        Intelligence Narrative
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        {intelligence.narrative}
      </p>

    </section>
  );
}