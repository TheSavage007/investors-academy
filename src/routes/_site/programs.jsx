import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_site/programs")({
  head: () => ({
    meta: [
      { title: "Programs | The Investors Academy" },
      {
        name: "description",
        content:
          "Housing, youth outreach, workforce development, food pantry and clothing closet programs for veterans, returning citizens, youth and families in Atlanta.",
      },
    ],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  {
    value: "housing",
    title: "Housing Program",
    summary:
      "A safe place to land and the support to keep it. We help unhoused veterans, returning citizens and youth transitioning out of care secure stable housing.",
    points: [
      "Housing placement and landlord coordination",
      "Case management and benefits navigation",
      "Life-skills coaching for first-time renters",
    ],
  },
  {
    value: "youth_outreach",
    title: "Youth Outreach",
    summary:
      "Leadership training and mentorship for young people growing up against the odds — building confidence, direction and a plan for what comes next.",
    points: [
      "Leadership and character development",
      "One-to-one mentorship",
      "Entrepreneurship and financial basics",
    ],
  },
  {
    value: "workforce",
    title: "Workforce Development",
    summary:
      "Hands-on trades training, job readiness and placement for people coming out of incarceration or long stretches of unemployment.",
    points: [
      "Construction and trades training",
      "Resume writing, interviewing and workplace etiquette",
      "Job placement and employer partnerships",
      "Forklift certification training — coming in 2027",
    ],
  },
  {
    value: "food_pantry",
    title: "Food Pantry",
    summary:
      "Groceries and holiday meals for families facing food insecurity, plus nutritional support for senior high-rise communities.",
    points: [
      "Weekly grocery boxes",
      "Holiday meal support for families",
      "Deliveries to senior communities",
    ],
  },
  {
    value: "clothing_closet",
    title: "Clothing Closet",
    summary:
      "Free clothing and everyday essentials so families can show up to work, school and appointments with dignity.",
    points: [
      "Clothing for adults and children",
      "Work attire for interviews and new jobs",
      "Basic household and personal essentials",
    ],
  },
];

function ProgramsPage() {
  return (
    <>
      <section className="border-b border-border bg-card/60">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our programs</p>
          <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Support that meets people where they are
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every program is built around the same goal: helping families and at-risk youth become
            self-sufficient, with the practical support to get there.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-5 py-16">
        {PROGRAMS.map((program, index) => (
          <article
            key={program.title}
            className="grid gap-8 rounded-[1.75rem] border border-border bg-card p-7 sm:p-10 lg:grid-cols-[auto_1fr]"
          >
            <div className="flex items-start gap-4 lg:w-16 lg:flex-col">
              <span className="font-heading text-3xl text-primary/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-foreground sm:text-3xl">{program.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {program.summary}
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/get-help"
                search={{ program: program.value }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
              >
                Request help with this <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-secondary px-8 py-12 text-secondary-foreground sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl">Not sure which program fits?</h2>
            <p className="mt-2 text-sm text-secondary-foreground/70">
              Send us one request and our team will point you to the right support.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90">
            <Link to="/get-help">
              Request help <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
