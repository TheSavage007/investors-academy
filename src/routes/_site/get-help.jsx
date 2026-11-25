import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import IntakeForm from "@/components/site/IntakeForm";

export const Route = createFileRoute("/_site/get-help")({
  validateSearch: (search) => ({
    program: typeof search.program === "string" ? search.program : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Get help | The Investors Academy" },
      {
        name: "description",
        content:
          "Request housing, job training, food or clothing support from The Investors Academy in Atlanta. Confidential intake, reviewed by our team.",
      },
    ],
  }),
  component: GetHelpPage,
});

const STEPS = [
  {
    title: "Tell us what you need",
    text: "One short form. Housing, work, food, clothing — or several at once.",
  },
  {
    title: "We review your request",
    text: "A case worker reads every submission and identifies the fastest way to help.",
  },
  {
    title: "We reach out and get to work",
    text: "We contact you using the details you provide and start on next steps together.",
  },
];

function GetHelpPage() {
  const { program } = Route.useSearch();

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get help</p>
          <h1 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            You don't have to figure it out alone
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            If you're unhoused, out of work, or struggling to keep your family fed and clothed, we want
            to hear from you. There's no cost to ask.
          </p>

          <ol className="mt-10 space-y-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 font-heading text-sm text-primary">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 space-y-3 rounded-2xl bg-accent/50 p-6 text-sm text-foreground/80">
            <p className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Your information is kept confidential and used only to connect you with support.
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Requests are reviewed on business days; urgent housing situations are prioritized.
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Prefer to talk? Include your phone number and ask us to call you.
            </p>
          </div>
        </div>

        <div>
          <IntakeForm initialProgram={program || ""} />
        </div>
      </div>
    </section>
  );
}
