import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 lg:px-6 md:flex-row md:items-center md:justify-between">
        <Logo />
        <p>© {new Date().getFullYear()} WartaTekno. Portal ulasan gadget & teknologi.</p>
      </div>
    </footer>
  );
}
