"use client";

import { config } from "@/config";

export function DifyEmbed() {
  const appId = config.dify.appId;

  if (!appId || appId === "your_dify_app_id_here") {
    return (
      <div className="flex h-[500px] w-full items-center justify-center rounded-lg border border-border/50 bg-muted/30 text-muted-foreground">
        <p className="text-sm">Dify chatbot will appear here once configured.</p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://udify.app/chatbot/${appId}`}
      title="LeadPilot AI Assistant"
      className="h-[500px] w-full rounded-lg border border-border/50"
      allow="microphone"
    />
  );
}