import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden bg-[#FFF] text-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,122,61,0.14),transparent_35%),radial-gradient(circle_at_85%_5%,rgba(0,0,0,0.08),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(255,122,61,0.12),transparent_33%)]" />

      <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7A3D] text-sm font-extrabold text-white">
              OMS
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide">Order Management</p>
              <p className="text-xs text-black/60">Simple. Cepat. Terkontrol.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-black/80 md:flex">
            <a href="#tentang" className="transition hover:text-[#FF7A3D]">
              Tentang OMS
            </a>
            <a href="#fitur" className="transition hover:text-[#FF7A3D]">
              Fitur
            </a>
            <a href="#alur" className="transition hover:text-[#FF7A3D]">
              Alur Kerja
            </a>
          </nav>

          <Link
            href="/login"
            className="inline-flex h-10 items-center rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-[#FF7A3D]"
          >
            Masuk
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <section id="tentang" className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#FF7A3D]/30 bg-[#FF7A3D]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#B94816]">
              Landing Page OMS
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              OMS adalah sistem untuk mengelola pesanan dari masuk sampai selesai dalam satu dashboard.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/75 sm:text-lg">
              Dengan OMS, tim operasional bisa memantau status order, mengatur prioritas,
              dan memastikan proses pengiriman berjalan tepat waktu tanpa pindah-pindah
              aplikasi.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex h-12 items-center rounded-full bg-[#FF7A3D] px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#E8662B]"
              >
                Masuk
              </Link>
              <a
                href="#fitur"
                className="inline-flex h-12 items-center rounded-full border border-black/20 bg-white px-7 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-black"
              >
                Lihat Fitur
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="absolute -right-4 -top-4 rounded-2xl bg-[#FF7A3D] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
              Real-time
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-black/55">
              Snapshot Order Hari Ini
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs text-black/55">Order Masuk</p>
                <p className="mt-1 text-3xl font-extrabold">248</p>
              </div>
              <div className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs text-black/55">Sedang Diproses</p>
                <p className="mt-1 text-3xl font-extrabold">61</p>
              </div>
              <div className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs text-black/55">Selesai Terkirim</p>
                <p className="mt-1 text-3xl font-extrabold text-[#FF7A3D]">187</p>
              </div>
            </div>
          </div>
        </section>

        <section id="fitur" className="mt-20">
          <h2 className="text-3xl font-black sm:text-4xl">Kenapa OMS dipakai tim operasional</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-sm font-bold text-[#FF7A3D]">01</p>
              <h3 className="mt-3 text-xl font-extrabold">Tracking Terpusat</h3>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Semua status order terkumpul dalam satu tempat, sehingga minim miss
                communication antar tim.
              </p>
            </article>
            <article className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-sm font-bold text-[#FF7A3D]">02</p>
              <h3 className="mt-3 text-xl font-extrabold">Prioritas Dinamis</h3>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Order penting bisa langsung diberi prioritas agar SLA lebih terjaga dan
                tim fokus pada tugas yang berdampak.
              </p>
            </article>
            <article className="rounded-3xl border border-black/10 bg-white p-6">
              <p className="text-sm font-bold text-[#FF7A3D]">03</p>
              <h3 className="mt-3 text-xl font-extrabold">Laporan Lebih Cepat</h3>
              <p className="mt-3 text-sm leading-6 text-black/70">
                Data order siap dijadikan insight harian untuk evaluasi performa
                operasional dan pengambilan keputusan.
              </p>
            </article>
          </div>
        </section>

        <section id="alur" className="mt-20 rounded-3xl border border-black/10 bg-black p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB089]">
            Alur OMS
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Dari order masuk sampai order selesai, semua langkah terlihat jelas.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs text-white/70">Langkah 1</p>
              <p className="mt-2 text-lg font-bold">Order Diterima</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs text-white/70">Langkah 2</p>
              <p className="mt-2 text-lg font-bold">Verifikasi & Proses</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs text-white/70">Langkah 3</p>
              <p className="mt-2 text-lg font-bold">Kirim & Konfirmasi</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
