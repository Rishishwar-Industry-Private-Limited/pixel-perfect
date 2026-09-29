export const COMPANY = {
  name: "Rishishwar Industry",
  phoneDisplay: "+91 75660 72349",
  phone: "+917566072349",
  email: "info@rishishwarindustry.com",
  location: "Gwalior, Madhya Pradesh, India",
} as const;

export function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${COMPANY.phone.replace("+", "")}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}