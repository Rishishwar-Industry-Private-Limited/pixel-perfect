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
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import locations from "@/data/locations.json";
import fundHero from "@/assets/fund-hero.jpg";
import fundMachinery from "@/assets/fund-machinery.jpg";
import fundWorkingCapital from "@/assets/fund-working-capital.jpg";
import fundExpansion from "@/assets/fund-expansion.jpg";
import fundWelder from "@/assets/fund-welder-clean.jpg";
import fundIndia from "@/assets/fund-india.jpg";
import { openEmail } from "@/content/company";

import { futurePoints, heroStrip, fundingNeeds, whoCanApply, processSteps, impactTiles, categoryOptions, turnoverOptions, amountOptions, loanOptions, inputCls, allStates } from "./content";

export function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-semibold">
      {label} {optional ? <span className="font-normal text-muted-foreground">(optional)</span> : <span className="text-primary">*</span>}
      {children}
    </label>
  );
}

export function FundingForm() {
  const [v, setV] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: e.target.value });

  const cities = useMemo(
    () => [...new Set((locations as [string, string, string, ...unknown[]][]).filter((r) => r[0] === v["state"]).map((r) => r[2]))].sort(),
    [v["state"]],
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Business / Company Name: ${v["company"] ?? ""}`,
      `Founder / Promoter Name: ${v["founder"] ?? ""}`,
      `Mobile Number: ${v["phone"] ?? ""}`,
      `Email ID: ${v["email"] ?? ""}`,
      `State: ${v["state"] ?? ""}`,
      `City: ${v["city"] ?? ""}`,
      `Manufacturing Category: ${v["category"] ?? ""}`,
      `Years in Business: ${v["years"] ?? ""}`,
      `Annual Turnover: ${v["turnover"] ?? ""}`,
      `Required Funding Amount: ${v["amount"] ?? ""}`,
      `Funding Purpose: ${v["purpose"] ?? ""}`,
      `Existing Loans / Funding: ${v["loans"] ?? ""}`,
      `GST / Registration Details: ${v["gst"] ?? ""}`,
      `Message: ${v["message"] ?? ""}`,
    ].join("\n");
    openEmail(`Hello Rishishwar Industry, Business Funding Requirement — ${v["company"] || v["founder"] || "New Enquiry"}\n\n${body}`, "Business Funding Requirement");
    setDone(true);
  };

  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <Field label="Business / Company Name">
        <input required maxLength={150} value={v["company"] ?? ""} onChange={set("company")} placeholder="Enter company name" className={`${inputCls} h-12`} />
      </Field>
      <Field label="Founder / Promoter Name">
        <input required maxLength={150} value={v["founder"] ?? ""} onChange={set("founder")} placeholder="Enter founder name" className={`${inputCls} h-12`} />
      </Field>
      <Field label="Mobile Number">
        <input required type="tel" maxLength={15} pattern="[0-9+ ]{10,15}" value={v["phone"] ?? ""} onChange={set("phone")} placeholder="Enter mobile number" className={`${inputCls} h-12`} />
      </Field>
      <Field label="Email ID">
        <input required type="email" maxLength={150} value={v["email"] ?? ""} onChange={set("email")} placeholder="Enter email address" className={`${inputCls} h-12`} />
      </Field>
      <Field label="State">
        <select required value={v["state"] ?? ""} onChange={set("state")} className={`${inputCls} h-12`}>
          <option value="">Select state</option>
          {allStates.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="City">
        <select required value={v["city"] ?? ""} onChange={set("city")} className={`${inputCls} h-12`} disabled={!v["state"]}>
          <option value="">Select city</option>
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Manufacturing Category">
        <select required value={v["category"] ?? ""} onChange={set("category")} className={`${inputCls} h-12`}>
          <option value="">Select category</option>
          {categoryOptions.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Years in Business">
        <select required value={v["years"] ?? ""} onChange={set("years")} className={`${inputCls} h-12`}>
          <option value="">Select years</option>
          {["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "More than 10 years"].map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      </Field>
      <Field label="Annual Turnover (₹)">
        <select required value={v["turnover"] ?? ""} onChange={set("turnover")} className={`${inputCls} h-12`}>
          <option value="">Select turnover range</option>
          {turnoverOptions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Required Funding Amount (₹)">
        <select required value={v["amount"] ?? ""} onChange={set("amount")} className={`${inputCls} h-12`}>
          <option value="">Select amount</option>
          {amountOptions.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </Field>
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-semibold">Funding Purpose <span className="text-primary">*</span></legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {["Machinery", "Working Capital", "Machinery + Working Capital"].map((p) => (
            <label
              key={p}
              className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                v["purpose"] === p ? "border-primary bg-accent text-primary" : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              <input
                type="radio"
                name="purpose"
                value={p}
                checked={v["purpose"] === p}
                onChange={set("purpose")}
                className="accent-primary"
                required
              />
              {p}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Existing Loans / Funding">
        <select required value={v["loans"] ?? ""} onChange={set("loans")} className={`${inputCls} h-12`}>
          <option value="">Select option</option>
          {loanOptions.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </Field>
      <Field label="GST / Registration Details" optional>
        <input maxLength={150} value={v["gst"] ?? ""} onChange={set("gst")} placeholder="Enter GST number / registration details" className={`${inputCls} h-12`} />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Message" optional>
          <textarea maxLength={1000} rows={4} value={v["message"] ?? ""} onChange={set("message")} placeholder="Tell us more about your business and requirement..." className={`${inputCls} py-3`} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full sm:w-auto sm:px-10">
          Submit Funding Requirement <ArrowRight aria-hidden="true" />
        </Button>
        {done && (
          <p className="mt-3 flex items-center gap-2 text-sm text-primary">
             <CheckCircle2 className="size-4" /> Email app khul gaya hai — message send karke enquiry complete karein.
          </p>
        )}
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="size-3.5 shrink-0 text-primary" /> Aapki jaankari surakshit hai aur confidential rakhi jayegi.
        </p>
      </div>
    </form>
  );
}

export function HeroSection() {
  return (
    <>
        <section className="relative overflow-hidden border-b border-border bg-ink text-ink-foreground">
          <img src={fundHero} alt="Manufacturer at a modern CNC factory" className="absolute inset-0 size-full object-cover opacity-50" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                Fund Your <span className="text-primary">Business</span>
              </h1>
              <p className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground">
                For Manufacturers Only
              </p>
              <p className="mt-5 font-display text-2xl font-bold">Build Capacity. Fund Growth. Scale Your Manufacturing.</p>
              <p className="mt-3 max-w-xl text-ink-foreground/75">
                Rishishwar Industry helps eligible manufacturers explore funding solutions for machinery, plant &amp; equipment and working capital.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
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
