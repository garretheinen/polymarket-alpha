"use client";

import clsx from "clsx";

interface IntelligenceFlowProps {
  className?: string;
  active?: boolean;
}

export default function IntelligenceFlow({
  className,
  active = true,
}: IntelligenceFlowProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2",
        className
      )}
    >
      {/* Base Network */}

      <div
        className="absolute h-px w-[420px]"
        style={{
          background:
            "linear-gradient(to right, rgba(37,99,235,.08), rgba(37,99,235,.04), rgba(37,99,235,.015), transparent)",
        }}
      />

      {/* Active Intelligence */}

      {active && (
        <div
          className="absolute h-px w-[240px]"
          style={{
            background:
              "linear-gradient(to right, rgba(37,99,235,.35), rgba(37,99,235,.18), rgba(37,99,235,.06), transparent)",

            filter: "blur(.2px)",
          }}
        />
      )}
    </div>
  );
}