"use client";

import {
  BarChart3,
  DollarSign,
  Target,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Metric from "@/components/ui/Metric";
import PolyScore from "@/components/ui/PolyScore";
import ConsensusBadge from "@/components/ui/ConsensusBadge";

export default function OpportunityHero() {
  return (
    <Card className="overflow-hidden">
      <div className="p-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">

          {/* LEFT */}

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Today's Top Signal
            </div>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
              Spain -2.5
            </h1>

            <p className="mt-3 text-base font-medium text-slate-500">
              Sports • Spain vs Brazil
            </p>

            <ConsensusBadge
              wallets={3}
              className="mt-6"
            />

            <div className="mt-10 max-w-3xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Analyst Summary
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-700">
                Elite wallets have steadily increased exposure over the
                past 48 hours while maintaining unusually high capital
                concentration. Historical positioning patterns and
                trader alignment suggest above-average confidence
                heading into this event, with no significant reduction
                in conviction across leading participants.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <PolyScore
            grade="A+"
            score={97}
            percentile={2}
            className="h-full"
          />
        </div>
      </div>

      <div className="border-t border-slate-200" />

      {/* FOOTER */}

      <div className="flex flex-col gap-8 p-8 xl:flex-row xl:items-center xl:justify-between">

        <div className="grid flex-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">

          <Metric
            label="ROI"
            value="+18.4%"
            icon={<TrendingUp size={20} />}
          />

          <Metric
            label="Accuracy"
            value="91.2%"
            icon={<Target size={20} />}
          />

          <Metric
            label="Signal Strength"
            value="92"
            icon={<BarChart3 size={20} />}
          />

          <Metric
            label="Capital"
            value="$5.17M"
            icon={<DollarSign size={20} />}
          />

        </div>

        <Button className="w-full xl:w-auto">
          View Full Analysis
        </Button>
      </div>
    </Card>
  );
}