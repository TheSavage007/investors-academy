import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About us | The Investors Academy" },
      {
        name: "description",
        content:
          "The Investors Academy Inc is an Atlanta nonprofit reintegrating families and at-risk youth into the community through housing, training, mentorship and outreach.",
      },
    ],
  }),
  component: AboutPage,
});

const FIGURES = [
  { value: "5,000+", label: "families fed through our food pantry and holiday meal giveaways" },
  { value: "2,000", label: "youth received leadership and workforce training" },
  { value: "200+", label: "young people started a business or gained employment" },
];

const TEAM = [
  "Program director and program manager leading day-to-day operations",
  "Social workers and counselors running outreach and one-to-one support",
  "Trainers teaching job skills, resume writing, communication and etiquette",
  "A board with expertise in real estate, counseling, teaching and human resources",
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card/60">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
          <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Reintegration that treats people as whole
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our mission is to reintegrate families and at-risk youth back into the community, assisting
            them into becoming self-sufficient citizens.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="font-heading text-3xl tracking-tight text-foreground">Who we are</h2>
          <p>
            The Investors Academy Inc serves at-risk youth, veterans and families across Atlanta and
            beyond. We were built for the people who are most often left out of the room: unhoused
            veterans, returning citizens rebuilding after incarceration, and young people aging out of
            systems with nowhere steady to go.
          </p>
          <p>
            Our approach is practical. Housing first, then training, then placement — paired with
            counseling, mentorship and the everyday essentials that keep a household moving forward.
            We stay with people through the setbacks, not just the first appointment.
          </p>
          <p>
            We are a registered 501(c)(3) nonprofit (EIN 82-2621762) and partner with government
            agencies, service providers, corporations and community organizations to expand what we
            can offer.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-card p-7">
          <h3 className="font-heading text-xl text-foreground">Our team</h3>
          <ul className="mt-5 space-y-4">
            {TEAM.map((item) => (
              <li key={item} className="border-l-2 border-primary/30 pl-4 text-sm leading-relaxed text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-accent/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Key figures</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {FIGURES.map((figure) => (
              <div key={figure.value}>
                <p className="font-heading text-4xl text-secondary">{figure.value}</p>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {figure.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-border bg-card px-8 py-12 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl text-foreground">Want to partner with us?</h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Employers, landlords, churches and community groups all make this work possible.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/donate">
              Get involved <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
