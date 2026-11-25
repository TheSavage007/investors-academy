import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/site/Hero";
import CommunityStrip from "@/components/site/CommunityStrip";
import ProgramsPreview from "@/components/site/ProgramsPreview";
import MissionBand from "@/components/site/MissionBand";
import WorkGallery from "@/components/site/WorkGallery";
import FaqSection from "@/components/site/FaqSection";
import NewsletterSection from "@/components/site/NewsletterSection";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "The Investors Academy | Rebuilding lives in Atlanta" },
      {
        name: "description",
        content:
          "The Investors Academy is an Atlanta nonprofit helping at-risk youth, veterans and families rebuild their lives through housing, job training, food and clothing support.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <CommunityStrip />
      <ProgramsPreview />
      <MissionBand />
      <WorkGallery />
      <FaqSection />
      <NewsletterSection />

      <section className="mx-auto w-full max-w-6xl px-5 pb-20">
        <div className="rounded-[2rem] bg-secondary px-8 py-14 text-secondary-foreground sm:px-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Stand with us
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl leading-tight sm:text-4xl">
                Every gift becomes housing, training, groceries or a fresh start.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/70">
                The Investors Academy is a 501(c)(3) nonprofit. Your support goes directly to the
                people we serve in Atlanta and across the country.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90">
                <Link to="/donate">
                  Donate <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-secondary-foreground/30 bg-transparent px-7 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              >
                <Link to="/get-help">Get help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
