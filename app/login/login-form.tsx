"use client";

import { FormEvent, useState } from "react";

type LoginResponse = {
  ok: boolean;
  message: string;
};

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<LoginResponse | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = (await response.json()) as LoginResponse;
      setFeedback(payload);
    } catch {
      setFeedback({
        ok: false,
        message: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-zinc-700">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-900"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-zinc-700">
          Password
        </span>
        <input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-zinc-900"
          placeholder="Your password"
          autoComplete="current-password"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white transition enabled:hover:-translate-y-0.5 enabled:hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-500"
      >
        {loading ? "Checking..." : "Sign in"}
      </button>

      {feedback ? (
        <p
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            feedback.ok
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  );
}
