import { Star } from "lucide-react";

type StarRatingProps = {
  value: number;
  size?: "sm" | "md";
  showValue?: boolean;
};

export function StarRating({ value, size = "md", showValue = false }: StarRatingProps) {
  const iconClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value - i >= 1;
        const partial = !filled && value - i > 0;
        return (
          <Star
            key={i}
            className={`${iconClass} ${
              filled || partial ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
            }`}
          />
        );
      })}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-slate-700">{value.toFixed(1)}</span>
      )}
    </div>
  );
}
