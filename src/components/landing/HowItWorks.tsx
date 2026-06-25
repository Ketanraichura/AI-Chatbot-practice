const steps = [
  {
    step: "1",
    title: "Visitor starts conversation",
    description: "A potential lead lands on your site and engages with the AI assistant.",
  },
  {
    step: "2",
    title: "AI asks qualification questions",
    description:
      "The assistant gathers key information: service interest, budget, timeline, and company size.",
  },
  {
    step: "3",
    title: "Lead information is captured",
    description:
      "Contact details are collected and the lead is scored based on intent.",
  },
  {
    step: "4",
    title: "Meeting is booked automatically",
    description:
      "Qualified leads are routed to your calendar with a scheduled meeting.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border/50 bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          From first click to booked meeting in four simple steps.
        </p>

        <div className="relative mt-16">
          {/* Vertical line (mobile) / horizontal line (desktop) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border sm:left-1/2 sm:top-6 sm:bottom-auto sm:h-px sm:w-full" />

          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            {steps.map((step) => (
              <div key={step.step} className="relative flex gap-4 sm:flex-col sm:items-center sm:text-center">
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-bold sm:mb-4">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold sm:mt-0">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}