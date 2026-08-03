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
  const briefing = createIntelligenceBrief(opportunity);


  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="px-14 pt-10 pb-8">
        {/* Top Signal */}

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 shadow-sm">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />

            <span className="text-sm font-bold uppercase tracking-[0.24em] text-slate-700">
              Top Signal
            </span>
          </div>
        </div>

        {/* Opportunity */}

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-2xl bg-blue-600 px-10 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
            <h1 className="text-[54px] font-extrabold leading-none tracking-tight text-white">
              {briefing.title}
            </h1>
          </div>
        </div>

        {/* Metadata */}

        {/* Metadata */}

<div className="mt-6 flex flex-wrap items-center justify-center text-[15px] font-medium text-slate-600">

  {briefing.metadata.map((item, index) => (
    <div
      key={item.label}
      className="flex items-center"
    >
      {item.icon && (
        <span className="mr-2 text-base">
          {item.icon}
        </span>
      )}

      <span>
        {item.label}
      </span>

      {index < briefing.metadata.length - 1 && (
        <span className="mx-5 text-slate-300">
          •
        </span>
      )}
    </div>
  ))}

</div>