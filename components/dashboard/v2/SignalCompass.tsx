"use client";

import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Card from "@/components/ui/Card";

import IntelligenceCore from "./IntelligenceCore";
import IntelligenceNetwork from "./IntelligenceNetwork";
import CompassNode from "./CompassNode";
import PreviewBanner from "./PreviewBanner";
import SelectedCategory from "./SelectedCategory";

import {
  signalCompassData,
  type SignalCompassCategory,
} from "./signalCompassData";

import type { SignalCompassNodeId } from "./signalCompassLayout";

import { signalCompassPositions } from "./signalCompassPositions";

import { getSignalCompassState } from "./signalCompassState";

export default function SignalCompass() {
  const [selectedId, setSelectedId] =
    useState<SignalCompassNodeId>("sports");

  const [observedId, setObservedId] =
    useState<SignalCompassNodeId | null>(null);

  /*
   * Geometry refs
   */

  const compassRef =
    useRef<HTMLDivElement>(null);

  const coreRef =
    useRef<HTMLDivElement>(null);

  const nodeRefs =
    useRef<
      Partial<
        Record<
          SignalCompassNodeId,
          HTMLDivElement | null
        >
      >
    >({});

  /*
   * Ray follows committed selection only.
   * Hover remains a lightweight preview.
   */

  const activeTargetId =
    selectedId;

  const getTargetElement =
    useCallback(() => {
      return (
        nodeRefs.current[
          activeTargetId
        ] ?? null
      );
    }, [activeTargetId]);

  /*
   * Selected category
   */

  const selected =
    useMemo<SignalCompassCategory>(() => {
      return (
        signalCompassData.find(
          (category) =>
            category.id === selectedId
        ) ?? signalCompassData[0]
      );
    }, [selectedId]);

  /*
   * Hovered / observed category
   */

  const observed =
    useMemo<
      SignalCompassCategory | null
    >(() => {
      if (!observedId) {
        return null;
      }

      return (
        signalCompassData.find(
          (category) =>
            category.id === observedId
        ) ?? null
      );
    }, [observedId]);

  /*
   * Core interaction state
   */

  const interactionState =
    getSignalCompassState({
      observed:
        observedId !== null,

      focused:
        selectedId !== null,
    });

  return (
    <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
      {/* Header */}

      <div className="flex items-start justify-between gap-8">
        <div className="max-w-[560px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-600">
            Signal Compass
          </p>

          <h2 className="mt-3 text-[32px] font-bold leading-[1.1] tracking-tight text-slate-950 lg:text-[36px]">
            Find where smart money
            <br />
            is building conviction.
          </h2>

          <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-slate-600">
            PolySignal continuously analyzes prediction
            markets to surface where institutional-sized
            conviction is forming before it becomes obvious.
          </p>
        </div>

        <div className="shrink-0 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
          <span className="text-xs font-semibold text-emerald-700">
            ● Live Intelligence
          </span>
        </div>
      </div>

      {/* Intelligence Workspace */}

      <div className="mt-8 grid items-stretch gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">
        {/* Compass Field */}

        <div
          ref={compassRef}
          className="relative flex min-h-[680px] items-center justify-center overflow-hidden rounded-[28px]"
        >
          {/* Intelligence Network */}

          <IntelligenceNetwork
            containerRef={compassRef}
            coreRef={coreRef}
            getTargetElement={
              getTargetElement
            }
            targetId={
              activeTargetId
            }
            observed={false}
            className="pointer-events-none absolute inset-0 z-10"
          />

          {/* Intelligence Core */}

          <IntelligenceCore
            ref={coreRef}
            interactionState={
              interactionState
            }
            observedId={observedId}
            className="relative z-20"
          />

          {/* Category Nodes */}

          {signalCompassData.map(
            (category) => {
              const categoryId =
                category.id as SignalCompassNodeId;

              return (
                <div
                  key={category.id}
                  className="absolute z-30"
                  style={
                    signalCompassPositions[
                      categoryId
                    ]
                  }
                >
                  <CompassNode
                    name={category.name}
                    grade={category.grade}
                    signals={
                      category.signals
                    }
                    orbRef={(element) => {
                      nodeRefs.current[
                        categoryId
                      ] = element;
                    }}
                    interactionState={getSignalCompassState(
                      {
                        observed:
                          observedId ===
                          categoryId,

                        focused:
                          selectedId ===
                          categoryId,
                      }
                    )}
                    onMouseEnter={() =>
                      setObservedId(
                        categoryId
                      )
                    }
                    onMouseLeave={() =>
                      setObservedId(null)
                    }
                    onClick={() =>
                      setSelectedId(
                        categoryId
                      )
                    }
                  />
                </div>
              );
            }
          )}
        </div>

        {/* Intelligence Panel */}
<aside className="relative min-h-[680px] pt-[112px]">

          {/* Hover Preview
              Absolute positioning prevents hover
              from changing the workspace height. */}

          <div className="absolute inset-x-0 top-0 z-20">
            <PreviewBanner
              observedName={
                observed?.name
              }
            />
          </div>

          {/* Selected Intelligence */}

          <div className="flex min-h-[568px] items-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                >
                  <SelectedCategory
                    name={selected.name}
                    status={selected.status}
                    summary={
                      selected.summary
                    }
                    grade={selected.grade}
                    strength={
                      selected.strength
                    }
                    signals={
                      selected.signals
                    }
                    capital={
                      selected.capital
                    }
                    topOpportunity={
                      selected.topOpportunity
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </aside>
      </div>
    </Card>
  );
}
