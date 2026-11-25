import EmptyState from "@/components/admin/EmptyState";

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function SubscribersTable({ subscribers }) {
  if (!subscribers.length) {
    return (
      <EmptyState
        title="No subscribers yet"
        text="People who join the mailing list from the site will show up here."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50 text-left text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Email</th>
            <th className="px-4 py-3 font-medium">Joined</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id} className="border-b border-border/60 last:border-0">
              <td className="px-4 py-4 text-foreground">
                {[subscriber.first_name, subscriber.last_name].filter(Boolean).join(" ") || "—"}
              </td>
              <td className="px-4 py-4 text-foreground/80">{subscriber.email}</td>
              <td className="px-4 py-4 text-foreground/80">{formatDate(subscriber.created_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
