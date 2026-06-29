import { cn } from "@/lib/utils";

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/80",
        "transition-all duration-200",
        "hover:border-zinc-700",
        className
      )}
      {...props}
    />
  );
}