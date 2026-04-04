interface BasicStatusPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function BasicStatusPage({ eyebrow, title, description }: BasicStatusPageProps) {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-honey-amber)]">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--brand-ink-700)] md:text-base">{description}</p>
    </main>
  );
}
