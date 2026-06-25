import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-24 text-center sm:pt-32"
    >
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="size-[600px] rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Never Miss Another Qualified Lead
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl">
          LeadPilot qualifies prospects, captures contact details, and books
          meetings automatically.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full px-8 text-base">
            Book a Demo
          </Button>
          <a
            href="#demo"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Watch 90 Second Demo
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}