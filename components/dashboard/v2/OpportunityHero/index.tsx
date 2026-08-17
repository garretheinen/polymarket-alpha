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
      <div className="px-8 py-10 sm:px-10 lg:px-14">
        {/* Masthead */}

        <div className="flex justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-blue-600">
            {briefing.masthead}
          </p>
        </div>

        {/* Section Label */}

        <div className="mt-4 flex justify-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {briefing.sectionTitle}
          </p>
        </div>

        {/* Opportunity Title */}

        <div className="mt-5 flex justify-center">
          <h1 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-950 sm:text-[44px] lg:text-[46px]">
            {briefing.title}
          </h1>
        </div>

        {/* Metadata */}

        <div className="mt-4 flex justify-center">
          <div className="flex flex-wrap items-center justify-center text-sm font-medium text-slate-400">
            {briefing.metadata.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center"
              >
                <span>{item.label}</span>

                {index < briefing.metadata.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-3 text-slate-300"
                  >
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Intelligence Brief */}

        <IntelligenceSummary briefing={briefing} />
      </div>
    </Card>
  );
}