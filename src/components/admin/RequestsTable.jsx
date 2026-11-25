import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PROGRAM_LABELS, STATUSES } from "@/lib/programs";
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

export default function RequestsTable({ requests, onStatusChange }) {
  if (!requests.length) {
    return (
      <EmptyState
        title="No requests yet"
        text="Submissions from the Get help form will appear here as soon as people reach out."
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[760px] text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50 text-left text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <th className="px-4 py-3 font-medium">Name</th>
            <th className="px-4 py-3 font-medium">Program</th>
            <th className="px-4 py-3 font-medium">Contact</th>
            <th className="px-4 py-3 font-medium">Household</th>
            <th className="px-4 py-3 font-medium">Received</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-b border-border/60 last:border-0 align-top">
              <td className="px-4 py-4">
                <p className="font-medium text-foreground">{request.full_name}</p>
                {request.city && <p className="mt-0.5 text-xs text-muted-foreground">{request.city}</p>}
                {request.message && (
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted-foreground">
                    {request.message}
                  </p>
                )}
              </td>
              <td className="px-4 py-4 text-foreground/80">
                {PROGRAM_LABELS[request.program] || request.program}
              </td>
              <td className="px-4 py-4 text-foreground/80">
                {request.email && <p>{request.email}</p>}
                {request.phone && <p className="text-xs text-muted-foreground">{request.phone}</p>}
                {!request.email && !request.phone && <span className="text-muted-foreground">—</span>}
              </td>
              <td className="px-4 py-4 text-foreground/80">{request.household_size || "—"}</td>
              <td className="px-4 py-4 text-foreground/80">{formatDate(request.created_date)}</td>
              <td className="px-4 py-4">
                <Select
                  value={request.status || "new"}
                  onValueChange={(value) => onStatusChange(request.id, value)}
                >
                  <SelectTrigger className="h-9 w-[132px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUSES.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
