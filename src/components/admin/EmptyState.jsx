export default function EmptyState({ title, text }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-background px-6 py-10 text-center">
      <p className="font-medium text-foreground">{title}</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
