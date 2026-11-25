import { Check } from "lucide-react";
import { Image } from "@/components/ui/image";

const PANTRY_IMAGE =
  "https://static.wixstatic.com/media/fba46e_3de468c4b8374c2999b8c0de8d0d20b8~mv2.jpg";

const SERVED = [
  "Unhoused veterans",
  "Returning citizens rebuilding after incarceration",
  "Youth and young adults transitioning into independence",
  "Families working toward self-sufficiency",
];

export default function MissionBand() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16">
      <div className="order-2 overflow-hidden rounded-[2rem] border border-border lg:order-1">
        <Image
          src={PANTRY_IMAGE}
          alt="A participant working on the job at a partner restaurant through our employment program"
          className="aspect-[5/4] w-full object-cover"
          fittingType="fill"
          quality={88}
        />
      </div>

      <div className="order-1 lg:order-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our mission</p>
        <h2 className="mt-3 text-balance font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
          A hand up, not just a handout.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          We reintegrate families and at-risk youth back into the community and walk alongside them
          until they can stand on their own — with housing, training, mentorship and the everyday
          essentials that keep a household steady.
        </p>

        <ul className="mt-8 space-y-3">
          {SERVED.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
