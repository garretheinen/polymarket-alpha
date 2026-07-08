import clsx from "clsx";

interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};

export default function Avatar({
  src,
  initials = "?",
  size = "md",
}: AvatarProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-full bg-slate-200",
        sizes[size]
      )}
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-semibold text-slate-600">
          {initials}
        </div>
      )}
    </div>
  );
}