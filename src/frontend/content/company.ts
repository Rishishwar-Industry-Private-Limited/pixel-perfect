export const COMPANY = {
  name: "Rishishwar Industry",
  email: "sales@rishishwarindustry.in",
} as const;

export function openEmail(message: string, subject = "Enquiry") {
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;
}
