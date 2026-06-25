import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { SocialProof } from "@/components/landing/SocialProof";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DemoSection } from "@/components/landing/DemoSection";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { FloatingChatWidget } from "@/components/chat/FloatingChatWidget";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <SocialProof />
        <DemoSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingChatWidget />
    </div>
  );
}