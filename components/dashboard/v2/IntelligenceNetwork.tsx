"use client";

import {
  useLayoutEffect,
  useState,
  type RefObject,
} from "react";

interface IntelligenceNetworkProps {
  className?: string;

  containerRef: RefObject<HTMLDivElement | null>;
  coreRef: RefObject<HTMLDivElement | null>;

  getTargetElement: () => HTMLDivElement | null;

  targetId: string;

  observed: boolean;
}

interface Point {
  x: number;
  y: number;
}

interface Geometry {
  start: Point;
  length: number;
  angle: number;
}

const NODE_EDGE_GAP = 6;
const CORE_OVERLAP = 6;

function getCenter(
  rect: DOMRect,
  containerRect: DOMRect
): Point {
  return {
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

function getRectangleEdgePoint(
  rect: DOMRect,
  containerRect: DOMRect,
  toward: Point
): Point {
  const center = getCenter(
    rect,
    containerRect
  );

  const dx = toward.x - center.x;
  const dy = toward.y - center.y;

  if (dx === 0 && dy === 0) {
    return center;
  }

  const halfWidth = rect.width / 2;
  const halfHeight = rect.height / 2;

  const scaleX =
    dx === 0
      ? Number.POSITIVE_INFINITY
      : halfWidth / Math.abs(dx);

  const scaleY =
    dy === 0
      ? Number.POSITIVE_INFINITY
      : halfHeight / Math.abs(dy);

  const scale = Math.min(
    scaleX,
    scaleY
  );

  return {
    x: center.x + dx * scale,
    y: center.y + dy * scale,
  };
}

function getCircleEdgePoint(
  rect: DOMRect,
  containerRect: DOMRect,
  from: Point
): Point {
  const center = getCenter(
    rect,
    containerRect
  );

  const dx = center.x - from.x;
  const dy = center.y - from.y;

  const length =
    Math.sqrt(
      dx * dx + dy * dy
    ) || 1;

  const nx = dx / length;
  const ny = dy / length;

  const radius =
    Math.min(
      rect.width,
      rect.height
    ) / 2;

  return {
    x:
      center.x -
      nx * (radius + NODE_EDGE_GAP),

    y:
      center.y -
      ny * (radius + NODE_EDGE_GAP),
  };
}

export default function IntelligenceNetwork({
  className,
  containerRef,
  coreRef,
  getTargetElement,
  targetId,
  observed,
}: IntelligenceNetworkProps) {
  const [geometry, setGeometry] =
    useState<Geometry | null>(null);

  useLayoutEffect(() => {
    let frameId = 0;

    let resizeObserver:
      | ResizeObserver
      | null = null;

    let cancelled = false;

    const measure = () => {
      if (cancelled) {
        return;
      }

      const container =
        containerRef.current;

      const core =
        coreRef.current;

      const target =
        getTargetElement();

      if (
        !container ||
        !core ||
        !target
      ) {
        frameId =
          requestAnimationFrame(
            measure
          );

        return;
      }

      const containerRect =
        container.getBoundingClientRect();

      const coreRect =
        core.getBoundingClientRect();

      const targetRect =
        target.getBoundingClientRect();

      const coreCenter =
        getCenter(
          coreRect,
          containerRect
        );

      const targetCenter =
        getCenter(
          targetRect,
          containerRect
        );

      const edgeStart =
        getRectangleEdgePoint(
          coreRect,
          containerRect,
          targetCenter
        );

      const startVectorX =
        edgeStart.x -
        coreCenter.x;

      const startVectorY =
        edgeStart.y -
        coreCenter.y;

      const startVectorLength =
        Math.sqrt(
          startVectorX *
            startVectorX +
            startVectorY *
              startVectorY
        ) || 1;

      const start = {
        x:
          edgeStart.x -
          (startVectorX /
            startVectorLength) *
            CORE_OVERLAP,

        y:
          edgeStart.y -
          (startVectorY /
            startVectorLength) *
            CORE_OVERLAP,
      };

      const end =
        getCircleEdgePoint(
          targetRect,
          containerRect,
          coreCenter
        );

      const dx =
        end.x - start.x;

      const dy =
        end.y - start.y;

      const length =
        Math.sqrt(
          dx * dx + dy * dy
        );

      const angle =
        Math.atan2(
          dy,
          dx
        ) *
        (180 / Math.PI);

      setGeometry({
        start,
        length,
        angle,
      });

      if (!resizeObserver) {
        resizeObserver =
          new ResizeObserver(() => {
            frameId =
              requestAnimationFrame(
                measure
              );
          });

        resizeObserver.observe(
          container
        );

        resizeObserver.observe(
          core
        );

        resizeObserver.observe(
          target
        );
      }
    };

    frameId =
      requestAnimationFrame(
        measure
      );

    const handleResize = () => {
      cancelAnimationFrame(
        frameId
      );

      frameId =
        requestAnimationFrame(
          measure
        );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      cancelled = true;

      cancelAnimationFrame(
        frameId
      );

      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [
    containerRef,
    coreRef,
    getTargetElement,
    targetId,
  ]);

  return (
    <div
      className={className}
      aria-hidden="true"
    >
      {geometry && (
        <>
          {/* Atmospheric trail */}

          <div
            className="absolute h-[7px] rounded-full bg-blue-300/20 blur-[4px]"
            style={{
              left:
                geometry.start.x,

              top:
                geometry.start.y,

              width:
                geometry.length,

              transformOrigin:
                "0 50%",

              transform: `
                translateY(-50%)
                rotate(${geometry.angle}deg)
              `,
            }}
          />

          {/* Intelligence ray */}

          <div
            className="absolute h-[3px] rounded-full"
            style={{
              left:
                geometry.start.x,

              top:
                geometry.start.y,

              width:
                geometry.length,

              transformOrigin:
                "0 50%",

              transform: `
                translateY(-50%)
                rotate(${geometry.angle}deg)
              `,

              background:
                observed
                  ? "linear-gradient(90deg, rgba(37,99,235,.92) 0%, rgba(59,130,246,.72) 42%, rgba(147,197,253,.38) 100%)"
                  : "linear-gradient(90deg, rgba(37,99,235,.78) 0%, rgba(59,130,246,.56) 42%, rgba(147,197,253,.28) 100%)",

              boxShadow:
                observed
                  ? "0 0 12px rgba(59,130,246,.24)"
                  : "0 0 8px rgba(59,130,246,.16)",

              transition:
                "opacity 180ms ease",
            }}
          />
        </>
      )}
    </div>
  );
}