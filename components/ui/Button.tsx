import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",

  ghost:
    "text-blue-600 hover:bg-blue-50",
};

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className
      )}
    >
      {children}

      <ArrowRight size={16} />
    </button>
  );
}