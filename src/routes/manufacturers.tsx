import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import productionImage from "@/assets/manufacturer-floor.jpg";
import productsImage from "@/assets/hero-products.jpg";
import handshakeImage from "@/assets/cta-handshake.jpg";
import storeAsset from "@/assets/retailer-store.png.asset.json";
import shipAsset from "@/assets/gp-ship.png.asset.json";

export const Route = createFileRoute("/manufacturers")({
  head: () => ({ meta: [
    { title: "For Manufacturers — FMCG Market Access | Rishishwar Industry" },
    { name: "description", content: "Retail shelf space, distributor connections, new Indian cities and export routes for FMCG manufacturers — with Rishishwar Industry, Gwalior." },
    { property: "og:title", content: "For Manufacturers — Rishishwar Industry" },
    { property: "og:description", content: "Take your FMCG products from the production floor to 2,000+ retail stores and 8 countries." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ManufacturersPage,
});

const stats = [
  { value: "2,000+", label: "Retail stores" },
  { value: "23+", label: "Indian cities" },
  { value: "8", label: "Countries" },
];

const channels = [
  { image: storeAsset.url, title: "Shelf space in retail stores", body: "Your products placed in kirana, general and modern-trade stores across our network — with the store owners we already work with every week.", to: "/our-services" as const },
  { image: productsImage, title: "Distributors who fit your category", body: "We introduce you to distributors that already move products like yours, in the towns you want to sell in. No cold lists.", to: "/our-services" as const },
  { image: shipAsset.url, title: "Export to international buyers", body: "For brands ready to go abroad, we open conversations with buyers in the UAE, UK, USA, Canada, Singapore, Australia and Europe.", to: "/global-presence" as const },
];

const bring = [
  "Product list with MRP and trade margins",
  "Monthly production capacity",
  "FSSAI / BIS or other licences you hold",
  "The cities or countries you want to reach",
];

const steps = [
  { title: "A first call", body: "We learn about your products, pricing and capacity. Usually 30 minutes." },
  { title: "A market plan", body: "We suggest which stores, distributors or countries make sense — and which don't." },
  { title: "Launch and follow-up", body: "Products reach the shelf, and we stay in touch on sell-through and reorders." },
];

function ManufacturersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="dark-surface relative isolate flex min-h-[650px] items-end overflow-hidden border-b border-border sm:min-h-[700px]">
          <img src={productionImage} alt="Quality check on a bottling line" width={1600} height={900} className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]" />
          <div className="hero-overlay-mobile absolute inset-0 -z-10 md:hidden" />
          <div className="hero-overlay absolute inset-0 -z-10 hidden md:block" />
          <div className="page-shell w-full pb-14 pt-28">
            <p className="royal-label">For FMCG manufacturers</p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">You make the product. <span className="text-accent-foreground">We get it sold.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-foreground/80 sm:text-lg">Rishishwar Industry places FMCG brands in retail stores, connects them with distributors, and opens export routes — from our base in Gwalior.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/partner-with-us" search={{ partner: "manufacturer" }}>Register as a manufacturer <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-ink-foreground/40 text-ink-foreground"><a href="tel:+917566072349"><Phone aria-hidden="true" /> +91 75660 72349</a></Button>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-3 border-t border-ink-foreground/20 pt-6">
              {stats.map((s) => (
                <div key={s.label}><dt className="text-xs uppercase tracking-[0.2em] text-ink-foreground/60">{s.label}</dt><dd className="mt-1 font-display text-3xl font-bold sm:text-4xl">{s.value}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        <section className="cinematic-section">
          <div className="page-shell">
            <p className="royal-label">What we do for you</p>
            <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl">Three ways your product reaches more buyers.</h2>
            <div className="mt-14 space-y-16 sm:space-y-20">
              {channels.map((c, i) => (
                <article key={c.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <img src={c.image} alt="" loading="lazy" className="aspect-[16/10] w-full border border-border object-cover" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{c.title}</h3>
                    <p className="mt-4 max-w-lg leading-8 text-muted-foreground">{c.body}</p>
                    <Link to={c.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Learn more <ArrowRight className="size-4" aria-hidden="true" /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cinematic-section border-y border-border bg-secondary">
          <div className="page-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="royal-label">How it works</p>
              <h2 className="mt-6 text-4xl sm:text-5xl">From first call to first reorder.</h2>
              <ol className="mt-10 space-y-8">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary font-display text-sm font-bold text-primary">{i + 1}</span>
                    <div><h3 className="text-lg">{s.title}</h3><p className="mt-1 leading-7 text-muted-foreground">{s.body}</p></div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-border bg-background p-8 sm:p-10">
              <h3 className="text-xl">Keep these ready for the first call</h3>
              <ul className="mt-6 space-y-4">
                {bring.map((b) => (
                  <li key={b} className="flex gap-3 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />{b}</li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">Don't have everything yet? That's fine — call us anyway and we'll work it out together.</p>
            </div>
          </div>
        </section>

        <section className="dark-surface relative isolate overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
          <img src={handshakeImage} alt="" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="page-shell"><div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl">Tell us what you make.</h2>
            <p className="mt-6 max-w-xl leading-8 text-ink-foreground/80">Fill in a short form and our team will call you back within two working days.</p>
            <Button asChild size="lg" className="mt-9"><Link to="/partner-with-us" search={{ partner: "manufacturer" }}>Manufacturer registration <ArrowRight aria-hidden="true" /></Link></Button>
          </div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
