import { Image } from "@/components/ui/image";
import { COMMUNITY_PHOTOS } from "@/lib/sitePhotos";

export default function WorkGallery() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">From our work</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">
            Real days at the Resource Center
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Photos from our food pantry, clothing closet and community giveaways in Atlanta.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {COMMUNITY_PHOTOS.map((photo) => (
          <figure key={photo.src} className="group">
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                fittingType="fill"
                quality={82}
              />
            </div>
            <figcaption className="mt-2.5 text-xs text-muted-foreground">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
