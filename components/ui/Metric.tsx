import clsx from "clsx";

interface MetricProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

export default function Metric({
  label,
  value,
  icon,
  className,
}: MetricProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 p-6",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
        {icon}
      </div>

      <div>
        <div className="text-3xl font-bold tracking-tight text-slate-900">
          {value}
        </div>

        <div className="mt-1 text-sm text-slate-500">
          {label}
        </div>
      </div>
    </div>
  );
}