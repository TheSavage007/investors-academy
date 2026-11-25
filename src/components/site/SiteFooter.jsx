import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, ExternalLink, LogIn } from "lucide-react";
import Brand from "@/components/site/Brand";

const LINKS = [
  { label: "Programs", to: "/programs" },
  { label: "About us", to: "/about" },
  { label: "Get help", to: "/get-help" },
  { label: "Donate", to: "/donate" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand size="lg" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Reintegrating families and at-risk youth back into the community, and helping them become
            self-sufficient citizens.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/investors.academy/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/investorsacademyyouth/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.investorsacademyyouth.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
            >
              Our website <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-foreground/75 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Organization
          </p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li>The Investors Academy Inc</li>
            <li>Atlanta, Georgia</li>
            <li>501(c)(3) nonprofit · EIN 82-2621762</li>
            <li>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-base font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <LogIn className="h-5 w-5" aria-hidden="true" />
                Staff sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Investors Academy Inc. All rights reserved.</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <p>Serving veterans, returning citizens, youth and families.</p>
            <p className="text-muted-foreground/80">
              Website designed, built &amp; managed by{" "}
              <span className="font-medium text-foreground/70">Oasis International LLC</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
