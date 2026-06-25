export const config = {
  dify: {
    appId: process.env.NEXT_PUBLIC_DIFY_APP_ID || "",
    apiKey: process.env.DIFY_API_KEY || "",
  },
  calendly: {
    url: process.env.CALENDLY_URL || "https://calendly.com/shivamraichura36/30min",
  },
  supabase: {
    url: process.env.SUPABASE_URL || "",
    anonKey: process.env.SUPABASE_ANON_KEY || "",
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  },
  n8n: {
    webhookUrl: process.env.N8N_WEBHOOK_URL || "",
  },
} as const;