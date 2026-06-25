import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Availability", value: "24/7" },
  { label: "Response Time", value: "< 5s" },
  { label: "Lead Routing", value: "Instant" },
];

export function SocialProof() {
  return (
    <section id="proof" className="border-y border-border/50 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="rounded-none border-0 bg-transparent sm:border-r sm:border-border/50 last:sm:border-r-0"
          >
            <CardContent className="flex flex-col items-center py-10 text-center">
              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}