"use client";

import type { Conviction } from "@/lib/domain/conviction";

interface ConfidenceSnapshotProps {
  conviction: Conviction;
}

export default function ConfidenceSnapshot({
  conviction,
}: ConfidenceSnapshotProps) {
  return (
    <aside>

      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
        Confidence Snapshot
      </p>

      {/* PolyScore */}

<div className="mt-12 text-center">

  <div className="text-8xl font-black tracking-tight text-slate-950">
    {conviction.polyScore}
  </div>

  <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
    PolyScore™
  </p>

  <p className="mt-3 text-sm font-medium text-slate-500">
    Highest Conviction
  </p>

</div>

      

      {/* Metrics */}

      <div className="mt-16 space-y-7">

        <SnapshotRow
          label="Consensus"
          value={`${conviction.consensus}%`}
        />

        <SnapshotRow
          label="Tracked Capital"
          value={`$${conviction.trackedCapital.toLocaleString()}`}
        />

        <SnapshotRow
          label="Supporting Signals"
          value={conviction.supportingSignals.toString()}
        />

        <SnapshotRow
          label="Conviction Trend"
          value="Strong"
        />

      </div>

    </aside>
  );
}

interface SnapshotRowProps {
  label: string;
  value: string;
}

function SnapshotRow({
  label,
  value,
}: SnapshotRowProps) {
  return (
    <div className="border-b border-slate-100 pb-5">

      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>

    </div>
  );
}