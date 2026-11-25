import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoSlideshow from "@/components/site/PhotoSlideshow";
import { PHOTOS } from "@/lib/sitePhotos";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div>
          <h1 className="text-balance font-heading text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]">
            Rebuilding lives, one <span className="italic text-primary">family</span> at a time.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The Investors Academy helps at-risk youth, veterans and families move from crisis to
            self-sufficiency through housing, job training, food and clothing support.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/get-help">
                Get help <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-secondary/25 px-7">
              <Link to="/donate">
                <Heart className="mr-2 h-4 w-4" /> Support our work
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Free to apply · Confidential · Reviewed by a real case worker
          </p>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Families fed</dt>
              <dd className="font-heading text-2xl text-secondary">5,000+</dd>
            </div>
            <div className="border-l border-border pl-10">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Youth trained</dt>
              <dd className="font-heading text-2xl text-secondary">2,000</dd>
            </div>
            <div className="border-l border-border pl-10">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Jobs & businesses</dt>
              <dd className="font-heading text-2xl text-secondary">200+</dd>
            </div>
          </dl>

          <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-muted-foreground/75">
            501(c)(3) nonprofit · Atlanta, Georgia
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-full border border-primary/25 lg:block" />
          <PhotoSlideshow photos={PHOTOS} />
        </div>
      </div>
    </section>
  );
}
