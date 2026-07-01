import clsx from "clsx";

type BadgeVariant =
  | "success"
  | "primary"
  | "warning"
  | "danger"
  | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants = {
  success:
    "border border-emerald-200 bg-emerald-50 text-emerald-700",

  primary:
    "border border-blue-200 bg-blue-50 text-blue-700",

  warning:
    "border border-amber-200 bg-amber-50 text-amber-700",

  danger:
    "border border-red-200 bg-red-50 text-red-700",

  neutral:
    "border border-slate-200 bg-slate-50 text-slate-700",
};

export default function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}