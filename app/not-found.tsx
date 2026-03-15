import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="section-shell max-w-md rounded-2xl p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">404</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Page not found</h1>
        <p className="mt-3 text-sm text-slate-300">
          The page you requested does not exist. You can continue from the main portfolio route.
        </p>
        <Link
          href="/tr"
          className="mt-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand/50 hover:text-brand-soft"
        >
          Go to portfolio
        </Link>
      </div>
    </main>
  );
}
