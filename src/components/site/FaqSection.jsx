import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Who can get help?",
    a: "At-risk youth, veterans, returning citizens and families — especially in the Atlanta area. If you're not sure whether you qualify, send a request anyway and we'll talk it through.",
  },
  {
    q: "Does it cost anything?",
    a: "No. Our programs are free to the people we serve. There are no fees to apply or to receive support.",
  },
  {
    q: "What happens after I submit a request?",
    a: "A case worker reads your request and contacts you using the email or phone number you provide, usually within a few business days. Urgent housing situations are prioritized.",
  },
  {
    q: "Do I need documents to start?",
    a: "Nothing to start. If identification or income paperwork is needed for housing or training, we'll tell you exactly what to gather and help you get it.",
  },
  {
    q: "Is my information private?",
    a: "Yes. Your details are used only to connect you with support and are never shared publicly or sold.",
  },
  {
    q: "How can I help?",
    a: "Give a one-time or monthly gift, donate clothing or food, volunteer at a distribution, or partner with us as an employer or landlord.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Questions</p>
          <h2 className="mt-3 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            Answers before you reach out
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Still unsure about something? Send a request or a message — asking costs nothing.
          </p>
          <Link
            to="/get-help"
            className="mt-6 inline-flex text-sm font-medium text-secondary hover:text-primary"
          >
            Request support →
          </Link>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
