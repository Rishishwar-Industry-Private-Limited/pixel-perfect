import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Cog,
  HandCoins,
  TrendingUp,
  Handshake,
  Users,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Settings,
  FileCheck2,
  IndianRupee,
  Lock,
  Factory,
  Package,
  type LucideIcon,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import locations from "@/data/locations.json";
import fundHero from "@/assets/fund-hero.jpg";
import fundMachinery from "@/assets/fund-machinery.jpg";
import fundWorkingCapital from "@/assets/fund-working-capital.jpg";
import fundExpansion from "@/assets/fund-expansion.jpg";
import fundWelder from "@/assets/fund-welder-clean.jpg";
import fundIndia from "@/assets/fund-india.jpg";
import { openEmail } from "@/content/company";


export const futurePoints = [
  "New Machinery",
  "Increase Production",
  "Manage Working Capital",
  "Expand Your Business",
  "Grow Your Brand",
];

export const heroStrip: { icon: LucideIcon; label: string }[] = [
  { icon: Cog, label: "Machinery Finance" },
  { icon: HandCoins, label: "Working Capital" },
  { icon: TrendingUp, label: "Business Expansion" },
  { icon: Handshake, label: "Strategic Partnership" },
  { icon: Users, label: "Expert Support" },
];

export const fundingNeeds = [
  {
    img: fundMachinery,
    icon: Cog,
    title: "Machinery & Equipment",
    text: "New machinery, production equipment, plant expansion and capacity enhancement.",
  },
  {
    img: fundWorkingCapital,
    icon: Package,
    title: "Working Capital",
    text: "Raw materials, inventory, production cycles and day-to-day business requirements.",
  },
  {
    img: fundExpansion,
    icon: TrendingUp,
    title: "Business Expansion",
    text: "Increase capacity, upgrade technology and scale your manufacturing operation.",
  },
];

export const whoCanApply = [
  "Existing manufacturing businesses",
  "MSME / small & medium manufacturers",
  "FMCG manufacturers",
  "Product-based manufacturing businesses",
  "Businesses with an established operating history",
  "Businesses requiring machinery or working-capital support",
];

export const processSteps: { icon: LucideIcon; step: string; title: string; text: string }[] = [
  { icon: FileText, step: "01", title: "Submit Your Requirement", text: "Tell us about your business and funding requirement." },
  { icon: ClipboardCheck, step: "02", title: "Business Assessment", text: "Business, financials, repayment capacity are reviewed." },
  { icon: Settings, step: "03", title: "Funding Structuring", text: "Suitable funding and repayment structure are evaluated." },
  { icon: FileCheck2, step: "04", title: "Documentation", text: "Required business and financial documents are collected." },
  { icon: IndianRupee, step: "05", title: "Approval & Disbursement", text: "Subject to the applicable funder's approval and terms." },
];

export const impactTiles: { icon: LucideIcon; label: string }[] = [
  { icon: Factory, label: "More Production" },
  { icon: Users, label: "More Employment" },
  { icon: Handshake, label: "Stronger Brands" },
  { icon: TrendingUp, label: "Bigger Opportunities" },
];

export const categoryOptions = [
  "Food & Beverages",
  "Personal Care",
  "Home Care",
  "Health & Wellness",
  "Packaged Snacks",
  "Other Manufacturing",
];

export const turnoverOptions = [
  "Below ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 Crore – ₹5 Crore",
  "₹5 Crore – ₹10 Crore",
  "₹10 Crore – ₹25 Crore",
  "Above ₹25 Crore",
];

export const amountOptions = [
  "Below ₹10 Lakh",
  "₹10 Lakh – ₹25 Lakh",
  "₹25 Lakh – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 Crore – ₹5 Crore",
  "Above ₹5 Crore",
];

export const loanOptions = ["No Existing Loans", "Yes — Business Loan", "Yes — Machinery Loan", "Yes — Other Funding"];

export const inputCls =
  "mt-2 w-full rounded-md border border-input bg-background px-4 text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary";

export const allStates = [...new Set((locations as [string, string, ...unknown[]][]).map((r) => r[0]))].sort();

