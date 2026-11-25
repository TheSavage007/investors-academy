import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { PROGRAMS } from "@/lib/programs";

const EMPTY = {
  full_name: "",
  email: "",
  phone: "",
  program: "",
  city: "",
  household_size: "",
  message: "",
};

export default function IntakeForm({ initialProgram = "" }) {
  const [form, setForm] = useState({ ...EMPTY, program: initialProgram });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (!form.full_name.trim() || !form.program) {
      setError("Please add your name and choose the support you need.");
      return;
    }
    if (!form.email.trim() && !form.phone.trim()) {
      setError("Please add an email or phone number so we can reach you.");
      return;
    }
    setError("");
    setSaving(true);
    try {
      await base44.entities.Participant.create({
        full_name: form.full_name.trim(),
        email: form.email.trim() || undefined,
        phone: form.phone.trim() || undefined,
        program: form.program,
        city: form.city.trim() || undefined,
        household_size: form.household_size ? Number(form.household_size) : undefined,
        message: form.message.trim() || undefined,
      });
      setSent(true);
      setForm({ ...EMPTY, program: initialProgram });
    } catch (err) {
      setError("We couldn't send your request. Please try again.");
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
        <h3 className="mt-5 font-heading text-2xl text-foreground">Request received</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. A member of our team will review your request and contact you
          about next steps.
        </p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSent(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="font-heading text-2xl text-foreground">Request support</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Free, confidential, and no documents needed to start. Add an email or phone number so we
        can reach you.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="full_name">Full name *</Label>
          <Input id="full_name" value={form.full_name} onChange={update("full_name")} placeholder="Your name" className="mt-1.5" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className="mt-1.5" />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="(555) 555-5555" className="mt-1.5" />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="program">What kind of support do you need? *</Label>
          <Select value={form.program} onValueChange={(value) => setForm((prev) => ({ ...prev, program: value }))}>
            <SelectTrigger id="program" className="mt-1.5">
              <SelectValue placeholder="Choose a program" />
            </SelectTrigger>
            <SelectContent>
              {PROGRAMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" value={form.city} onChange={update("city")} placeholder="Atlanta, GA" className="mt-1.5" />
        </div>

        <div>
          <Label htmlFor="household_size">People in household</Label>
          <Input
            id="household_size"
            type="number"
            min="1"
            value={form.household_size}
            onChange={update("household_size")}
            placeholder="1"
            className="mt-1.5"
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message">Tell us what you're facing</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Housing, work, food, or anything else we should know"
            className="mt-1.5"
          />
        </div>
      </div>

      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

      <Button type="submit" size="lg" disabled={saving} className="mt-6 w-full rounded-full sm:w-auto sm:px-8">
        {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {saving ? "Sending…" : "Send request"}
      </Button>
    </form>
  );
}
