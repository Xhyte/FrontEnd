import { PublicNav } from "@/components/PublicNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { Pagination } from "@/components/Pagination";
import { categories, products } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <PublicNav />
      <main>
        <section className="border-b border-slate-200 bg-white px-4 py-16 lg:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Temukan Ulasan Gadget &amp; Teknologi Terbaru
            </h1>
            <p className="mt-3 text-slate-600">
              Bandingkan spesifikasi, baca ulasan pengguna, dan temukan produk tech terbaik untuk
              kebutuhanmu.
            </p>
            <div className="mx-auto mt-8 max-w-xl">
              <input
                type="search"
                placeholder="Cari laptop, smartphone, headphone..."
                className="w-full rounded-xl border border-slate-200 px-5 py-4 text-base shadow-sm outline-none ring-[#0066ff] focus:border-[#0066ff] focus:ring-2"
              />
            </div>
          </div>
        </section>

        <section id="kategori" className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  i === 0
                    ? "bg-[#0066ff] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#0066ff]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section id="populer" className="mx-auto max-w-6xl px-4 pb-12 lg:px-6">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">Produk Populer</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10">
            <Pagination current={1} total={3} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
