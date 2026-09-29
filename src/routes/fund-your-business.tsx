import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { HeroSection, FundingNeedsSection, WhoCanApplyFormSection, FundingProcessSection, AcrossIndiaSection, DisclaimerSection } from "@/features/fund-your-business/sections";

export const Route = createFileRoute("/fund-your-business")({
  head: () => ({
    meta: [
      { title: "Fund Your Business — Machinery & Working Capital for Manufacturers | Rishishwar Industry" },
      { name: "description", content: "Rishishwar Industry helps eligible manufacturers explore funding solutions for machinery, plant & equipment and working capital. Submit your funding requirement for suitable financing options." },
      { property: "og:title", content: "Fund Your Business — For Manufacturers Only | Rishishwar Industry" },
      { property: "og:description", content: "Build capacity. Fund growth. Scale your manufacturing — machinery finance, working capital and business expansion funding support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FundYourBusinessPage,
});

function FundYourBusinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <FundingNeedsSection />
        <WhoCanApplyFormSection />
        <FundingProcessSection />
        <AcrossIndiaSection />
        <DisclaimerSection />
      </main>
      <SiteFooter />
    </div>
  );
}

