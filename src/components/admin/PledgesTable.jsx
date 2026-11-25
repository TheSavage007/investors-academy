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

export default function PledgesTable({ pledges }) {
  if (!pledges.length) {
    return (
      <EmptyState
        title="No pledges yet"
        text="Gifts pledged through the Donate page will be listed here for follow-up."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[680px] text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50 text-left text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <th className="px-4 py-3 font-medium">Donor</th>
            <th className="px-4 py-3 font-medium">Amount</th>
            <th className="px-4 py-3 font-medium">Frequency</th>
            <th className="px-4 py-3 font-medium">Note</th>
            <th className="px-4 py-3 font-medium">Received</th>
          </tr>
        </thead>
        <tbody>
          {pledges.map((pledge) => (
            <tr key={pledge.id} className="border-b border-border/60 last:border-0 align-top">
              <td className="px-4 py-4">
                <p className="font-medium text-foreground">{pledge.donor_name}</p>
                {pledge.email && <p className="mt-0.5 text-xs text-muted-foreground">{pledge.email}</p>}
              </td>
              <td className="px-4 py-4 text-foreground/80">
                ${Number(pledge.amount || 0).toLocaleString("en-US")}
              </td>
              <td className="px-4 py-4 text-foreground/80">
                {pledge.frequency === "monthly" ? "Monthly" : "One time"}
              </td>
              <td className="px-4 py-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
                {pledge.note || "—"}
              </td>
              <td className="px-4 py-4 text-foreground/80">{formatDate(pledge.created_date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
