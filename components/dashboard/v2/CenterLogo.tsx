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
          "relative -translate-y-12 flex h-48 w-48 items-center justify-center",
          className
        )}
      >
        {/* Organic Glow */}

        <div
        className={clsx(
  "absolute h-64 w-80 rounded-full bg-blue-500/8 blur-[80px] transition-all duration-700 ease-in-out",
  active && "scale-110 bg-blue-500/12"
)}  
        
        />

        {/* Future Pulse Ring */}

        {/* Intentionally empty.
            Ring only appears when
            a category is selected. */}

        {/* PolySignal Intelligence Engine */}

        <Logo
  size="xl"
  iconOnly
  className="relative z-10 scale-110 transition-transform duration-500"
/>
      </div>
    );
  }
);

CenterLogo.displayName = "CenterLogo";

export default CenterLogo;