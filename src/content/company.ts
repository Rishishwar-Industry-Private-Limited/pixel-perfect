export const COMPANY = {
  name: "Rishishwar Industry",
  email: "info@rishishwarindustry.com",
} as const;

export function openEmail(message: string, subject = "Enquiry") {
  window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;
}
