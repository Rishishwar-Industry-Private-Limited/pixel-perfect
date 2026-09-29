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

import { futurePoints, heroStrip, fundingNeeds, whoCanApply, processSteps, impactTiles, categoryOptions, turnoverOptions, amountOptions, loanOptions, inputCls, allStates } from "@/features/fund-your-business/content";

function Field({ label, optional, children }: { label: string; optional?: boolean; children: React.ReactNode }) {
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

