import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Factory, Globe2, Handshake, MapPin, Store, TrendingUp } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import productionImage from "@/assets/manufacturer-floor.jpg";

export const Route = createFileRoute("/manufacturers")({
  head: () => ({ meta: [
    { title: "For Manufacturers — FMCG Market Access | Rishishwar Industry" },
    { name: "description", content: "Explore retail network access, distributor connections, domestic expansion and international opportunities for FMCG manufacturers with Rishishwar Industry." },
    { property: "og:title", content: "For Manufacturers — Rishishwar Industry" },
    { property: "og:description", content: "Take your FMCG products from the production floor to retail shelves and new markets with a focused growth partner." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ManufacturersPage,
});

const channels = [
  { number: "01", icon: Store, title: "Retail network", description: "Bring your products closer to customers through our retail network.", to: "/our-services" as const },
  { number: "02", icon: Handshake, title: "Distributor connections", description: "Find distribution partners aligned to your product and target markets.", to: "/our-services" as const },
  { number: "03", icon: MapPin, title: "Domestic expansion", description: "Plan entry into new Indian cities with a clear market approach.", to: "/our-services" as const },
  { number: "04", icon: Globe2, title: "Global opportunities", description: "Explore routes to international buyers and overseas markets.", to: "/global-presence" as const },
];

const process = [
  { icon: Boxes, title: "Understand the product", description: "Your category, capacity, pricing and target markets come first." },
  { icon: TrendingUp, title: "Shape the opportunity", description: "We identify relevant channels and discuss a practical route to market." },
  { icon: Factory, title: "Build the partnership", description: "The next steps and commercial terms are discussed directly with our team." },
];

function ManufacturersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="dark-surface relative isolate flex min-h-[650px] items-center overflow-hidden border-b border-border sm:min-h-[690px]">
          <img src={productionImage} alt="Manufacturing team inspecting products on a production line" width={1600} height={900} className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]" />
          <div className="hero-overlay-mobile absolute inset-0 -z-10 md:hidden" />
          <div className="hero-overlay absolute inset-0 -z-10 hidden md:block" />
          <div className="page-shell py-20">
            <div className="max-w-3xl">
              <p className="royal-label">For FMCG manufacturers</p>
              <h1 className="mt-7 max-w-2xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Your products deserve <span className="text-accent-foreground">a bigger market.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-ink-foreground/80 sm:text-lg">From the production floor to retail shelves and beyond, build your next route to market with Rishishwar Industry.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg"><Link to="/partner-with-us" search={{ partner: "manufacturer" }}>Register as a manufacturer <ArrowRight aria-hidden="true" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="border-ink-foreground/40 text-ink-foreground"><Link to="/contact">Talk to us</Link></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="cinematic-section">
          <div className="page-shell">
            <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
              <div><p className="royal-label">Market access</p><h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl">Built for what comes after production.</h2></div>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">Making a quality product is the beginning. Finding the right stores, distributors and markets is how it grows.</p>
            </div>
            <div className="grid border-l border-border sm:grid-cols-2 lg:grid-cols-4">
              {channels.map(({ number, icon: Icon, title, description, to }) => (
                <Link key={number} to={to} className="group flex min-h-72 flex-col border-b border-r border-border p-6 transition-colors hover:bg-secondary sm:p-8">
                  <div className="flex items-center justify-between text-primary"><span className="font-display text-xs font-bold">{number}</span><Icon className="size-6" aria-hidden="true" /></div>
                  <div className="mt-auto pt-12"><h3 className="text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p><ArrowRight className="mt-6 size-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cinematic-section border-y border-border bg-secondary">
          <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="royal-label">A clear path forward</p><h2 className="mt-6 text-4xl sm:text-5xl">A partnership with purpose.</h2><p className="mt-6 leading-8 text-muted-foreground">Every manufacturing business is different. We start with your products and ambitions before discussing where the opportunity lies.</p></div>
            <ol className="border-t border-border">
              {process.map(({ icon: Icon, title, description }, index) => (
                <li key={title} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-border py-7 sm:grid-cols-[3rem_1fr_1.2fr] sm:items-center">
                  <span className="font-display text-sm font-bold text-primary">0{index + 1}</span>
                  <div className="flex items-center gap-3"><Icon className="size-5 shrink-0 text-primary" aria-hidden="true" /><h3 className="text-lg">{title}</h3></div>
                  <p className="col-start-2 text-sm leading-6 text-muted-foreground sm:col-auto">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dark-surface bg-ink py-20 text-ink-foreground sm:py-28">
          <div className="page-shell flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><p className="royal-label">Let's build your next market</p><h2 className="mt-6 text-4xl sm:text-6xl">Ready to take your brand <span className="text-accent-foreground">further?</span></h2><p className="mt-6 max-w-xl leading-8 text-ink-foreground/70">Tell us about your company, your products and the markets you want to reach.</p></div>
            <Button asChild size="lg" className="shrink-0 self-start lg:self-auto"><Link to="/partner-with-us" search={{ partner: "manufacturer" }}>Manufacturer registration <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}