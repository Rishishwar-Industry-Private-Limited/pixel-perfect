import { createFileRoute, Link } from "@tanstack/react-router";
import { districtFigure, totalStoreFigure } from "@/frontend/data/retail-network";
import {
  Target,
  Eye,
  ArrowRight,
  Store,
  MapPin,
  Users,
  Globe,
  Truck,
  ShieldCheck,
  Star,
  Handshake,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/frontend/components/site-chrome";
import aboutHero from "@/frontend/assets/about-hero.jpg";
import officeImage from "@/frontend/assets/about-office.jpg";
import handshakeImage from "@/frontend/assets/cta-handshake.jpg";


export const stats = [
  { icon: Store, value: totalStoreFigure, label: "Retail Stores" },
  { icon: MapPin, value: districtFigure, label: "Districts in India" },
  { icon: Users, value: "Distributor &", label: "Dealer Network" },
  { icon: Globe, value: "8 Countries", label: "Global Presence" },
];

export const purpose = [
  { icon: Target, title: "Our Mission", text: "To empower FMCG manufacturers with strong market access, distribution networks and global opportunities for sustainable sales growth." },
  { icon: Eye, title: "Our Vision", text: "To become the most trusted FMCG market expansion partner, connecting Indian and global manufacturers to every home, everywhere." },
];

export const marketProblems = [
  { problem: "Good products. Limited shelf access.", detail: "Manufacturing a product does not automatically put it in front of customers.", response: "We connect brands with participating retail stores and identify suitable markets.", icon: Store },
  { problem: "The wrong distribution fit.", detail: "Finding distributors and dealers who fit the product and territory can slow expansion.", response: "We help identify distribution partners and align the proposed commercial route.", icon: Users },
  { problem: "Growth without a market plan.", detail: "Entering new regions needs more than dispatching stock; brands need a territory and channel strategy.", response: "We map domestic opportunities and support a structured market-by-market approach.", icon: MapPin },
  { problem: "Uncertainty across borders.", detail: "International expansion brings market-entry, import preparation and distribution questions.", response: "We provide market-entry guidance and import/export support, with requirements reviewed for the target market.", icon: Globe },
];

export const services = [
  {
    icon: Store,
    title: "Retail Network Access",
    text: `Get your products into ${totalStoreFigure} retail stores across ${districtFigure} districts.`,
  },
  {
    icon: Users,
    title: "Distributor & Dealer Appointment",
    text: "We help you find and appoint the right distributors and dealers.",
  },
  {
    icon: Truck,
    title: "Domestic Market Expansion",
    text: "Strong on-ground network across key cities in India.",
  },
  {
    icon: Globe,
    title: "Import & Export Support",
    text: "Take your brand to international markets with ease.",
  },
];

export const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Proven Retail Network",
    text: `${totalStoreFigure} stores and growing.`,
  },
  {
    icon: Star,
    title: "Focus on FMCG",
    text: "Deep understanding of FMCG markets.",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    text: "From strategy to shelf.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    text: "Presence in 8 countries.",
  },
];

export const countries = [
  "India",
  "Australia",
  "USA",
  "Canada",
  "UAE",
  "Singapore",
  "UK",
  "Europe",
];

