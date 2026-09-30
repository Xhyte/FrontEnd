"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  Mail,
  LogOut,
} from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/produk", label: "Kelola Produk", icon: Package },
  { href: "/admin/komentar", label: "Moderasi Komentar", icon: MessageSquare },
  { href: "/admin/feedback", label: "Feedback Pengguna", icon: Mail },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col bg-[#0f2744] text-slate-200">
      <div className="border-b border-white/10 p-5">
        <Logo className="text-white [&_span:last-child]:text-white" />
        <p className="mt-1 text-xs text-slate-400">Panel Admin</p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active ? "bg-[#0066ff] text-white" : "hover:bg-white/10"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/"
        className="m-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-white/10 hover:text-white"
      >
        <LogOut className="h-4 w-4" />
        Kembali ke situs
      </Link>
    </aside>
  );
}
