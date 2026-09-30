import { adminComments } from "@/lib/data";

export default function AdminCommentsPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900">Moderasi Komentar</h1>
      <p className="mt-1 text-slate-600">Setujui atau tolak ulasan pengguna.</p>

      <div className="mt-6 space-y-3">
        {adminComments.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-medium text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">
                  {item.productName} · {item.date}
                </p>
                <p className="mt-2 text-sm text-slate-700">{item.excerpt}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
            {item.status !== "pending" && (
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                {item.status}
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
