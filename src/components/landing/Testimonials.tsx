import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "LeadPilot helped us qualify leads automatically and reduced manual discovery calls by 40%.",
    name: "Sarah Chen",
    title: "Founder, GrowthForge",
  },
  {
    quote:
      "We went from missing leads after hours to booking meetings 24/7. The AI handles the first conversation flawlessly.",
    name: "Marcus Rivera",
    title: "CEO, ScaleLab",
  },
  {
    quote:
      "Our response time dropped from hours to seconds. Leads tell us it feels like talking to a real person.",
    name: "Aisha Patel",
    title: "Head of Growth, NorthStar",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by agencies
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          What our customers say
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border/50 bg-muted/30"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <svg
                  className="size-8 text-muted-foreground/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground">{t.quote}</p>
                <div className="mt-auto pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}