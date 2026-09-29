import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Phone, Mail, MapPin, Send } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Us — Rishishwar Industry Pvt. Ltd. | Let's Build Your Market Together",
      },
      {
        name: "description",
        content:
          "Partner with Rishishwar Industry for FMCG market access. Call +91 75660 72349 or write to info@rishishwarindustry.com — Gwalior, Madhya Pradesh, India.",
      },
      {
        property: "og:title",
        content: "Contact Rishishwar Industry — Partner With Us",
      },
      {
        property: "og:description",
        content:
          "Ready to grow your FMCG brand in India and beyond? Talk to our team today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 75660 72349",
    href: "tel:+917566072349",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@rishishwarindustry.com",
    href: "mailto:info@rishishwarindustry.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Gwalior, Madhya Pradesh, India",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="cinematic-section bg-ink text-ink-foreground">
          <div className="page-shell">
            <p className="royal-label">
              Contact Us
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">
              Let's Build Your{" "}
              <span className="text-primary">Market Together</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-foreground/75">
              Whether you want to grow in India or go global, our team is
              ready to help your FMCG brand reach more stores, more cities and
              more countries.
            </p>
          </div>
        </section>

        <section className="page-shell py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              {contactCards.map((c) => {
                const inner = (
                  <>
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <c.icon className="size-6 text-primary" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h2 className="text-lg">{c.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.value}
                      </p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.title}
                    href={c.href}
                    className="card-lift flex items-center gap-5 rounded-sm border bg-card p-6"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.title}
                    className="flex items-center gap-5 rounded-sm border bg-card p-6"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <form
              className="rounded-sm border bg-card p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Hello Rishishwar Industry, I would like to discuss a partnership.\n\nName: ${String(data.get("name") ?? "")}\nCompany: ${String(
                    data.get("company") ?? ""
                  )}\nPhone: ${String(data.get("phone") ?? "")}\n\n${String(
                    data.get("message") ?? ""
                  )}`;
                openWhatsApp(body);
                setSent(true);
              }}
            >
              <h2 className="text-2xl">Send Us a Message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium">Your Name</span>
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Company</span>
                  <input
                    name="company"
                    className="mt-1.5 w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Company name"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+ ]{10,15}"
                    maxLength={15}
                    className="mt-1.5 w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="+91 ..."
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    maxLength={1000}
                    className="mt-1.5 w-full rounded-sm border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Tell us about your products and the markets you want to reach."
                  />
                </label>
              </div>
              <Button type="submit" size="lg" className="mt-6">Continue on WhatsApp <Send /></Button>
              {sent && <p className="mt-4 flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="size-4" /> WhatsApp khul gaya hai — message send karke enquiry complete karein.</p>}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
