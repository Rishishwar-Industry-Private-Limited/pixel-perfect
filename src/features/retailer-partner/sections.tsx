import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeIndianRupee, Boxes, Store, Truck, Users } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { IncomeCalculator } from "@/components/income-calculator";
import storeImage from "@/assets/retailer-store.png.asset.json";



export function HeroSection() {
  return (
    <>
        <section className="border-b border-border bg-ink py-6 text-ink-foreground">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6">
            {[
              { icon: Store, title: "Approx. Monthly Rent", text: "Location aur area ke hisab se" },
              { icon: Boxes, title: "Product Supply", text: "Quality products, time par supply" },
              { icon: Truck, title: "Brand Support", text: "Product supply aur market support" },

            ].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-start gap-3 sm:border-r sm:border-ink-foreground/15 sm:last:border-r-0"><Icon className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" /><div><h2 className="text-base">{title}</h2><p className="mt-0.5 text-sm text-ink-foreground/65">{text}</p></div></div>)}
          </div>
        </section>
    </>
  );
}

export function HighlightsSection() {
  return (
    <>
        <section id="calculator" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase text-primary">Estimated / Indicative</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Retailer Partner <span className="text-primary">Rent Calculator</span></h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Apni shop ki location aur area daaliye aur approximate monthly rent dekhiye. Ye koi offer ya guarantee nahi hai.</p>

          </div>
          <IncomeCalculator />
        </section>
    </>
  );
}

export function CalculatorSection() {
  return (
    <>
        <section className="bg-ink px-4 py-12 text-ink-foreground sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><h2 className="text-2xl sm:text-3xl">Grow Together.</h2><p className="mt-2 text-ink-foreground/70">Apni dukaan ko Rishishwar Industry ke saath jodiye.</p></div><Button asChild size="lg"><Link to="/register-your-store">Register Your Store With Us <ArrowRight aria-hidden="true" /></Link></Button></div>
        </section>
    </>
  );
}
