import clsx from "clsx";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  iconOnly?: boolean;
  className?: string;
}

const sizes = {
  sm: {
    box: "h-9 w-9",
    icon: 18,
    title: "text-lg",
    subtitle: "text-[10px]",
  },
  md: {
    box: "h-11 w-11",
    icon: 22,
    title: "text-xl",
    subtitle: "text-xs",
  },
  lg: {
    box: "h-14 w-14",
    icon: 28,
    title: "text-2xl",
    subtitle: "text-sm",
  },
};

export default function Logo({
  size = "md",
  iconOnly = false,
  className,
}: LogoProps) {
  const s = sizes[size];

  return (
    <div
      className={clsx("flex items-center gap-4", className)}
    >
      <div
        className={clsx(
          "flex items-center justify-center rounded-2xl bg-blue-600 shadow-sm",
          s.box
        )}
      >
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="6"
            cy="24"
            r="3"
            fill="white"
            opacity=".95"
          />

          <circle
            cx="42"
            cy="24"
            r="3"
            fill="white"
            opacity=".95"
          />

          <path
            d="M9 24H16L22 11L28 37L33 20H39"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="leading-tight">
          <h1
            className={clsx(
              "font-bold tracking-tight text-slate-900",
              s.title
            )}
          >
            PolySignal
          </h1>

          <p
            className={clsx(
              "text-slate-500",
              s.subtitle
            )}
          >
            Prediction Intelligence
          </p>
        </div>
      )}
    </div>
  );
}