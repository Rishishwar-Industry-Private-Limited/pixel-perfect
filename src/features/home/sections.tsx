import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, Globe, Handshake, MapPin, Store, Truck, Users } from "lucide-react";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import handshakeImage from "@/assets/cta-handshake.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

import { services, steps } from "./content";

export function HeroSection() {
  return (
    <section className="dark-surface relative h-[calc(100svh-120px)] min-h-[720px] max-h-[980px] overflow-hidden border-b border-border">
      <img src={heroBgAsset.url} alt="Rishishwar Industry representative inside an FMCG retail store" className="absolute inset-0 size-full object-cover object-[62%_center]" />
      <div className="hero-overlay-mobile absolute inset-0 md:hidden" /><div className="hero-overlay absolute inset-0 hidden md:block" />
      <div className="page-shell relative flex h-full items-center py-20">
        <div className="max-w-3xl">
          <p className="royal-label">From Manufacturer to Market</p>
          <h1 className="mt-7 text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">We Build Markets.<span className="mt-2 block text-accent-foreground">You Grow Your Sales.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-ink-foreground/65 sm:text-lg">Rishishwar Industry connects FMCG manufacturers with retail networks, distributors and international opportunities.</p>
          <div className="mt-9 flex flex-wrap gap-4"><Button asChild size="lg"><Link to="/manufacturers">For Manufacturers <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-ink-foreground/30 text-ink-foreground"><Link to="/our-services">Explore Services</Link></Button></div>
        </div>
        <dl className="absolute bottom-8 left-4 right-4 grid grid-cols-2 border border-border bg-ink/75 backdrop-blur-md sm:left-auto sm:right-6 sm:w-[520px] sm:grid-cols-4 lg:right-8">
          {[["2,000+","Retail Stores"],["23+","Indian Cities"],["8","Countries"],["End-to-End","Support"]].map(([v,l]) => <div key={l} className="border-r border-border p-4 last:border-r-0"><dt className="font-display text-xl text-accent-foreground">{v}</dt><dd className="mt-1 text-[10px] uppercase tracking-wider text-ink-foreground/50">{l}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="cinematic-section bg-foreground text-primary-foreground"><div className="page-shell">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><p className="royal-label">Strategic Capabilities</p><h2 className="mt-6 max-w-3xl text-4xl sm:text-6xl">Complete market access for ambitious FMCG brands.</h2></div><p className="max-w-lg border-l border-primary pl-6 leading-7 opacity-65">From the first market plan to shelf placement and global reach, every service follows one clear growth route.</p></div>
      <div className="mt-16 grid border-l border-t border-primary-foreground/15 md:grid-cols-2 lg:grid-cols-4">{services.map(({icon:Icon,title,text,to},i)=><Link key={title} to={to} className="group border-b border-r border-primary-foreground/15 p-8 transition-colors hover:bg-primary hover:text-primary-foreground"><span className="text-xs text-primary group-hover:text-primary-foreground/70">0{i+1}</span><Icon className="mt-10 size-8 text-primary group-hover:text-primary-foreground"/><h3 className="mt-6 text-xl">{title}</h3><p className="mt-3 text-sm leading-6 opacity-60">{text}</p><ArrowRight className="mt-8 size-5 transition-transform group-hover:translate-x-2"/></Link>)}</div>
    </div></section>
  );
}

export function ProcessSection() {
  return (
    <section className="cinematic-section"><div className="page-shell"><div className="text-center"><p className="royal-label justify-center">The Rishishwar Standard</p><h2 className="mx-auto mt-6 max-w-3xl text-4xl sm:text-6xl">A disciplined route from factory to market.</h2></div><ol className="mt-16">{steps.map(({icon:Icon,title,text},i)=><li key={title} className="group grid gap-5 border-t border-border py-9 sm:grid-cols-[100px_1fr_1fr] sm:items-center"><span className="font-display text-5xl text-primary/25 transition-colors group-hover:text-primary">0{i+1}</span><div className="flex items-center gap-4"><Icon className="size-7 text-primary"/><h3 className="text-2xl">{title}</h3></div><p className="leading-7 text-muted-foreground">{text}</p></li>)}</ol></div></section>
  );
}

export function CtaSection() {
  return (
    <section className="dark-surface relative min-h-[520px] overflow-hidden"><img src={handshakeImage} alt="Long-term business partnership" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-ink/75"/><div className="page-shell relative flex min-h-[520px] items-center"><div className="max-w-2xl"><p className="royal-label">Built For Long-Term Growth</p><h2 className="mt-6 text-4xl sm:text-6xl">Your Growth.<span className="block text-accent-foreground">Our Commitment.</span></h2><p className="mt-6 max-w-lg text-lg leading-8 text-ink-foreground/65">Manufacturer, retailer or growth partner — let's build a stronger route to market together.</p><Button asChild size="lg" className="mt-9"><Link to="/partner-with-us">Partner With Us <ArrowRight /></Link></Button></div></div></section>
  );
}
