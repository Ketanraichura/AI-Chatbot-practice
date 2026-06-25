"use client";

import { useState, useEffect } from "react";
import { config } from "@/config";

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const appId = config.dify.appId;

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!appId || appId === "your_dify_app_id_here") {
    return null;
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 ${
          isVisible && !isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label="Open chat"
      >
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 h-[500px] w-[380px] overflow-hidden rounded-lg border border-border/50 shadow-2xl sm:w-[420px]">
          <div className="flex items-center justify-between border-b border-border/50 bg-background px-4 py-3">
            <span className="text-sm font-medium">LeadPilot Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex size-6 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
              aria-label="Close chat"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <iframe
            src={`https://udify.app/chatbot/${appId}`}
            title="LeadPilot AI Assistant"
            className="h-[calc(500px-49px)] w-full"
            allow="microphone"
          />
        </div>
      )}
    </>
  );
}