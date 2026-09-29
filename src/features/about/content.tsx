import { createFileRoute, Link } from "@tanstack/react-router";
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
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import aboutHero from "@/assets/about-hero.jpg";
import officeImage from "@/assets/about-office.jpg";
import handshakeImage from "@/assets/cta-handshake.jpg";


export const stats = [
  { icon: Store, value: "2,000+", label: "Retail Stores" },
  { icon: MapPin, value: "23+", label: "Cities in India" },
  { icon: Users, value: "Distributor &", label: "Dealer Network" },
  { icon: Globe, value: "8 Countries", label: "Global Presence" },
];

export const services = [
  {
    icon: Store,
    title: "Retail Network Access",
    text: "Get your products into 2,000+ retail stores across 23+ cities.",
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
    text: "2,000+ stores and growing.",
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

