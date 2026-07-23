"use client";

import Card from "@/components/ui/Card";

import type { Opportunity } from "@/lib/domain/opportunity";

import { createIntelligenceBrief } from "@/lib/intelligence/formatter";

import IntelligenceSummary from "./IntelligenceSummary";

interface OpportunityHeroProps {
  opportunity: Opportunity;
}

export default function OpportunityHero({
  opportunity,
}: OpportunityHeroProps) {

  // Build the Intelligence Brief once.
  // Everything below consumes intelligence, not raw opportunity data.

  const briefing = createIntelligenceBrief(opportunity);
console.log("Briefing object:", briefing);
  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="px-14 pt-12 pb-10">

        {/* Top Signal */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 shadow-sm">

            <div className="h-3 w-3 rounded-full bg-emerald-500" />

            <span className="text-sm font-bold uppercase tracking-[0.24em] text-slate-700">
              Top Signal
            </span>

          </div>

        </div>

        {/* Title */}

        <div className="mt-10 flex justify-center">

          <div className="inline-flex rounded-xl bg-blue-600 px-8 py-3">

            <h1 className="text-5xl font-extrabold leading-none tracking-tight text-white">
              {briefing.title}
            </h1>

          </div>

        </div>

        {/* Metadata */}

        <div className="mt-6 flex flex-wrap justify-center gap-4">

          <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
            {briefing.category}
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600">
            {briefing.matchup}
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600">
            {briefing.resolution}
          </span>

        </div>

        {/* Executive Summary */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-slate-600">
          Highest conviction opportunity identified across all tracked
          markets.
        </p>

        {/* Intelligence */}

        <IntelligenceSummary briefing={briefing} />

      </div>

    </Card>
  );
}