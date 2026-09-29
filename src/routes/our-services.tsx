import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Store,
  Users,
  Truck,
  Globe,
  HandCoins,
  Handshake,
  CheckCircle2,
  MapPin,
  Search,
  ClipboardCheck,
  Rocket,
  LineChart,
  ShieldCheck,
  PackageCheck,
  Boxes,
  FileText,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — Market Access, Distribution & Global Expansion | Rishishwar Industry" },
      { name: "description", content: "Explore Rishishwar Industry services: retail network access across 2,000+ stores, distributor & dealer appointment, domestic market expansion, import & export support and business funding assistance for FMCG manufacturers." },
      { property: "og:title", content: "Our Services — From Factory Gate To Global Shelf | Rishishwar Industry" },
      { property: "og:description", content: "Retail network access, distributor & dealer appointment, domestic expansion, import & export support and funding assistance — everything your brand needs to grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurServicesPage,
});

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  text: string;
  points: string[];
};

const services: Service[] = [
  {
    id: "retail-network",
    icon: Store,
    title: "Retail Network Access",
    tagline: "Direct shelf space in 2,000+ retail stores",
    text: "Getting your product into stores is the hardest step. Through our established retail relationships, your products reach real shelves in real stores — without waiting years to build a network from zero.",
    points: [
      "Access to 2,000+ retail stores across 23+ Indian cities",
      "Placement across grocery, kirana and modern trade counters",
      "Location and area-based store matching for your products",
      "Ongoing retail relationship management",
    ],
  },
  {
    id: "distributor-dealer",
    icon: Users,
    title: "Distributor & Dealer Appointment",
    tagline: "The right partners in the right markets",
    text: "A wrong distributor can hold a brand back for years. We identify, verify and appoint distributors and dealers who match your product category, target market and growth plans.",
    points: [
      "Market-wise distributor and dealer identification",
      "Background and capability verification before appointment",
      "Territory mapping so partners don't clash over areas",
      "Onboarding support and expectation setting",
    ],
  },
  {
    id: "domestic-expansion",
    icon: Truck,
    title: "Domestic Market Expansion",
    tagline: "From one city to a national footprint",
    text: "We take your brand from local markets to new cities across India with a proven, structured expansion route — so growth happens market by market, not by guesswork.",
    points: [
      "City and state expansion planning for your category",
      "On-ground sales network across key Indian markets",
      "Supply route and stock flow planning",
      "Local demand and competition assessment",
    ],
  },
  {
    id: "import-export",
    icon: Globe,
    title: "Import & Export Support",
    tagline: "Take your brand beyond borders",
    text: "With presence in 8 countries, we help Indian manufacturers reach international buyers and help global brands enter Indian markets — with the paperwork and partners handled properly.",
    points: [
      "Market access across 8 countries including UAE, USA, UK, Australia and Singapore",
      "Buyer and importer introductions in target countries",
      "Export documentation and compliance guidance",
      "Product positioning for international shelves",
    ],
  },
  {
    id: "funding-support",
    icon: HandCoins,
    title: "Business Funding Assistance",
    tagline: "Capacity to produce, capital to grow",
    text: "Growth needs machinery, working capital and expansion money. We connect eligible manufacturers with suitable funding solutions for machinery, plant & equipment and day-to-day operations.",
    points: [
      "Machinery and equipment finance for manufacturers",
      "Working capital support for raw material and inventory",
      "Structured process: assessment, documentation, approval",
      "For manufacturers only — subject to funder approval",
    ],
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Manufacturer & Retailer Partnerships",
    tagline: "Two sides, one growing network",
    text: "Whether you manufacture products or run a retail store, we build the bridge between you — manufacturers get market reach, retailers get quality products and a steady rent-based partnership.",
    points: [
      "Manufacturer partner registrations with market access",
      "Retail store partner program with approximate rent calculation",
      "Long-term partnership approach, not one-off deals",
      "End-to-end support from registration to first order",
    ],
  },
];

