import { LoginForm } from "./login-form";

export default function LoginPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "OMS Dashboard";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(125deg,#fdf2f8_0%,#eff6ff_45%,#ecfccb_100%)] p-6">
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-orange-300/35 blur-3xl" />
      <div className="absolute -right-14 bottom-8 h-80 w-80 rounded-full bg-cyan-300/35 blur-3xl" />

      <main className="relative w-full max-w-md rounded-3xl border border-zinc-900/10 bg-white/90 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          {appName}
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900">
          Masuk
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          Use demo credentials from your environment variables.
        </p>

        <LoginForm />

        <p className="mt-6 text-xs text-zinc-500">
          Tip: set <span className="font-semibold">AUTH_DEMO_EMAIL</span> and{" "}
          <span className="font-semibold">AUTH_DEMO_PASSWORD</span> in Vercel Project
          Settings - Environment Variables.
        </p>
      </main>
    </div>
  );
}
