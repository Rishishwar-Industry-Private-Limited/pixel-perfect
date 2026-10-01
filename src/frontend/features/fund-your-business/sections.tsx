import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Cog,
  HandCoins,
  TrendingUp,
  Handshake,
  Users,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Settings,
  FileCheck2,
  IndianRupee,
  Lock,
  Factory,
  Package,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/frontend/components/site-chrome";
import { Button } from "@/frontend/components/ui/button";
import locations from "@/frontend/data/locations.json";
import fundHero from "@/frontend/assets/fund-hero.jpg";
import fundMachinery from "@/frontend/assets/fund-machinery.jpg";
import fundWorkingCapital from "@/frontend/assets/fund-working-capital.jpg";
import fundExpansion from "@/frontend/assets/fund-expansion.jpg";
import fundWelder from "@/frontend/assets/fund-welder-clean.jpg";
import fundIndia from "@/frontend/assets/fund-india.jpg";
import { openEmail } from "@/frontend/content/company";

import { futurePoints, heroStrip, fundingNeeds, whoCanApply, processSteps, impactTiles, categoryOptions, turnoverOptions, amountOptions, loanOptions, inputCls, allStates } from "./content";
import { FundingForm } from "@/frontend/components/forms/funding-form";

export function HeroSection() {
  return (
    <>
        <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
          <img src={fundHero} alt="Manufacturer at a modern CNC factory" className="absolute inset-0 size-full object-cover opacity-50" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
               <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                Fund Your <span className="text-primary">Business</span>
              </h1>
              <p className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground">
                For Manufacturers Only
              </p>
              <p className="mt-5 font-display text-2xl font-bold">Build Capacity. Fund Growth. Scale Your Manufacturing.</p>
              <p className="mt-3 max-w-xl text-ink-foreground/75">
                Rishishwar Industry helps eligible manufacturers explore funding solutions for machinery, plant &amp; equipment and working capital.
              </p>
               <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                <Button asChild size="lg" className="h-12">
                  <a href="#apply">Apply for Business Funding <ArrowRight aria-hidden="true" /></a>
                </Button>
                 <Button asChild size="lg" variant="outline" className="h-12 border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground">
                   <a href="#eligibility">Who Can Apply</a>
                </Button>
              </div>
            </div>
           <div className="rounded-sm border border-ink-foreground/15 bg-card/90 p-6 shadow-2xl backdrop-blur sm:p-8">
              <h2 className="font-display text-2xl font-bold">From Manufacturing <span className="text-primary">To A Bigger Future</span></h2>
              <ul className="mt-5 space-y-3.5">
                {futurePoints.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckCircle2 className="size-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative border-t border-ink-foreground/10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
              {heroStrip.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2.5 text-center">
                  <Icon className="size-7 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}

export function FundingNeedsSection() {
  return (
    <>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {fundingNeeds.map(({ img, icon: Icon, title, text }) => (
              <article key={title} className="card-lift overflow-hidden rounded-lg border border-border bg-card">
                <div className="relative">
                  <img src={img} alt={title} loading="lazy" className="h-48 w-full object-cover" width={1024} height={1024} />
                  <span className="absolute -bottom-6 left-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6 pt-9">
                  <h2 className="text-xl">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
    </>
  );
}

export function WhoCanApplyFormSection() {
  return (
    <>
         <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 sm:px-6 sm:pb-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
           <div id="eligibility" className="scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl">
              Who Can <span className="text-primary">Apply?</span>
            </h2>
            <p className="mt-3 inline-block rounded-md bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">Only Manufacturers</p>
            <ul className="mt-6 space-y-3.5">
              {whoCanApply.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <img src={fundWelder} alt="Welding work at a manufacturing unit" loading="lazy" className="mt-8 h-64 w-full rounded-lg border border-border object-cover sm:h-72" width={1280} height={1024} />
          </div>
           <div id="apply" className="scroll-mt-24 rounded-sm border border-border bg-card p-5 sm:p-8">
            <h2 className="flex items-start gap-3 text-2xl">
              <FileText className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              Tell Us About Your Business
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Apni details bhariye — hamari team aapse suitable funding options ke liye contact karegi.</p>
            <div className="mt-6">
              <FundingForm />
            </div>
          </div>
        </section>
    </>
  );
}

export function FundingProcessSection() {
  return (
    <>
        <section className="border-t border-border bg-ink px-4 py-14 text-ink-foreground sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-4xl">
              Our Funding <span className="text-primary">Process</span>
            </h2>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {processSteps.map(({ icon: Icon, step, title, text }) => (
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
    </>
  );
}

export function AcrossIndiaSection() {
  return (
    <>
        <section className="relative overflow-hidden border-t border-border bg-ink text-ink-foreground">
          <img src={fundIndia} alt="FMCG bottling plant in India" loading="lazy" className="absolute inset-0 size-full object-cover opacity-35" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Powering Manufacturers <span className="text-primary">Across India</span>
              </h2>
              <p className="mt-4 max-w-lg text-ink-foreground/75">
                From local manufacturers to growing FMCG brands, we support businesses with the right funding solutions to build stronger, larger and more competitive operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {impactTiles.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 rounded-lg border border-ink-foreground/15 bg-card/80 px-4 py-8 text-center backdrop-blur">
                  <Icon className="size-8 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}

export function DisclaimerSection() {
  return (
    <>
        <section className="border-t border-border bg-ink px-4 py-6 text-center sm:px-6">
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-ink-foreground/60">
            Funding is subject to eligibility, due diligence, documentation, credit/business assessment and approval by the applicable funding partner. Submission of an application does not guarantee funding or approval.
          </p>
        </section>
    </>
  );
}
