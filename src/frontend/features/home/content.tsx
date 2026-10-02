import { createFileRoute, Link } from "@tanstack/react-router";
import { districtFigure, totalStoreFigure } from "@/frontend/data/retail-network";
import { ArrowRight, Factory, Globe, Handshake, MapPin, Store, Truck, Users } from "lucide-react";
import heroBgAsset from "@/frontend/assets/hero-bg.webp";
import handshakeImage from "@/frontend/assets/cta-handshake.jpg";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { Button } from "@/frontend/components/ui/button";


export const services = [
  { icon: Store, title: "Retail Network Access", text: `${totalStoreFigure} stores across ${districtFigure} districts.`, to: "/our-services" as const },
  { icon: Users, title: "Distributor Partnerships", text: "Verified partners for the right markets.", to: "/our-services" as const },
  { icon: Truck, title: "Domestic Expansion", text: "Structured growth across Indian markets.", to: "/our-services" as const },
  { icon: Globe, title: "Global Market Support", text: "Market access across 8 countries.", to: "/global-presence" as const },
];
export const steps = [
  { icon: Factory, title: "Share Your Product", text: "Tell us about your brand and production capacity." },
  { icon: Users, title: "We Map The Market", text: "The right territories, stores and partners are identified." },
  { icon: Handshake, title: "Partnership Begins", text: "Commercial terms and the growth route are aligned." },
  { icon: Globe, title: "Scale With Confidence", text: "Expand market by market with ongoing support." },
];

