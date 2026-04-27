"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, MoveRight, ShieldCheck } from "lucide-react";

export function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-10 md:px-8 md:py-16">
      <section className="grid w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:grid-cols-[1fr_1.05fr]">
        <aside className="relative flex flex-col justify-between gap-10 bg-[radial-gradient(circle_at_25%_20%,#f4b4003d,transparent_36%),linear-gradient(145deg,#09090b_0%,#1b1b20_48%,#34271d_100%)] p-8 text-[var(--brand-mist-50)] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-wave-cream)]">Acceso restringido</p>
            <h1 className="mt-4 font-display text-6xl leading-none">Panel admin</h1>
            <p className="mt-4 max-w-md text-sm text-white/85">
              Entrada exclusiva para administrar productos, pedidos y contenido del sitio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <div className="flex items-center gap-3 text-[var(--brand-wave-cream)]">
              <ShieldCheck size={18} />
              <p className="text-xs uppercase tracking-[0.16em]">Zona privada</p>
            </div>
            <p className="mt-3 text-sm text-white/90">
              Si no tienes credenciales, pide acceso al equipo antes de continuar.
            </p>
          </div>
        </aside>

        <div className="p-8 md:p-10">
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">Administrador</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-[var(--brand-ink-900)]">Iniciar sesion</h2>
            <p className="mt-4 text-sm text-[var(--brand-ink-700)]">
              Accede con tus credenciales para abrir el dashboard de administracion.
            </p>

            <form className="mt-8 space-y-4" action="#">
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--brand-ink-700)]">Correo admin</span>
                <span className="flex items-center gap-2 rounded-xl border border-black/10 bg-[var(--brand-mist-50)] px-3">
                  <Mail size={16} className="text-[var(--brand-ink-700)]" />
                  <input
                    type="email"
                    required
                    placeholder="admin@ejemplo.com"
                    className="h-11 w-full bg-transparent text-sm outline-none"
                  />
                </span>
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--brand-ink-700)]">Contrasena</span>
                <span className="flex items-center gap-2 rounded-xl border border-black/10 bg-[var(--brand-mist-50)] px-3">
                  <LockKeyhole size={16} className="text-[var(--brand-ink-700)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="********"
                    className="h-11 w-full bg-transparent text-sm outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
                    className="rounded-full p-1 text-[var(--brand-ink-700)] transition-colors hover:bg-black/5"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </span>
              </label>

              <div className="flex items-center justify-between gap-4 pt-1 text-sm">
                <label className="flex items-center gap-2 text-[var(--brand-ink-700)]">
                  <input type="checkbox" className="h-4 w-4 rounded border-black/20" />
                  Recordarme
                </label>
                <Link href="/" className="font-semibold text-[var(--brand-ink-900)] hover:underline">
                  Volver al sitio
                </Link>
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-candle-gold)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-ink-900)] transition-transform hover:-translate-y-0.5"
              >
                Entrar al panel
                <MoveRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}