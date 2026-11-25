import { createFileRoute } from "@tanstack/react-router";
import { Heart, Package, Users, Building2 } from "lucide-react";
import DonationForm from "@/components/site/DonationForm";

export const Route = createFileRoute("/_site/donate")({
  head: () => ({
    meta: [
      { title: "Donate | The Investors Academy" },
      {
        name: "description",
        content:
          "Support housing, job training, food and clothing programs for at-risk youth, veterans and families in Atlanta. The Investors Academy Inc is a 501(c)(3) nonprofit.",
      },
    ],
  }),
  component: DonatePage,
});

const WAYS = [
  {
    icon: Heart,
    title: "Give financially",
    text: "One-time or monthly gifts fund housing support, training and emergency assistance.",
  },
  {
    icon: Package,
    title: "Donate goods",
    text: "Clothing, non-perishable food and household essentials stock our closet and pantry.",
  },
  {
    icon: Users,
    title: "Volunteer",
    text: "Serve at food distributions, mentor a young person, or teach a job-readiness session.",
  },
  {
    icon: Building2,
    title: "Partner with us",
    text: "Employers, landlords and community organizations help us place and house people faster.",
  },
];

function DonatePage() {
  return (
    <>
      <section className="border-b border-border bg-card/60">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Donate</p>
          <h1 className="mt-4 max-w-3xl text-balance font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Turn generosity into a fresh start
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The Investors Academy Inc is a 501(c)(3) nonprofit (EIN 82-2621762). Gifts support
            housing, job training, food and clothing for the people we serve.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl tracking-tight text-foreground">Ways to give</h2>
          <div className="mt-8 space-y-5">
            {WAYS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-secondary p-6 text-secondary-foreground">
            <p className="font-heading text-xl">Online card giving is being set up</p>
            <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">
              Pledge your gift below and our team will follow up to complete it and send your
              tax-deductible receipt.
            </p>
          </div>
        </div>

        <div>
          <DonationForm />
        </div>
      </section>
    </>
  );
}
