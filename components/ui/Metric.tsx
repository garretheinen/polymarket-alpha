interface Props {
  label: string;
  value: string | number;
}

export default function Metric({
  label,
  value,
}: Props) {
  return (
    <div className="rounded-2xl bg-zinc-800 p-5">

      <div className="text-sm text-zinc-400">
        {label}
      </div>

      <div className="mt-2 text-3xl font-bold text-white">
        {value}
      </div>

    </div>
  );
}