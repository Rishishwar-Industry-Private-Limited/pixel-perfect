import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import productionImage from "@/assets/manufacturer-floor.jpg";
import productsImage from "@/assets/hero-products.jpg";
import handshakeImage from "@/assets/cta-handshake.jpg";
import storeAsset from "@/assets/retailer-store.png.asset.json";
import shipAsset from "@/assets/gp-ship.png.asset.json";


export const stats = [
  { value: "2,000+", label: "Retail stores" },
  { value: "23+", label: "Indian cities" },
  { value: "8", label: "Countries" },
];

export const channels = [
  { image: storeAsset.url, title: "Shelf space in retail stores", body: "Your products placed in kirana, general and modern-trade stores across our network — with the store owners we already work with every week.", to: "/our-services" as const },
  { image: productsImage, title: "Distributors who fit your category", body: "We introduce you to distributors that already move products like yours, in the towns you want to sell in. No cold lists.", to: "/our-services" as const },
  { image: shipAsset.url, title: "Export to international buyers", body: "For brands ready to go abroad, we open conversations with buyers in the UAE, UK, USA, Canada, Singapore, Australia and Europe.", to: "/global-presence" as const },
];

export const bring = [
  "Product list with MRP and trade margins",
  "Monthly production capacity",
  "Licences and certifications you hold",
  "The cities or countries you want to reach",
];

export const steps = [
  { title: "A first call", body: "We learn about your products, pricing and capacity." },
  { title: "A market plan", body: "We suggest which stores, distributors or countries make sense — and which don't." },
  { title: "Launch and follow-up", body: "Products reach the shelf, and we stay in touch on sell-through and reorders." },
];

