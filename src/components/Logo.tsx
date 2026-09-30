import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-semibold text-[#0f172a] ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0066ff] text-sm font-bold text-white">
        W
      </span>
      <span className="text-lg tracking-tight">WartaTekno</span>
    </Link>
  );
}
