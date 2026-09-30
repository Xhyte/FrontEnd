type PaginationProps = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: PaginationProps) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center gap-1" aria-label="Pagination">
      <button
        type="button"
        className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-40"
        disabled={current <= 1}
      >
        Sebelumnya
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`min-w-9 rounded-lg px-3 py-2 text-sm font-medium ${
            page === current
              ? "bg-[#0066ff] text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 disabled:opacity-40"
        disabled={current >= total}
      >
        Berikutnya
      </button>
    </nav>
  );
}
