"use client";

import {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import {
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

import { signalCompassOrbit, signalCompassPositions } from "./signalCompassPositions";

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
          {/* Static orbital guides share the nodes' center and outer radius. */}
          <svg
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            fill="none"
          >
            <ellipse
              cx="50%"
              cy="50%"
              rx="23%"
              ry="23%"
              stroke="rgba(100, 116, 139, 0.08)"
              strokeWidth="1"
            />
            <ellipse
              cx="50%"
              cy="50%"
              style={{
                rx: `calc(50% - ${signalCompassOrbit.horizontalInsetRem}rem)`,
                ry: `calc(50% - ${signalCompassOrbit.verticalInsetRem}rem)`,
              }}
              stroke="rgba(100, 116, 139, 0.10)"
              strokeWidth="1"
              strokeDasharray="180 48"
              strokeDashoffset="24"
              strokeLinecap="round"
            />
          </svg>

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
            {/* All categories share one grid cell, reserving the tallest card's
                natural height at this width, including during transitions. */}
            <div className="grid w-full">
              {signalCompassData.map((category) => {
                const active = category.id === selectedId;

                return (
                  <motion.div
                    key={category.id}
                    className="col-start-1 row-start-1 min-w-0"
                    style={{ visibility: active ? "visible" : "hidden" }}
                    aria-hidden={!active}
                    inert={!active}
                    initial={false}
                    animate={{ opacity: active ? 1 : 0, y: active ? 0 : 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <SelectedCategory
                      name={category.name}
                      status={category.status}
                      summary={category.summary}
                      grade={category.grade}
                      strength={category.strength}
                      signals={category.signals}
                      capital={category.capital}
                      topOpportunity={category.topOpportunity}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </Card>
  );
}
