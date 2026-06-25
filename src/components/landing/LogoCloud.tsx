const logos = [
  "GrowthForge",
  "ScaleLab",
  "NorthStar",
  "LaunchPoint",
  "BrightPath",
  "Convertly",
];

export function LogoCloud() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by 200+ agencies
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-tight text-muted-foreground/40 transition-colors hover:text-muted-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}