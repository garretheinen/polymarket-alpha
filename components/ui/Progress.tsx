import clsx from "clsx";

type ProgressVariant =
  | "blue"
  | "green"
  | "amber"
  | "red";

interface ProgressProps {
  value: number;
  variant?: ProgressVariant;
  className?: string;
}

const colors = {
  blue: "bg-blue-600",
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
};

export default function Progress({
  value,
  variant = "blue",
  className,
}: ProgressProps) {
  return (
    <div
      className={clsx(
        "h-2 overflow-hidden rounded-full bg-slate-200",
        className
      )}
    >
      <div
        className={clsx(
          "h-full rounded-full transition-all duration-500",
          colors[variant]
        )}
        style={{
          width: `${Math.max(
            0,
            Math.min(value, 100)
          )}%`,
        }}
      />
    </div>
  );
}