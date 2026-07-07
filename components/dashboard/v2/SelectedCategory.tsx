"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface SelectedCategoryProps {
  name: string;
  status: string;
  summary: string;
  grade: string;
  strength: number;
  signals: number;
  capital: string;
  topOpportunity: string;
}

export default function SelectedCategory({
  name,
  status,
  summary,
  grade,
  strength,
  signals,
  capital,
  topOpportunity,
}: SelectedCategoryProps) {
  return (
    <Card className="flex h-full flex-col p-8">

      {/* Category */}

      <div>

        <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
          {name}
        </p>

        <p className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          {status}
        </p>

        <p className="mt-5 text-base leading-7 text-slate-600">
          {summary}
        </p>

      </div>

      {/* Metrics */}

      <div className="my-8 space-y-5 border-y border-slate-200 py-6">

        <Metric
          label="PolyScore™"
          value={grade}
        />

        <Metric
          label="Signal Strength"
          value={strength.toString()}
        />

        <Metric
          label="Tracked Capital"
          value={capital}
        />

        <Metric
          label="Active Signals"
          value={signals.toString()}
        />

      </div>

      {/* Top Opportunity */}

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Top Opportunity
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {topOpportunity}
        </h3>

      </div>

      {/* CTA */}

      <div className="mt-auto pt-8">

        <Button className="w-full">
          View {name}
        </Button>

      </div>

    </Card>
  );
}

interface MetricProps {
  label: string;
  value: string;
}

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-lg font-semibold text-slate-900">
        {value}
      </span>

    </div>
  );
}