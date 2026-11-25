import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESETS = [25, 50, 100, 250];
const FREQUENCIES = [
  { value: "one_time", label: "One time" },
  { value: "monthly", label: "Monthly" },
];

export default function DonationForm() {
  const [form, setForm] = useState({ donor_name: "", email: "", amount: "", frequency: "one_time", note: "" });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    const amount = Number(form.amount);
    if (!form.donor_name.trim() || !amount || amount <= 0) {
      setError("Please add your name and a gift amount.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      await base44.entities.DonationPledge.create({
        donor_name: form.donor_name.trim(),
        email: form.email.trim() || undefined,
        amount,
        frequency: form.frequency,
        note: form.note.trim() || undefined,
      });
      setSent(true);
      setForm({ donor_name: "", email: "", amount: "", frequency: "one_time", note: "" });
    } catch (err) {
      setError("We couldn't record your pledge. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-heading text-2xl text-foreground">Thank you</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your pledge is recorded. A member of our team will reach out to arrange your gift and send
          a receipt for your records.
        </p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSent(false)}>
          Make another pledge
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="font-heading text-2xl text-foreground">Pledge a gift</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Two fields are all we need. Our team follows up to complete your gift and send your receipt.
      </p>

      <div className="mt-6">
        <Label>Choose an amount *</Label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, amount: String(preset) }))}
              className={cn(
                "rounded-xl border py-3 text-sm font-medium transition-colors",
                form.amount === String(preset)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:border-primary/40"
              )}
            >
              ${preset}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <Label>Frequency</Label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {FREQUENCIES.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, frequency: item.value }))}
              className={cn(
                "rounded-xl border py-3 text-sm font-medium transition-colors",
                form.frequency === item.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-background text-foreground hover:border-primary/40"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="amount">Amount (USD) *</Label>
          <Input
            id="amount"
            type="number"
            min="1"
            step="1"
            value={form.amount}
            onChange={update("amount")}
            placeholder="Or enter another amount"
            className="mt-1.5"
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="donor_name">Name *</Label>
          <Input id="donor_name" value={form.donor_name} onChange={update("donor_name")} placeholder="Your name" className="mt-1.5" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="donor_email">Email</Label>
          <Input id="donor_email" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className="mt-1.5" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="donor_note">Note</Label>
          <Textarea
            id="donor_note"
            rows={3}
            value={form.note}
            onChange={update("note")}
            placeholder="Designate your gift or add a message"
            className="mt-1.5"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={saving} className="mt-6 w-full rounded-full">
        {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {saving ? "Sending…" : form.frequency === "monthly" ? "Pledge monthly gift" : "Pledge my gift"}
      </Button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3 w-3" /> Tax-deductible · Receipt by email · Your details stay private
      </p>
    </form>
  );
}
