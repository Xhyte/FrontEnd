import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicNav } from "@/components/PublicNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StarRating } from "@/components/StarRating";
import {
  formatIdr,
  getProductBySlug,
  getReviewsForProduct,
  ratingDistribution,
  products,
} from "@/lib/data";
import { ExternalLink, GitCompare } from "lucide-react";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productReviews = getReviewsForProduct(product.id);
  const dist = ratingDistribution(product.id);
  const maxCount = Math.max(...Object.values(dist), 1);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <PublicNav authenticated userName="Budi" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 lg:px-6">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#0066ff]">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-3 flex gap-2">
              {product.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 ${
                    i === 0 ? "border-[#0066ff]" : "border-transparent"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-[#0066ff]">{product.category}</span>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating value={product.rating} showValue />
              <span className="text-sm text-slate-500">{product.reviewCount} ulasan</span>
            </div>
            <p className="mt-4 text-2xl font-bold text-[#0066ff]">{formatIdr(product.price)}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                <GitCompare className="h-4 w-4" />
                Bandingkan
              </button>
              <a
                href={product.storeUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0066ff] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0052cc]"
              >
                Kunjungi Toko
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <section className="mt-12 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Spesifikasi Produk</h2>
          <dl className="mt-4 divide-y divide-slate-100">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-slate-500">{spec.label}</dt>
                <dd className="font-medium text-slate-900">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">Ulasan &amp; Komentar Pengguna</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-3xl font-bold text-slate-900">{product.rating.toFixed(1)}</p>
              <StarRating value={product.rating} />
              <p className="mt-1 text-sm text-slate-500">{product.reviewCount} ulasan</p>
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-3">{star}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${((dist[star] ?? 0) / maxCount) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <label className="text-sm font-medium text-slate-700">Tulis Komentar</label>
                <textarea
                  rows={3}
                  placeholder="Bagikan pengalamanmu dengan produk ini..."
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-[#0066ff] focus:ring-2"
                />
                <button
                  type="button"
                  className="mt-3 rounded-lg bg-[#0066ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#0052cc]"
                >
                  Kirim Ulasan
                </button>
              </div>

              {productReviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full bg-slate-100"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-medium text-slate-900">{review.author}</p>
                        <span className="text-xs text-slate-500">{review.date}</span>
                      </div>
                      <StarRating value={review.rating} size="sm" />
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
