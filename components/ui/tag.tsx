interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-[0.02em] text-slate-100 shadow-[0_1px_0_rgba(255,255,255,0.07)_inset]">
      {children}
    </span>
  );
}
