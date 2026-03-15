interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ overline, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-9 sm:mb-11">
      {overline ? (
        <span className="mb-4 inline-flex rounded-full border border-brand/35 bg-brand/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-soft">
          {overline}
        </span>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
