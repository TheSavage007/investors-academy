import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const LOGO =
  "https://static.wixstatic.com/media/fba46e_5e4ba0795ffd4011ba39b7021cf2d1fb~mv2_d_3300_2550_s_4_2.png";

export default function Brand({ className, showLocation = true, size = "md" }) {
  const large = size === "lg";

  return (
    <span className={cn("flex items-center gap-4", className)}>
      <Image
        src={LOGO}
        alt="The Investors Academy logo"
        className={cn(
          "shrink-0 object-contain mix-blend-multiply",
          large ? "h-36 w-[186px]" : "h-20 w-[104px] sm:h-28 sm:w-[145px]"
        )}
        fittingType="fit"
        quality={90}
      />
      <span className="flex flex-col justify-center">
        <span
          className={cn(
            "font-heading leading-tight tracking-tight text-foreground",
            large ? "text-xl" : "text-base sm:text-lg"
          )}
        >
          The Investors Academy
        </span>
        {showLocation && (
          <span className="mt-1 flex flex-col gap-0.5 text-[9px] uppercase leading-snug tracking-[0.18em] text-muted-foreground sm:text-[10px]">
            <span>Atlanta, Georgia</span>
            <span>West Coast · AZ · NV · CA</span>
          </span>
        )}
      </span>
    </span>
  );
}
