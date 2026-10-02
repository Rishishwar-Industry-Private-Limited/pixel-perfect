import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { HeroSection, CapabilitiesSection, ProcessSection, CtaSection } from "@/frontend/features/home/sections";
import { RetailNetworkIndicator } from "@/frontend/components/retail-network-indicator";
import { districtFigure, totalStoreFigure } from "@/frontend/data/retail-network";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Rishishwar Industry — FMCG Market Access & Business Growth" },
    { name: "description", content: "Retail market access, distributor partnerships, funding support and global expansion for FMCG manufacturers." },
    { property: "og:title", content: "Rishishwar Industry — From Factory to Global Markets" },
    { property: "og:description", content: `FMCG market access across ${totalStoreFigure} stores, ${districtFigure} districts and 8 countries.` },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <RetailNetworkIndicator />
        <CapabilitiesSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
