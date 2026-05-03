"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Facebook, LockKeyhole, Mail, MoveRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function LoginPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const normalizedEmail = email.trim();
    if (!normalizedEmail || !password) {
      setErrorMessage("Completa correo y contrasena.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (!data.session) {
        setErrorMessage("Confirma tu correo antes de ingresar.");
        return;
      }

      router.push("/");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-12 md:px-8 md:py-16">
      <section className="grid w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm md:grid-cols-[1fr_1.1fr]">
        <aside className="relative flex flex-col justify-between gap-10 bg-[linear-gradient(145deg,#17120f_0%,#2f251d_45%,#5c4538_100%)] p-8 text-[var(--brand-mist-50)] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-wave-cream)]">Bienvenida a</p>
            <h1 className="mt-4 font-display text-6xl leading-none">AlelyVers</h1>
            <p className="mt-4 max-w-sm text-sm text-white/85">
              Inicia sesion para gestionar tu carrito, revisar pedidos y continuar tu experiencia artesanal.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand-wave-cream)]">Estado de cuenta</p>
            <p className="mt-3 text-sm text-white/90">Sincroniza tus favoritos y mantente al tanto de nuevas colecciones.</p>
          </div>
        </aside>

        <div className="p-8 md:p-10">
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">Acceso cliente</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-[var(--brand-ink-900)]">Iniciar sesion</h2>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--brand-ink-700)]">Correo electronico</span>
                <span className="flex items-center gap-2 rounded-xl border border-black/10 bg-[var(--brand-mist-50)] px-3">
                  <Mail size={16} className="text-[var(--brand-ink-700)]" />
                  <input
                    type="email"
                    required
                    placeholder="tuemail@ejemplo.com"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
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
                <Link href="/auth/forgot-password" className="font-semibold text-[var(--brand-ink-900)] hover:underline">
                  Olvidaste la contrasena?
                </Link>
              </div>

              {errorMessage ? (
                <p className="text-sm text-[#b42318]" role="status" aria-live="polite">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-candle-gold)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-ink-900)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {isSubmitting ? "Ingresando..." : "Entrar"}
                <MoveRight size={15} />
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-black/10" />
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--brand-ink-700)]">o continua con</span>
              <span className="h-px flex-1 bg-black/10" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/15 bg-white text-xs font-semibold uppercase tracking-[0.1em]"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    d="M21.6 12.23c0-.68-.06-1.33-.18-1.95H12v3.69h5.39a4.61 4.61 0 0 1-2 3.02v2.51h3.23c1.9-1.75 2.98-4.33 2.98-7.27Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 22c2.7 0 4.96-.9 6.62-2.44l-3.23-2.51c-.9.6-2.05.95-3.39.95-2.61 0-4.83-1.76-5.62-4.13H3.06v2.59A9.99 9.99 0 0 0 12 22Z"
                    fill="#34A853"
                  />
                  <path
                    d="M6.38 13.87A5.99 5.99 0 0 1 6.06 12c0-.65.11-1.28.32-1.87V7.54H3.06A9.99 9.99 0 0 0 2 12c0 1.61.38 3.13 1.06 4.46l3.32-2.59Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.97c1.47 0 2.78.5 3.81 1.47l2.85-2.85C16.95 2.99 14.69 2 12 2A9.99 9.99 0 0 0 3.06 7.54l3.32 2.59C7.17 7.73 9.39 5.97 12 5.97Z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/15 bg-white text-xs font-semibold uppercase tracking-[0.1em]"
              >
                <Facebook size={16} />
                Facebook
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
