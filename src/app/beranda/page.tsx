import { PublicNav } from "@/components/PublicNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { Pagination } from "@/components/Pagination";
import { products } from "@/lib/data";

export default function AuthenticatedHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <PublicNav authenticated userName="Budi" />
      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-[#0066ff]/10 to-white px-4 py-14 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium text-[#0066ff]">Selamat datang kembali</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">Halo, Budi</h1>
            <p className="mt-2 max-w-xl text-slate-600">
              Lanjutkan eksplorasi ulasan terbaru atau cari produk favoritmu.
            </p>
            <input
              type="search"
              placeholder="Cari produk..."
              className="mt-6 max-w-md w-full rounded-lg border border-slate-200 px-4 py-3 text-sm shadow-sm outline-none ring-[#0066ff] focus:ring-2"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">Rekomendasi untukmu</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10">
            <Pagination current={1} total={2} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
