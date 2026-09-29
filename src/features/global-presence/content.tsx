import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  Handshake,
  Truck,
  ClipboardList,
  BarChart3,
  Headset,
  Globe,
  Users,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import heroGlobe from "@/assets/gp-india-globe.png.asset.json";
import shipImg from "@/assets/gp-ship.png.asset.json";
import imgIndia from "@/assets/gp-india-gate.png.asset.json";
import imgAustralia from "@/assets/gp-australia.png.asset.json";
import imgUsa from "@/assets/gp-usa.png.asset.json";
import imgCanada from "@/assets/gp-canada.png.asset.json";
import imgUae from "@/assets/gp-uae.png.asset.json";
import imgSingapore from "@/assets/gp-singapore.png.asset.json";
import imgUk from "@/assets/gp-uk.png.asset.json";
import imgEurope from "@/assets/gp-europe.png.asset.json";
import worldMap from "@/assets/gp-world-map.png.asset.json";


export const heroStats = [
  { icon: Globe, value: "8", label: "Countries" },
  { icon: Users, value: "2,000+", label: "Retail Stores" },
  { icon: MapPin, value: "23+", label: "Cities in India" },
  { icon: BarChart3, value: "Growing", label: "Global Network" },
];

export const countries = [
  { name: "India", flag: "🇮🇳", img: imgIndia, note: "2,000+ retail stores across 23+ cities" },
  { name: "Australia", flag: "🇦🇺", img: imgAustralia, note: "Growing FMCG market opportunities" },
  { name: "USA", flag: "🇺🇸", img: imgUsa, note: "Expanding Indian brands in key cities" },
  { name: "Canada", flag: "🇨🇦", img: imgCanada, note: "Building retail and distribution networks" },
  { name: "UAE", flag: "🇦🇪", img: imgUae, note: "Supporting market entry and distribution" },
  { name: "Singapore", flag: "🇸🇬", img: imgSingapore, note: "Partnerships with leading distributors" },
  { name: "UK", flag: "🇬🇧", img: imgUk, note: "Connecting with retail and e-commerce" },
  { name: "Europe", flag: "🇪🇺", img: imgEurope, note: "Exploring new markets across Europe" },
];

export const support = [
  { icon: Box, title: "Market Research", note: "Insights on market demand and trends" },
  { icon: Handshake, title: "Local Partnerships", note: "Connect with trusted distributors and dealers" },
  { icon: Truck, title: "Logistics Support", note: "End-to-end shipping and delivery solutions" },
  { icon: ClipboardList, title: "Regulatory Guidance", note: "Support for compliance and documentation" },
  { icon: BarChart3, title: "Sales & Marketing", note: "Brand positioning and retail network setup" },
  { icon: Headset, title: "Ongoing Support", note: "Continuous assistance for long-term growth" },
];

export const trustPoints = [
  { icon: ShieldCheck, label: "Trusted Network" },
  { icon: Users, label: "Local Expertise" },
  { icon: Globe, label: "Reliable Logistics" },
  { icon: BarChart3, label: "Long-Term Growth" },
];

