interface Props {
  grade: string;
}

const colors: Record<string, string> = {
  "A+": "bg-emerald-500",
  A: "bg-blue-500",
  "A-": "bg-sky-500",
  "B+": "bg-amber-500",
  B: "bg-yellow-500",
  C: "bg-orange-500",
  Watch: "bg-red-500",
};

export default function GradeBadge({
  grade,
}: Props) {
  return (
    <div
      className={`
        ${colors[grade] ?? "bg-zinc-600"}
        w-16
        h-16
        rounded-2xl
        flex
        items-center
        justify-center
        text-white
        font-bold
        text-xl
      `}
    >
      {grade}
    </div>
  );
}