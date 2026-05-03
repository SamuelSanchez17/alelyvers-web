import Link from "next/link";

export function ForgotPasswordPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 items-center px-5 py-16 md:px-8">
      <section className="w-full rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">
          Recuperacion de acceso
        </p>
        <h1 className="mt-4 font-display text-5xl leading-tight">Olvidaste tu contrasena</h1>
        <p className="mt-4 max-w-2xl text-[var(--brand-ink-700)]">
          Conectar esta vista con Supabase para enviar un correo de recuperacion.
          Por ahora, esta pagina funciona como placeholder.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/auth/login"
            className="rounded-full bg-[var(--brand-ink-900)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-mist-50)]"
          >
            Volver al login
          </Link>
          <Link
            href="/"
            className="rounded-full border border-black/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em]"
          >
            Ir al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
