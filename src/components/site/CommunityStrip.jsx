import { Building2, Newspaper, HeartHandshake, HardHat } from "lucide-react";

const ITEMS = [
  {
    icon: Building2,
    title: "City of Forest Park partnership",
    text: "Expanding reentry and workforce services alongside local government.",
  },
  {
    icon: Newspaper,
    title: "Featured by VoyageATL",
    text: "Our work and founder highlighted in Atlanta community coverage.",
  },
  {
    icon: HeartHandshake,
    title: "Serving senior communities",
    text: "Nutritional support delivered to senior high-rise residents.",
  },
  {
    icon: HardHat,
    title: "Forklift certification in 2027",
    text: "A new credentialed training track for workforce participants.",
  },
];

export default function CommunityStrip() {
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">In the community</p>
          <p className="text-sm text-muted-foreground">Partners, press and programs growing in Atlanta.</p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
