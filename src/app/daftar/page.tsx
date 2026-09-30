import {
  AuthCard,
  AuthField,
  AuthLink,
  GoogleButton,
} from "@/components/AuthCard";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Buat Akun Baru"
      subtitle="Bergabung dengan komunitas WartaTekno"
      footer={
        <>
          Sudah punya akun? <AuthLink href="/masuk">Masuk</AuthLink>
        </>
      }
    >
      <form className="space-y-4">
        <AuthField label="Nama Lengkap" placeholder="Budi Santoso" />
        <AuthField label="Email" type="email" placeholder="nama@email.com" />
        <AuthField label="Kata Sandi" type="password" placeholder="Min. 8 karakter" />
        <AuthField label="Konfirmasi Kata Sandi" type="password" placeholder="Ulangi kata sandi" />
        <Link
          href="/beranda"
          className="flex w-full items-center justify-center rounded-lg bg-[#0066ff] py-2.5 text-sm font-medium text-white hover:bg-[#0052cc]"
        >
          Daftar
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
