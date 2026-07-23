"use client";

import type { IntelligenceBrief } from "@/lib/intelligence/briefing";

interface IntelligenceSummaryProps {
  briefing: IntelligenceBrief;
}

export default function IntelligenceSummary({
  briefing,
}: IntelligenceSummaryProps) {
  return (
    <section className="mt-14">

      {/* Main Intelligence Section */}

      <div className="grid items-start gap-12 lg:grid-cols-[240px_1fr]">

        {/* PolyScore */}

        <div className="rounded-3xl bg-blue-600 px-8 py-8 text-center shadow-sm">

          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100">
            PolyScore™
          </p>

          <div className="mt-4 text-7xl font-black tracking-tight text-white">
            {briefing.polyScore}
          </div>

          <p className="mt-4 text-sm font-semibold text-blue-100">
            Highest Rated
          </p>

        </div>

        {/* Intelligence Narrative */}

        <div>

          <div className="inline-flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">

              <span className="text-lg font-semibold text-emerald-600">
                ✦
              </span>

            </div>

            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">
              Elite Consensus
            </p>

          </div>

          {/* Executive Conclusion */}

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950">
            {briefing.headline}
          </h2>

          <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-600">
            {briefing.summary}
          </p>

          {/* Conviction Explanation */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            {briefing.explanation}
          </p>

        </div>

      </div>

      {/* Dynamic Evidence */}

      <div className="mt-12 border-t border-slate-200 pt-8">

        <div className="grid gap-10 md:grid-cols-3">

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

      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
        {value}
      </p>

    </div>
  );
}