export function ExperienceBadge({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-[0.85rem] py-[0.35rem] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_2px_12px_rgba(249,115,22,0.35),inset_0_0_0_1px_rgba(255,255,255,0.25)]"
      style={{
        background:
          "linear-gradient(120deg, #f97316 0%, #ec4899 45%, #8b5cf6 100%)",
      }}
    >
      <span
        className="experience-badge-dot size-1.5 shrink-0 rounded-full bg-current"
        aria-hidden
      />
      {text}
    </span>
  );
}