const howWeWork: { icon: LucideIcon; step: string; title: string; text: string }[] = [
  { icon: FileText, step: "01", title: "Share Your Requirement", text: "Tell us about your products, your markets and where you want to grow." },
  { icon: Search, step: "02", title: "Market & Partner Mapping", text: "We map the right stores, distributors, dealers or buyers for your category." },
  { icon: ClipboardCheck, step: "03", title: "Verification & Structuring", text: "Partners are verified, terms are structured and the route is finalized." },
  { icon: Rocket, step: "04", title: "Launch & Expansion", text: "Your products go on shelves — then we expand city by city, market by market." },
];

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Store, value: "2,000+", label: "Retail Stores" },
  { icon: MapPin, value: "23+", label: "Cities in India" },
  { icon: Globe, value: "8", label: "Countries" },
  { icon: PackageCheck, value: "End-to-End", label: "Support" },
];

const whoWeServe: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Boxes, title: "FMCG Manufacturers", text: "Food, personal care, home care, health & wellness and packaged snacks brands looking for real market reach." },
  { icon: LineChart, title: "Growing Brands", text: "Businesses with production capacity that need distribution, partners and shelf space to scale." },
  { icon: Store, title: "Retail Stores", text: "Retailers who want quality products and a stable, rent-based store partnership." },
  { icon: ShieldCheck, title: "Global Buyers", text: "International importers and buyers looking for reliable Indian manufacturing partners." },
];

function OurServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
          <img src={servicesHero} alt="FMCG distribution warehouse with stacked shelves of packaged products" className="absolute inset-0 size-full object-cover opacity-50" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
             <h1 className="text-5xl leading-tight sm:text-7xl">
               Our <span className="text-accent-foreground">Services</span>
            </h1>
            <p className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground">
              From Factory Gate To Global Shelf
            </p>
            <p className="mt-5 max-w-2xl font-display text-2xl font-bold">
              Everything your brand needs to reach real markets — in India and abroad.
            </p>
            <p className="mt-3 max-w-xl text-ink-foreground/75">
              Rishishwar Industry is a business management company for FMCG manufacturers. Each service below is a complete, working route from your production floor to a customer's hands.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="h-12">
                <a href="#services">Explore Our Services <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground">
                <Link to="/contact">Talk To Our Team</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col gap-1.5 border-l-2 border-primary/60 pl-4">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <span className="font-display text-2xl font-bold">{value}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-foreground/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services detail */}
        <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">
              What We <span className="text-primary">Do For You</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Six services, one goal: getting your products into customers' hands — profitably and at scale.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ id, icon: Icon, title, tagline, text, points }) => (
              <article key={id} className="card-lift flex flex-col rounded-lg border border-border bg-card p-6 sm:p-7">
                <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="border-t border-border bg-ink px-4 py-14 text-ink-foreground sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-4xl">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="mt-3 max-w-2xl text-ink-foreground/70">
              A clear, structured route from your first enquiry to products on shelves.
            </p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map(({ icon: Icon, step, title, text }) => (
                <li key={step} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold text-primary">{step}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/70">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who we serve */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">
              Who We <span className="text-primary">Serve</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our services are built for businesses at different stages of growth — and for the stores that sell their products.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-lift rounded-lg border border-border bg-card p-6 text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service CTAs */}
        <section className="border-t border-border bg-accent/40 px-4 py-14 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
             <div className="rounded-sm border border-border bg-card p-7">
              <Landmark className="size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">Need Funding?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Machinery, working capital and expansion finance for eligible manufacturers.</p>
              <Button asChild variant="outline" className="mt-5">
                <Link to="/fund-your-business">Fund Your Business <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
             <div className="rounded-sm border border-border bg-card p-7">
              <Store className="size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">Have A Store?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Join 2,000+ retail stores as a retail partner and calculate your approximate rent.</p>
              <Button asChild variant="outline" className="mt-5">
                <Link to="/retailer-partner">Retailer Partner <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
             <div className="rounded-sm border border-border bg-card p-7">
              <Handshake className="size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold">Ready To Partner?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Register as a manufacturer or retail store partner and start the conversation.</p>
              <Button asChild className="mt-5">
                <Link to="/partner-with-us">Partner With Us <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-ink px-4 py-14 text-center text-ink-foreground sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let's Put Your Products <span className="text-primary">On Every Shelf</span>
            </h2>
            <p className="mt-4 text-ink-foreground/75">
              Tell us about your business and we'll show you exactly which services fit your growth plan.
            </p>
            <Button asChild size="lg" className="mt-7 h-12">
              <Link to="/contact">Contact Us Today <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
