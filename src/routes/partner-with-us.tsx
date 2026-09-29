import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Factory, Send, Store, CheckCircle2 } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/site-content";

export const Route = createFileRoute("/partner-with-us")({
  validateSearch: (search: Record<string, unknown>) => ({ partner: search.partner === "manufacturer" ? "manufacturer" : undefined }),
  head: () => ({
    meta: [
      { title: "Partner With Us — Retail Store & Manufacturer Registration | Rishishwar Industry" },
      { name: "description", content: "Register as a retail store partner or as an FMCG manufacturer with Rishishwar Industry. Our team will contact you for the next steps." },
      { property: "og:title", content: "Partner With Us — Rishishwar Industry" },
      { property: "og:description", content: "Retail store and manufacturer registration forms for Rishishwar Industry partnerships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnerPage,
});

type Field = { k: string; l: string; t: "text" | "tel" | "email" | "number" | "select" | "textarea"; opts?: string[]; optional?: boolean };

const retailFields: Field[] = [
  { k: "owner", l: "Owner Name", t: "text" },
  { k: "phone", l: "Mobile Number", t: "tel" },
  { k: "email", l: "Email", t: "email", optional: true },
  { k: "store", l: "Store Name", t: "text" },
  { k: "type", l: "Store Type", t: "select", opts: ["Kirana / General Store", "Supermarket", "Medical Store", "Cosmetic Store", "Other"] },
  { k: "state", l: "State", t: "text" },
  { k: "city", l: "District / City / Town", t: "text" },
  { k: "address", l: "Full Store Address", t: "textarea" },
  { k: "area", l: "Store Area (sq.ft.)", t: "number" },
  { k: "gst", l: "GST Number", t: "text", optional: true },
];

const mfgFields: Field[] = [
  { k: "company", l: "Company Name", t: "text" },
  { k: "contact", l: "Contact Person", t: "text" },
  { k: "designation", l: "Designation", t: "text", optional: true },
  { k: "phone", l: "Mobile Number", t: "tel" },
  { k: "email", l: "Business Email", t: "email" },
  { k: "category", l: "Product Category", t: "select", opts: ["Food & Beverages", "Personal Care", "Home Care", "Health & Wellness", "Packaged Snacks", "Other"] },
  { k: "brands", l: "Brand Names", t: "text" },
  { k: "location", l: "Factory Location (City, State)", t: "text" },
  { k: "markets", l: "Target Markets", t: "select", opts: ["Domestic (India)", "International", "Both"] },
  { k: "gst", l: "GST Number", t: "text", optional: true },
  { k: "message", l: "About Your Products / Requirement", t: "textarea", optional: true },
];

const inputCls = "mt-2 w-full rounded-md border border-input bg-background px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary";

function RegForm({ fields, subject }: { fields: Field[]; subject: string }) {
  const [v, setV] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = fields.map((f) => `${f.l}: ${(v[f.k] ?? "").trim()}`).join("\n");
    openWhatsApp(`Hello Rishishwar Industry, ${subject}\n\n${body}`);
    setDone(true);
  };
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => {
        const common = { required: !f.optional, value: v[f.k] ?? "", onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setV({ ...v, [f.k]: e.target.value }) };
        return (
          <label key={f.k} className={`block text-sm font-semibold ${f.t === "textarea" ? "sm:col-span-2" : ""}`}>
            {f.l} {f.optional ? <span className="font-normal text-muted-foreground">(optional)</span> : <span className="text-primary">*</span>}
            {f.t === "select" ? (
              <select {...common} className={`${inputCls} h-12`}>
                <option value="">Select…</option>
                {f.opts!.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.t === "textarea" ? (
              <textarea {...common} maxLength={1000} rows={3} className={`${inputCls} py-3`} />
            ) : (
              <input {...common} type={f.t} maxLength={f.t === "tel" ? 15 : 150} pattern={f.t === "tel" ? "[0-9+ ]{10,15}" : undefined} min={f.t === "number" ? 1 : undefined} className={`${inputCls} h-12`} />
            )}
          </label>
        );
      })}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full">Submit Registration <Send aria-hidden="true" /></Button>
         {done && <p className="mt-3 flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" /> WhatsApp khul gaya hai — message send karke registration complete karein.</p>}
      </div>
    </form>
  );
}

function PartnerPage() {
  const { partner } = Route.useSearch();
  const [tab, setTab] = useState<"retail" | "mfg">(partner === "manufacturer" ? "mfg" : "retail");
  const tabs = [
    { id: "retail" as const, icon: Store, title: "Retail Store Partner", text: "Apni dukaan ko hamare network se jodiye" },
    { id: "mfg" as const, icon: Factory, title: "Manufacturer Partner", text: "Apne products ko naye markets tak pahunchaiye" },
  ];
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
         <section className="cinematic-section border-b border-border bg-ink px-4 text-ink-foreground sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
             <p className="royal-label justify-center">Partnership Registration</p>
             <h1 className="mt-6 text-5xl sm:text-7xl">Partner <span className="text-accent-foreground">With Us</span></h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-foreground/75">Retail store ho ya FMCG manufacturer — neeche apni category chuniye, form bhariye, aur hamari team aapse agle steps ke liye contact karegi.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div role="tablist" className="grid gap-4 sm:grid-cols-2">
            {tabs.map(({ id, icon: Icon, title, text }) => (
               <Button key={id} id={`${id}-tab`} role="tab" aria-controls="partner-panel" aria-selected={tab === id} onClick={() => setTab(id)} variant="outline"
                 className={`card-lift h-auto justify-start whitespace-normal rounded-sm border p-5 text-left normal-case tracking-normal ${tab === id ? "border-primary bg-accent text-foreground" : "border-border bg-card text-foreground"}`}>
                <Icon className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
                <div><h2 className="text-lg">{title}</h2><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>
               </Button>
            ))}
          </div>
           <div id="partner-panel" role="tabpanel" aria-labelledby={`${tab}-tab`} className="mt-8 rounded-sm border border-border bg-card p-5 sm:p-8">
            <h2 className="mb-6 text-2xl">{tab === "retail" ? "Retail Store Registration Form" : "Manufacturer Registration Form"}</h2>
            {tab === "retail"
              ? <RegForm key="r" fields={retailFields} subject="Retail Store Partner Registration" />
              : <RegForm key="m" fields={mfgFields} subject="Manufacturer Partner Registration" />}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
