type Props = { index: string; label: string; title: React.ReactNode; intro?: string; id?: string };

export function SectionHeading({ index, label, title, intro, id }: Props) {
  return (
    <div className="reveal grid gap-6 border-t border-line pt-6 md:grid-cols-12">
      <p className="text-sm tracking-[0.18em] text-ink-2 uppercase md:col-span-3">
        <span className="text-accent-text">{index}</span> — {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="font-display text-4xl leading-[1.05] sm:text-6xl">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl text-lg text-ink-2">{intro}</p>}
      </div>
    </div>
  );
}
