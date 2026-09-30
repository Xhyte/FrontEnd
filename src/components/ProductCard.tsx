import Image from "next/image";
import Link from "next/link";
import { formatIdr, type Product } from "@/lib/data";
import { StarRating } from "./StarRating";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-medium text-[#0066ff]">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{product.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <StarRating value={product.rating} size="sm" />
            <span className="text-xs text-slate-500">({product.reviewCount})</span>
          </div>
        </div>
        <p className="text-lg font-bold text-[#0066ff]">{formatIdr(product.price)}</p>
        <Link
          href={`/produk/${product.slug}`}
          className="mt-auto inline-flex items-center justify-center rounded-lg bg-[#0066ff] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#0052cc]"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
