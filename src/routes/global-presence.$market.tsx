import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { marketProfiles } from "@/frontend/features/market/content";
import { MarketPageContent } from "@/frontend/features/market/sections";
export const Route=createFileRoute("/global-presence/$market")({
 loader:({params})=>{const profile=marketProfiles[params.market];if(!profile) throw notFound();return profile;},
 head:({loaderData})=>{const name=loaderData?.name??"Market";const marketName=name==="India"?"India":`India–${name}`;return {meta:[{title:`${marketName} FMCG Trade Support — Rishishwar Industry`},{name:"description",content:`Explore ${marketName} FMCG trade opportunities, market requirements and Rishishwar support.`},{property:"og:title",content:`${marketName} Market Opportunities`},{property:"og:description",content:name==="India"?"FMCG retail access and market-entry support across India.":`FMCG trade opportunities and practical market-entry support between India and ${name}.`},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]};},
 component:Page,
});
function Page(){const profile=Route.useLoaderData();return <div className="min-h-screen bg-background"><SiteHeader/><main><MarketPageContent profile={profile}/></main><SiteFooter/></div>}
