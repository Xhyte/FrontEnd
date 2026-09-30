import { feedbackList } from "@/lib/data";

export default function AdminFeedbackPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900">Feedback Pengguna</h1>
      <p className="mt-1 text-slate-600">Pesan dan saran dari komunitas.</p>

      <div className="mt-6 space-y-4">
        {feedbackList.map((fb) => (
          <article
            key={fb.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium text-slate-900">{fb.user}</p>
              <span className="text-xs text-slate-500">{fb.date}</span>
            </div>
            <p className="mt-2 text-sm font-medium text-[#0066ff]">{fb.subject}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{fb.message}</p>
            <button
              type="button"
              className="mt-3 text-sm font-medium text-slate-700 hover:text-[#0066ff]"
            >
              Balas feedback →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
