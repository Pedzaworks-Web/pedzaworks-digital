// src/lib/enquiry.ts
// Sends enquiries by opening the visitor's email client with a pre-filled
// message. Replace with a form/email service (e.g. Formspree, Resend) when a
// backend is available — and update the Privacy Policy to name it.

export const ENQUIRY_EMAIL = "admin@pedzaworks.com";

export function openEnquiryEmail(
  subject: string,
  fields: Record<string, string | undefined>,
): void {
  const body = Object.entries(fields)
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `${label}:\n${value!.trim()}`)
    .join("\n\n");

  const href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = href;
}
