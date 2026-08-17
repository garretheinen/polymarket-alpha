"use client";

import type { IntelligenceBrief } from "@/lib/intelligence/briefing";

interface IntelligenceSummaryProps {
  briefing: IntelligenceBrief;
}

export default function IntelligenceSummary({
  briefing,
}: IntelligenceSummaryProps) {
  return (
    <section className="mt-9">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base leading-7 text-slate-600">
          {briefing.summary}
        </p>

        <p className="mt-3 text-base leading-7 text-slate-500">
          {briefing.explanation}
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="flex h-[152px] w-[152px] flex-col items-center justify-center rounded-2xl bg-blue-600 shadow-sm">
          <div className="text-[72px] font-black leading-none tracking-tight text-white">
            {briefing.polyScore}
          </div>

          <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
            PolyScore™
          </div>
        </div>

        <p className="mt-4 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
          {briefing.verdict}
        </p>
      </div>

      <div className="mt-7 grid gap-8 sm:grid-cols-3">
        {briefing.evidence.map((item) => (
          <EvidenceMetric
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </section>
  );
}

interface EvidenceMetricProps {
  label: string;
  value: string;
}

function EvidenceMetric({
  label,
  value,
}: EvidenceMetricProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-[44px] font-bold leading-none tracking-tight text-slate-950">
        {value}
      </div>

      <div className="mt-2 text-xs font-medium text-slate-500">
        {label}
      </div>
    </div>
  );
}