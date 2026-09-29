import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { AboutHero, MissionVision, Story, StatsBar, WhatWeDo, WhyUs, GlobalMindset, GrowCta } from "@/features/about/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Us — Rishishwar Industry Pvt. Ltd. | Driven by Markets. Built for Manufacturers.",
      },
      {
        name: "description",
        content:
          "Rishishwar Industry helps FMCG manufacturers grow beyond factory walls — 2,000+ retail stores, 23+ cities in India and 8 countries of market access.",
      },
      {
        property: "og:title",
        content: "About Rishishwar Industry — Driven by Markets. Built for Manufacturers.",
      },
      {
        property: "og:description",
        content:
          "From local markets to global opportunities: our story, mission and the market access we create for FMCG manufacturers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AboutHero />
        <MissionVision />
        <Story />
        <StatsBar />
        <WhatWeDo />
        <WhyUs />
        <GlobalMindset />
        <GrowCta />
      </main>
      <SiteFooter />
    </div>
  );
}

