export type FormField = {
  k: string;
  l: string;
  t: "text" | "tel" | "email" | "number" | "select" | "textarea";
  opts?: string[];
  optional?: boolean;
  placeholder?: string;
  wide?: boolean;
  rows?: number;
};

export const contactFields: FormField[] = [
  { k: "name", l: "Your Name", t: "text", placeholder: "Full name" },
  { k: "company", l: "Company", t: "text", optional: true, placeholder: "Company name" },
  { k: "phone", l: "Phone", t: "tel", wide: true, placeholder: "+91 ..." },
  { k: "message", l: "Message", t: "textarea", rows: 5, placeholder: "Tell us about your products and the markets you want to reach." },
];

export const storeFields: FormField[] = [
  { k: "name", l: "Owner Name", t: "text" },
  { k: "phone", l: "Mobile Number", t: "tel" },
  { k: "store", l: "Store Name", t: "text" },
  { k: "city", l: "City / Town, State", t: "text" },
  { k: "area", l: "Store Area (sq.ft.)", t: "number" },
];

export const retailFields: FormField[] = [
  { k: "owner", l: "Owner Name", t: "text" },
  { k: "phone", l: "Mobile Number", t: "tel" },
  { k: "email", l: "Email", t: "email", optional: true },
  { k: "store", l: "Store Name", t: "text" },
  { k: "type", l: "Store Type", t: "select", opts: ["Kirana / General Store", "Supermarket", "Medical Store", "Cosmetic Store", "Other"] },
  { k: "state", l: "State", t: "text" },
  { k: "city", l: "District / City / Town", t: "text" },
  { k: "address", l: "Full Store Address", t: "textarea" },
  { k: "area", l: "Store Area (sq.ft.)", t: "number" },
  { k: "gst", l: "GST Number", t: "text", optional: true },
];

export const mfgFields: FormField[] = [
  { k: "company", l: "Company Name", t: "text" },
  { k: "contact", l: "Contact Person", t: "text" },
  { k: "designation", l: "Designation", t: "text", optional: true },
  { k: "phone", l: "Mobile Number", t: "tel" },
  { k: "email", l: "Business Email", t: "email" },
  { k: "category", l: "Product Category", t: "select", opts: ["Food & Beverages", "Personal Care", "Home Care", "Health & Wellness", "Packaged Snacks", "Other"] },
  { k: "brands", l: "Brand Names", t: "text" },
  { k: "location", l: "Factory Location (City, State)", t: "text" },
  { k: "markets", l: "Target Markets", t: "select", opts: ["Domestic (India)", "International", "Both"] },
  { k: "gst", l: "GST Number", t: "text", optional: true },
  { k: "message", l: "About Your Products / Requirement", t: "textarea", optional: true },
];
