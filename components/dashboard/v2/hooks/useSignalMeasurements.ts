"use client";

import { RefObject, useCallback, useEffect, useState } from "react";

import type { SignalCompassNodeId } from "@/components/dashboard/v2/signalCompassLayout";

type Point = {
  x: number;
  y: number;
};

type EngineGeometry = {
  center: Point;
  radius: number;
};

type NodeGeometry = Record<SignalCompassNodeId, Point>;

interface UseSignalMeasurementsProps {
  containerRef: RefObject<HTMLDivElement | null>;
  engineRef: RefObject<HTMLDivElement | null>;
  nodeRefs: Record<
    SignalCompassNodeId,
    RefObject<HTMLButtonElement | null>
  >;
}

interface SignalMeasurements {
  engine: EngineGeometry | null;
  nodes: NodeGeometry | null;
}

export default function useSignalMeasurements({
  containerRef,
  engineRef,
  nodeRefs,
}: UseSignalMeasurementsProps): SignalMeasurements {
  const [measurements, setMeasurements] = useState<SignalMeasurements>({
    engine: null,
    nodes: null,
  });

  const measure = useCallback(() => {
    if (!containerRef.current || !engineRef.current) {
      return;
    }

    const containerRect =
      containerRef.current.getBoundingClientRect();

    const engineRect =
      engineRef.current.getBoundingClientRect();

    const engine: EngineGeometry = {
      center: {
        x:
          engineRect.left -
          containerRect.left +
          engineRect.width / 2,
        y:
          engineRect.top -
          containerRect.top +
          engineRect.height / 2,
      },
      radius:
        Math.min(engineRect.width, engineRect.height) / 2,
    };

    const nodes = {} as NodeGeometry;

    for (const key of Object.keys(
      nodeRefs
    ) as SignalCompassNodeId[]) {
      const ref = nodeRefs[key];

      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();

      nodes[key] = {
        x:
          rect.left -
          containerRect.left +
          rect.width / 2,
        y:
          rect.top -
          containerRect.top +
          rect.height / 2,
      };
    }

    setMeasurements({
      engine,
      nodes,
    });
  }, [containerRef, engineRef, nodeRefs]);

  useEffect(() => {
    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return measurements;
}