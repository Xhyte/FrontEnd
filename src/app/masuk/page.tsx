import Link from "next/link";
import {
  AuthCard,
  AuthField,
  AuthLink,
  GoogleButton,
} from "@/components/AuthCard";

export default function LoginPage() {
  return (
    <AuthCard
      title="Masuk ke WartaTekno"
      subtitle="Akses ulasan favorit dan kirim komentar"
      footer={
        <>
          Belum punya akun? <AuthLink href="/daftar">Daftar sekarang</AuthLink>
        </>
      }
    >
      <form className="space-y-4">
        <AuthField label="Email" type="email" placeholder="nama@email.com" />
        <AuthField label="Kata Sandi" type="password" placeholder="••••••••" />
        <div className="text-right">
          <Link href="#" className="text-xs text-[#0066ff] hover:underline">
            Lupa password?
          </Link>
        </div>
        <Link
          href="/beranda"
          className="flex w-full items-center justify-center rounded-lg bg-[#0066ff] py-2.5 text-sm font-medium text-white hover:bg-[#0052cc]"
        >
          Masuk
        </Link>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase text-slate-400">
          <span className="bg-white px-2">atau</span>
        </div>
      </div>
      <GoogleButton />
    </AuthCard>
  );
}
