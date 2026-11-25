import NewsletterForm from "@/components/site/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="border-y border-border bg-accent/50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Stay connected
          </p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground">
            Get updates from the work
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Food drives, training cohorts, volunteer days and new programs — sent occasionally, never
            shared.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
