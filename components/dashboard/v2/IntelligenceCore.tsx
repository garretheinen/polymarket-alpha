"use client";

import clsx from "clsx";
import Logo from "@/components/ui/logo";

interface IntelligenceCoreProps {
  className?: string;
}

export default function IntelligenceCore({
  className,
}: IntelligenceCoreProps) {
  return (
    <div
      className={clsx(
        "relative flex h-[270px] w-[270px] items-center justify-center",
        className
      )}
    >
      {/* Ambient Atmosphere */}

      <div
        className="absolute h-[300px] w-[300px] rounded-full blur-[95px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,.08) 0%, rgba(37,99,235,.03) 55%, transparent 100%)",
        }}
      />

      {/* Outer Halo */}

      <div
        className="absolute h-[220px] w-[220px] rounded-full blur-[55px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.08) 0%, rgba(59,130,246,.02) 75%, transparent 100%)",
        }}
      />

      {/* Inner Halo */}

      <div
        className="absolute h-[180px] w-[180px] rounded-full blur-[24px]"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,.18) 0%, rgba(96,165,250,.04) 70%, transparent 100%)",
        }}
      />

      {/* Beacon Frame */}

      <div
        className="
          relative
          z-20
          flex
          h-[108px]
          w-[108px]
          items-center
          justify-center

          rounded-[26px]

          border-[2px]

          border-slate-100

          bg-white/[0.05]

          backdrop-blur-sm
        "
        style={{
          boxShadow: `
            0 10px 24px rgba(15,23,42,.045),
            0 0 28px rgba(37,99,235,.08),
            inset 0 1px 0 rgba(255,255,255,.72),
            inset 0 -2px 4px rgba(15,23,42,.04)
          `,
        }}
      >
        {/* Blue Intelligence Core */}

        <div
          className="
            relative
            flex
            h-[100px]
            w-[100px]
            items-center
            justify-center

            rounded-[20px]
          "
          style={{
            background:
              "linear-gradient(180deg,#3B82F6 0%, #2563EB 55%, #1D4ED8 100%)",

            boxShadow: `
              0 12px 30px rgba(37,99,235,.20),
              inset 0 2px 2px rgba(255,255,255,.12),
              inset 0 -3px 6px rgba(0,0,0,.08)
            `,
          }}
        >
          {/* Soft internal glow */}

          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, rgba(255,255,255,.10), transparent 70%)",
            }}
          />

          {/* PolySignal Logo */}

          <Logo
            iconOnly
            size="md"
            className="relative z-10 scale-[1.5] text-white"
          />
        </div>
      </div>
    </div>
  );
}