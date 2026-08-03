"use client";

import type { IntelligenceBrief } from "@/lib/intelligence/briefing";

interface IntelligenceSummaryProps {
  briefing: IntelligenceBrief;
}

export default function IntelligenceSummary({
  briefing,
}: IntelligenceSummaryProps) {
  return (
    <section className="mt-12">
      <div className="grid items-start gap-10 lg:grid-cols-[250px_1fr]">
        {/* PolyScore */}

        <div className="rounded-3xl bg-blue-600 px-10 py-7 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100">
            PolyScore™
          </p>

          <div className="mt-4 text-8xl font-black tracking-tight text-white">
            {briefing.polyScore}
          </div>
        </div>

        {/* Narrative */}

        <div>
          <div className="inline-flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
              <span className="text-base font-semibold text-emerald-600">
                ✦
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Elite Consensus
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
            {briefing.headline}
          </h2>

          <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600">
            {briefing.summary}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
            {briefing.explanation}
          </p>
        </div>
      </div>

      {/* Evidence */}

      <div className="mt-10 border-t border-slate-200 pt-6">
        <div className="grid gap-8 md:grid-cols-3">
          {briefing.evidence.map((item) => (
            <EvidenceMetric
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
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
    <div className="text-center">
      <p className="text-xs font-semibold tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-[2.6rem] font-bold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}