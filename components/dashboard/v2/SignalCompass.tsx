"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Card from "@/components/ui/Card";

import IntelligenceCore from "./IntelligenceCore";
import IntelligenceNetwork from "./IntelligenceNetwork";
import CompassNode from "./CompassNode";
import PreviewBanner from "./PreviewBanner";
import SelectedCategory from "./SelectedCategory";

import {
  signalCompassData,
  SignalCompassCategory,
} from "./signalCompassData";

import { signalCompassPositions } from "./signalCompassPositions";

import { getSignalCompassState } from "./signalCompassState";

export default function SignalCompass() {
  //
  // Selected (clicked)
  //

  const [selectedId, setSelectedId] = useState("sports");

  //
  // Observed (hovered)
  //

  const [observedId, setObservedId] = useState<string | null>(null);

  //
  // Selected Category
  //

  const selected = useMemo<SignalCompassCategory>(() => {
    return (
      signalCompassData.find(
        (category) => category.id === selectedId
      ) ?? signalCompassData[0]
    );
  }, [selectedId]);

  //
  // Observed Category
  //

  const observed = useMemo<SignalCompassCategory | null>(() => {
    if (!observedId) return null;

    return (
      signalCompassData.find(
        (category) => category.id === observedId
      ) ?? null
    );
  }, [observedId]);

  //
  // Interaction State
  //

  const interactionState = getSignalCompassState({
    observed: observedId !== null,
    focused: selectedId !== null,
  });

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
            PolySignal continuously analyzes prediction markets
            to surface where institutional-sized conviction is
            forming before it becomes obvious.
          </p>
        </div>

        <div className="rounded-full bg-emerald-50 px-5 py-3">
          <span className="text-sm font-semibold text-emerald-700">
            ● Live Intelligence
          </span>
        </div>
      </div>

      {/* Dashboard */}

      <div className="grid items-start gap-12 lg:grid-cols-[70%_30%]">
        {/* Compass */}

        <div className="relative flex min-h-[780px] items-center justify-center overflow-hidden rounded-[36px]">
          {/* Network */}

          <IntelligenceNetwork
            selectedId={selected.id}
            observedId={observedId}
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          {/* Beacon */}

          <IntelligenceCore
            interactionState={interactionState}
            observedId={observedId}
          />

          {/* Nodes */}

          {signalCompassData.map((category) => (
            <div
              key={category.id}
              className="absolute"
              style={signalCompassPositions[category.id]}
            >
              <CompassNode
                name={category.name}
                grade={category.grade}
                signals={category.signals}
                active={selected.id === category.id}
                observed={observedId === category.id}
                onMouseEnter={() =>
                  setObservedId(category.id)
                }
                onMouseLeave={() =>
                  setObservedId(null)
                }
                onClick={() =>
                  setSelectedId(category.id)
                }
              />
            </div>
          ))}
        </div>

        {/* Right Panel */}

        <div className="flex flex-col">
          <PreviewBanner
            observedName={observed?.name}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{
                opacity: 0,
                x: 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -10,
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
      </div>
    </Card>
  );
}