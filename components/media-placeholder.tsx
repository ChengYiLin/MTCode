import { cn } from "@/lib/utils";

/** Gradient "image" placeholder used wherever the design shows cover art. */
export function MediaPlaceholder({
  className,
  iconSize = 42,
  children,
}: {
  className?: string;
  iconSize?: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-[linear-gradient(135deg,#d3d8de,#e6e9ed)]",
        className,
      )}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,.9)"
        strokeWidth="1.4"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.6" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      {children}
    </div>
  );
}
