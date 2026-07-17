"use client";

import clsx from "clsx";
import { forwardRef } from "react";

import Logo from "@/components/ui/logo";

interface CenterLogoProps {
  active?: boolean;
  className?: string;
}

const CenterLogo = forwardRef<HTMLDivElement, CenterLogoProps>(
  ({ active = false, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "relative -translate-y-10 flex h-56 w-56 items-center justify-center",
          className
        )}
      >
        {/* Ambient Intelligence Glow */}

        <div
          className={clsx(
            "absolute h-72 w-96 rounded-full bg-blue-500/8 blur-[88px] transition-all duration-700 ease-in-out",
            active && "scale-110 bg-blue-500/12"
          )}
        />

        {/* Intelligence Field */}

        <div className="absolute h-60 w-60 rounded-full bg-white/40 blur-3xl" />

        {/* Intelligence Engine Housing */}

        <div
          className={clsx(
            "relative z-10 flex h-36 w-36 items-center justify-center rounded-[34px]",
            "border border-slate-200/80",
            "bg-white",
            "shadow-[0_18px_40px_rgba(15,23,42,.10)]",
            "ring-1 ring-white/70"
          )}
          style={{
            boxShadow:
              "0 18px 40px rgba(15,23,42,.10), inset 0 1px 2px rgba(255,255,255,.75), inset 0 -3px 6px rgba(15,23,42,.04)",
          }}
        >
          <Logo
            size="xl"
            iconOnly
            className="relative z-20 scale-125 transition-transform duration-500"
          />
        </div>
      </div>
    );
  }
);

CenterLogo.displayName = "CenterLogo";

export default CenterLogo;