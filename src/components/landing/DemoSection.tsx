import { DifyEmbed } from "@/components/chat/DifyEmbed";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Try the AI assistant yourself
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Ask about SEO, websites, branding, or paid advertising. See how
          LeadPilot qualifies and routes opportunities.
        </p>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-lg">
            <DifyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}