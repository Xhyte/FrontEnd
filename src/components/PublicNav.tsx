import Link from "next/link";
import { Search } from "lucide-react";
import { Logo } from "./Logo";

type PublicNavProps = {
  authenticated?: boolean;
  userName?: string;
};

export function PublicNav({ authenticated = false, userName = "Budi" }: PublicNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-4 lg:px-6">
        <Logo />
        <div className="order-3 flex w-full min-w-0 flex-1 lg:order-2 lg:max-w-md lg:px-4">
          <label className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Cari produk atau ulasan..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none ring-[#0066ff] focus:border-[#0066ff] focus:ring-2"
            />
          </label>
        </div>
        <nav className="order-2 flex flex-1 items-center justify-end gap-6 text-sm font-medium text-slate-600 lg:order-3 lg:flex-none">
          <Link href="/" className="hover:text-[#0066ff]">
            Beranda
          </Link>
          <Link href="/#kategori" className="hover:text-[#0066ff]">
            Kategori
          </Link>
          <Link href="/#populer" className="hover:text-[#0066ff]">
            Populer
          </Link>
        </nav>
        <div className="order-4 flex items-center gap-2 lg:order-5">
          {authenticated ? (
            <Link
              href="/beranda"
              className="flex items-center gap-2 rounded-full border border-slate-200 py-1 pl-1 pr-3 hover:bg-slate-50"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0066ff] text-xs font-bold text-white">
                {userName.charAt(0)}
              </span>
              <span className="text-sm font-medium text-slate-800">{userName}</span>
            </Link>
          ) : (
            <>
              <Link
                href="/masuk"
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Masuk
              </Link>
              <Link
                href="/daftar"
                className="rounded-lg bg-[#0066ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#0052cc]"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
