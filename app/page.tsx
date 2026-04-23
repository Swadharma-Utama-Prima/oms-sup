import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#fde68a,transparent_45%),radial-gradient(circle_at_80%_0%,#bae6fd,transparent_38%),linear-gradient(140deg,#fff7ed_0%,#f8fafc_55%,#ecfeff_100%)] p-6">
      <main className="w-full max-w-3xl rounded-3xl border border-black/10 bg-white/90 p-8 shadow-[0_24px_100px_rgba(0,0,0,0.14)] backdrop-blur-sm sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-700/80">
          OMS Support Portal
        </p>
        <h1 className="max-w-xl text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl">
          Login screen sudah siap untuk dites dan deploy ke Vercel.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
          Halaman ini menggunakan environment variables untuk demo auth flow.
          Konfigurasi dapat diatur lewat .env.local untuk lokal dan dashboard Vercel
          untuk production.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700"
          >
            Buka Login
          </Link>
          <a
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900/20 bg-white px-7 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-900/40"
            href="https://vercel.com/docs/environment-variables"
            target="_blank"
            rel="noopener noreferrer"
          >
            Panduan Env Vercel
          </a>
        </div>
      </main>
    </div>
  );
}
