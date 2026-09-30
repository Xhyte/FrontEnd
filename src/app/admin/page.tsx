import { Package, MessageSquare, Users, TrendingUp } from "lucide-react";
import { products, adminComments } from "@/lib/data";

const stats = [
  { label: "Total Produk", value: products.length, icon: Package, color: "bg-blue-500" },
  {
    label: "Komentar Pending",
    value: adminComments.filter((c) => c.status === "pending").length,
    icon: MessageSquare,
    color: "bg-amber-500",
  },
  { label: "Pengguna Aktif", value: "1.2k", icon: Users, color: "bg-emerald-500" },
  { label: "Kunjungan Bulan Ini", value: "48k", icon: TrendingUp, color: "bg-violet-500" },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      <p className="mt-1 text-slate-600">Ringkasan aktivitas portal WartaTekno.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className={`rounded-lg p-3 text-white ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-slate-500">{label}</p>
              <p className="text-2xl font-bold text-slate-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-slate-900">Aktivitas Terbaru</h2>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>3 komentar menunggu moderasi</li>
          <li>Produk baru: Google Pixel 8 Pro ditambahkan</li>
          <li>2 laporan feedback dari pengguna</li>
        </ul>
      </div>
    </div>
  );
}
