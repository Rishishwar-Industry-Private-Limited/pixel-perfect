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
import heroGlobe from "@/assets/gp-india-globe.webp";
import shipImg from "@/assets/gp-ship.webp";
import imgIndia from "@/assets/gp-india-gate.webp";
import imgAustralia from "@/assets/gp-australia.webp";
import imgUsa from "@/assets/gp-usa.webp";
import imgCanada from "@/assets/gp-canada.webp";
import imgUae from "@/assets/gp-uae.webp";
import imgSingapore from "@/assets/gp-singapore.webp";
import imgUk from "@/assets/gp-uk.webp";
import imgEurope from "@/assets/gp-europe.webp";
import worldMap from "@/assets/gp-world-map.webp";


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

