import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">Administrador</p>
        <h1 className="mt-3 font-display text-4xl text-[var(--brand-ink-900)]">Dashboard</h1>
        <p className="mt-3 text-sm text-[var(--brand-ink-700)]">
          Placeholder del panel. Aqui se mostrara la informacion de administracion.
        </p>
      </div>
      <Link
        href="/"
        className="w-fit rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-ink-900)] transition-colors hover:text-[var(--brand-honey-amber)]"
      >
        Volver al sitio
      </Link>
    </main>
  );
}
