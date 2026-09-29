import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { openEmail } from "@/content/company";

export const Route = createFileRoute("/register-your-store")({
  head: () => ({
    meta: [
      { title: "Register Your Store — Rishishwar Industry Retailer Partner" },
      { name: "description", content: "Register your shop as a Rishishwar Industry retailer partner. Our team will contact you for store inspection and commercial discussion." },
      { property: "og:title", content: "Register Your Store — Rishishwar Industry" },
      { property: "og:description", content: "Join the Rishishwar Industry retailer partner network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterPage,
});

const fields = [["name", "Owner Name", "text"], ["phone", "Mobile Number", "tel"], ["store", "Store Name", "text"], ["city", "City / Town, State", "text"], ["area", "Store Area (sq.ft.)", "number"]] as const;

function RegisterPage() {
  const [v, setV] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = fields.map(([k, l]) => `${l}: ${v[k] ?? ""}`).join("\n");
    openEmail(`Hello Rishishwar Industry, I want to register my store.\n\n${body}`, "Store Registration");
    setDone(true);
  };
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
       <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
         <p className="royal-label">Retailer Partnership</p>
         <h1 className="mt-6 text-4xl sm:text-6xl">Register Your <span className="text-accent-foreground">Store</span></h1>
        <p className="mt-3 text-muted-foreground">Details bhejiye — hamari team store inspection aur commercial discussion ke liye aapse contact karegi.</p>
         <form onSubmit={submit} className="mt-10 space-y-4 rounded-sm border border-border bg-card p-5 sm:p-8">
          {fields.map(([k, l, t]) => (
            <label key={k} className="block text-sm font-semibold">{l}
               <input required type={t} min={t === "number" ? 1 : undefined} maxLength={t === "tel" ? 15 : 150} pattern={t === "tel" ? "[0-9+ ]{10,15}" : undefined} value={v[k] ?? ""} onChange={e => setV({ ...v, [k]: e.target.value })} className="mt-2 h-12 w-full rounded-sm border border-input bg-background px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </label>
          ))}
          <Button type="submit" size="lg" className="h-12 w-full">Submit Registration <Send aria-hidden="true" /></Button>
           {done && <p className="flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" /> Email app khul gaya hai — message send karke registration complete karein.</p>}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
