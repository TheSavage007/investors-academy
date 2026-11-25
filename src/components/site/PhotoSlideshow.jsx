import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function PhotoSlideshow({ photos, interval = 5000, className }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = photos.length;

  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), interval);
    return () => clearInterval(id);
  }, [paused, interval, total]);

  const go = (step) => setIndex((i) => (i + step + total) % total);
  const active = photos[index];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-border bg-muted shadow-sm",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === index ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={photo.focalPointY ?? 0.4}
              quality={85}
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary/90 via-secondary/35 to-transparent px-5 pb-14 pt-20 sm:px-8 sm:pb-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            {active.group}
          </p>
          <p className="mt-1 font-heading text-lg leading-snug text-primary-foreground sm:text-2xl">
            {active.caption}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-secondary/40 text-primary-foreground backdrop-blur transition-colors hover:bg-secondary/70 sm:left-5"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-secondary/40 text-primary-foreground backdrop-blur transition-colors hover:bg-secondary/70 sm:right-5"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 px-5 pb-4 sm:justify-end sm:px-8">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-7 bg-primary-foreground" : "w-1.5 bg-primary-foreground/45 hover:bg-primary-foreground/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
