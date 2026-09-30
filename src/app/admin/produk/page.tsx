"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { formatIdr, products, categories } from "@/lib/data";

export default function AdminProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Kelola Produk</h1>
          <p className="mt-1 text-slate-600">Tambah, ubah, atau hapus data produk.</p>
        </div>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0066ff] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0052cc]"
        >
          <Plus className="h-4 w-4" />
          Tambah Produk Baru
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 font-medium">Harga</th>
              <th className="px-4 py-3 font-medium">Stok</th>
              <th className="px-4 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((p) => (
              <tr key={p.id} className="text-slate-800">
                <td className="px-4 py-3 text-slate-500">{p.id}</td>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">{formatIdr(p.price)}</td>
                <td className="px-4 py-3">Tersedia</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                      aria-label="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                      aria-label="Hapus"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Tambah Produk Baru</h2>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="mt-4 space-y-4">
              <label className="block text-sm">
                <span className="font-medium text-slate-700">Nama Produk</span>
                <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-slate-700">Kategori</span>
                <select className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2">
                  {categories.filter((c) => c !== "Semua").map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium text-slate-700">Harga (IDR)</span>
                <input type="number" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-slate-700">Deskripsi</span>
                <textarea rows={3} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
              </label>
              <div className="rounded-lg border-2 border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-500">
                Unggah gambar produk (drag &amp; drop)
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#0066ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#0052cc]"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
