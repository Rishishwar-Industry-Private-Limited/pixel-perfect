import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe2, Mail, Menu, Moon, Sun, X } from "lucide-react";
import logoAsset from "@/frontend/assets/rishishwar-logo.webp";
import { Button } from "@/frontend/components/ui/button";
import { COMPANY } from "@/frontend/content/company";
import { countries } from "@/frontend/features/global-presence/content";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/our-services", label: "Our Services" },
  { to: "/global-presence", label: "Global Presence" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const light = localStorage.getItem("rishishwar-theme") === "light";
    document.documentElement.classList.toggle("light", light);
    setIsLight(light);
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("rishishwar-theme", next ? "light" : "dark");
    setIsLight(next);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95 text-ink-foreground backdrop-blur-xl">
      <div className="page-shell flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="Rishishwar Industry home" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logoAsset} alt="Rishishwar Industry" className="h-10 w-auto sm:h-11" width={1920} height={640} />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return <Link key={link.to} to={link.to} className={`border-b py-2 font-display text-[11px] font-semibold uppercase tracking-wider transition-colors ${active ? "border-primary text-primary" : "border-transparent text-ink-foreground/70 hover:text-primary"}`}>{link.label}</Link>;
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"} title={isLight ? "Dark theme" : "Light theme"} aria-pressed={isLight} onClick={toggleTheme} className="border-ink-foreground/25 text-ink-foreground hover:text-primary">
            {isLight ? <Moon /> : <Sun />}
          </Button>
          <Button variant="outline" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="border-ink-foreground/25 text-ink-foreground xl:hidden">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="max-h-[calc(100svh-72px)] overflow-y-auto border-t border-border bg-ink px-4 py-5 shadow-2xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={`border-l px-4 py-3 font-display text-sm font-medium uppercase tracking-wider ${pathname === link.to ? "border-primary bg-primary/10 text-primary" : "border-transparent text-ink-foreground/75"}`}>{link.label}</Link>)}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="page-shell grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="col-span-2 md:col-span-1">
          <img src={logoAsset} alt="Rishishwar Industry" loading="lazy" className="h-12 w-auto" width={1920} height={640} />
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink-foreground/60">FMCG manufacturers ko retail networks, reliable partners aur global markets se jodne wala business growth platform.</p>
          <p className="mt-6 flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-widest text-primary"><Globe2 className="size-4" /> Domestic · International</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <nav aria-label="Company links">
            <h3 className="text-sm uppercase tracking-wider text-accent-foreground">Company</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-ink-foreground/60 md:block md:space-y-3">
              {navLinks.map((link) => <li key={link.to}><Link to={link.to} className="transition-colors hover:text-primary">{link.label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <nav aria-label="Partnership links">
          <h3 className="text-sm uppercase tracking-wider text-accent-foreground">Partnerships</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/60">
            <li><Link to="/manufacturers" className="hover:text-primary">For Manufacturers</Link></li>
            <li><Link to="/partner-with-us" className="hover:text-primary">Partner With Us</Link></li>
            <li><Link to="/fund-your-business" className="hover:text-primary">Fund Your Business</Link></li>
            <li><Link to="/retailer-partner" className="hover:text-primary">Retail Partner</Link></li>
            <li><Link to="/register-your-store" className="hover:text-primary">Register Your Store</Link></li>
            <li><Link to="/store-list" search={{ state: "", area: "", district: "" }} className="hover:text-primary">Retail Network List</Link></li>
            <li><Link to="/advertise-your-product" className="hover:text-primary">Advertise Your Product</Link></li>
            <li><Link to="/payment" className="hover:text-primary">Payment Details</Link></li>
          </ul>
        </nav>
        <div className="col-span-2 flex flex-col gap-10 md:col-span-1">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-accent-foreground">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/60">
              <li><a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 break-all hover:text-primary"><Mail className="mt-0.5 size-4 shrink-0 text-primary" />{COMPANY.email}</a></li>
            </ul>
          </div>
          <nav aria-label="Global market links">
            <h3 className="text-sm uppercase tracking-wider text-accent-foreground">Global Markets</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/60">
              {countries.map((country) => <li key={country.slug}><Link to="/global-presence/$market" params={{ market: country.slug }} className="transition-colors hover:text-primary">{country.name}</Link></li>)}
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rishishwar Industry. All rights reserved.</p>
          <p>Partnerships built on trust, reach and long-term growth.</p>
        </div>
      </div>
    </footer>
  );
}