import { Link } from "@tanstack/react-router";
import { ArrowRight, Home, Users, HardHat, ShoppingBasket, Shirt } from "lucide-react";

const PROGRAMS = [
  {
    icon: Home,
    title: "Housing Program",
    text: "Stable housing and case support for unhoused veterans, returning citizens and youth transitioning into adulthood.",
  },
  {
    icon: Users,
    title: "Youth Outreach",
    text: "Leadership training, mentorship and life-skills coaching that help young people find their footing.",
  },
  {
    icon: HardHat,
    title: "Workforce Development",
    text: "Job training, resume help and placement — with forklift certification training coming in 2027.",
  },
  {
    icon: ShoppingBasket,
    title: "Food Pantry",
    text: "Groceries and holiday meals for families facing food insecurity, plus support for senior communities.",
  },
  {
    icon: Shirt,
    title: "Clothing Closet",
    text: "Free clothing and everyday essentials for families getting back on their feet.",
  },
];

export default function ProgramsPreview() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 max-w-xl text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Five ways we help people rebuild
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
          >
            Explore all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-2xl bg-secondary p-6 text-secondary-foreground">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground/60">
                Need support?
              </p>
              <h3 className="mt-3 font-heading text-2xl leading-tight">
                Tell us what you're facing. We'll start there.
              </h3>
            </div>
            <Link
              to="/get-help"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-secondary-foreground"
            >
              Request help <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
