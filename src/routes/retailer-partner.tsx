import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Section1, Section2, Section3 } from "@/features/retailer-partner/sections";

export const Route = createFileRoute("/retailer-partner")({
  head: () => ({
    meta: [
      { title: "Retailer Partner & Approx. Rent Calculator — Rishishwar Industry" },
      { name: "description", content: "Explore the Rishishwar Industry retailer partnership and calculate an indicative monthly store rent from your location and shop area. Estimates are subject to inspection and approval." },
      { property: "og:title", content: "Retailer Partner — Rishishwar Industry" },
      { property: "og:description", content: "Calculate an approximate, non-guaranteed monthly store rent with Rishishwar Industry." },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RetailerPartnerPage,
});

function RetailerPartnerPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <SiteFooter />
    </div>
  );
}
