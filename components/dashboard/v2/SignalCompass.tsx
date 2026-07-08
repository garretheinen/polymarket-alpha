"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntelligenceNetwork from "./IntelligenceNetwork";
import Card from "@/components/ui/Card";

import CenterLogo from "./CenterLogo";
import CompassNode from "./CompassNode";
import SelectedCategory from "./SelectedCategory";

import {
  signalCompassData,
  SignalCompassCategory,
} from "./signalCompassData";

import { signalCompassLayout } from "./signalCompassLayout";

export default function SignalCompass() {
  const [selectedId, setSelectedId] = useState("sports");

  const selected = useMemo<SignalCompassCategory>(() => {
    return (
      signalCompassData.find(
        (category) => category.id === selectedId
      ) ?? signalCompassData[0]
    );
  }, [selectedId]);

  return (
    <Card className="overflow-hidden p-10">

      {/* Header */}

      <div className="mb-14 flex items-start justify-between">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Signal Compass
          </p>

          <h2 className="mt-3 text-5xl font-bold leading-tight tracking-tight text-slate-900">
            Find where smart money
            <br />
            is building conviction.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            PolySignal continuously analyzes prediction
            markets to surface where institutional-sized
            conviction is forming before it becomes obvious.
          </p>

        </div>

        <div className="rounded-full bg-emerald-50 px-5 py-3">

          <span className="text-sm font-semibold text-emerald-700">
            ● Live Intelligence
          </span>

        </div>

      </div>

      {/* Dashboard Layout */}

      <div className="grid items-start gap-12 lg:grid-cols-[70%_30%]">

        {/* Compass */}

        <div className="relative flex min-h-[780px] items-center justify-center overflow-hidden rounded-[36px]">

          {/* SVG Layer */}

          <IntelligenceNetwork
  selectedId={selected.id}
  className="pointer-events-none absolute inset-0 h-full w-full"
/>

          {/* Center Engine */}

          <CenterLogo active />

          {/* Compass Nodes */}

          {signalCompassData.map((category) => (
            <div
              key={category.id}
              className="absolute"
              style={signalCompassLayout[category.id].node}
            >
              <CompassNode
                name={category.name}
                grade={category.grade}
                signals={category.signals}
                active={selected.id === category.id}
                onClick={() =>
                  setSelectedId(category.id)
                }
              />
            </div>
          ))}

        </div>

        {/* Intelligence Panel */}

        <AnimatePresence mode="wait">

         <motion.div
  key={selected.id}
  initial={{
    opacity: 0,
    x: 12,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  exit={{
    opacity: 0,
    x: -12,
  }}
  transition={{
    duration: 0.2,
  }}
>
  <SelectedCategory
    name={selected.name}
    status={selected.status}
    summary={selected.summary}
    grade={selected.grade}
    strength={selected.strength}
    signals={selected.signals}
    capital={selected.capital}
    topOpportunity={selected.topOpportunity}
  />
</motion.div>

        </AnimatePresence>

      </div>

    </Card>
  );
}