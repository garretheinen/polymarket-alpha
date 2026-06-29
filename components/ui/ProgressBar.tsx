interface Props {
  label: string;
  value: number;
}

export default function ProgressBar({
  label,
  value,
}: Props) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="text-zinc-300">
          {label}
        </span>

        <span className="text-white font-semibold">
          {value}
        </span>

      </div>

      <div className="h-2 rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}