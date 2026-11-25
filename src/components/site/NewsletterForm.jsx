import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "" });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.email.trim()) {
      setError("Please add your email address.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      await base44.entities.Subscriber.create({
        first_name: form.first_name.trim() || undefined,
        last_name: form.last_name.trim() || undefined,
        email: form.email.trim(),
      });
      setSent(true);
      setForm({ first_name: "", last_name: "", email: "" });
    } catch (err) {
      setError("We couldn't add you to the list. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  if (sent) {
    return (
      <p className="rounded-xl bg-card px-5 py-4 text-sm text-foreground">
        You're on the list. Thank you for staying connected with our work.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          value={form.first_name}
          onChange={update("first_name")}
          placeholder="First name"
          aria-label="First name"
          className="bg-card"
        />
        <Input
          value={form.last_name}
          onChange={update("last_name")}
          placeholder="Last name"
          aria-label="Last name"
          className="bg-card"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="Email address"
          aria-label="Email address"
          className="bg-card"
        />
        <Button type="submit" disabled={saving} className="rounded-full px-6">
          {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {saving ? "Joining…" : "Subscribe"}
        </Button>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
}
