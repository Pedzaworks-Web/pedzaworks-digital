// src/lib/company.ts
// Official company details. These must match the registration documents
// (CIPZ Certificate of Incorporation / CR6, ZIMRA TIN certificate) exactly,
// because Meta Business verification compares them against the website.
// index.html (JSON-LD) and README.md repeat these values — keep them in sync.

export const COMPANY = {
  tradingName: "Pedzaworks Digital Solutions",
  legalName: "Pedzaworks Digital Solutions (Private) Limited",
  registrationNumber: "78154A0212026",
  incorporated: "21 January 2026",
  registeredUnder: "Companies and Other Business Entities Act [Chapter 24:31]",
  email: "admin@pedzaworks.com",
  phoneE164: "+263718719892",
  phoneDisplay: "+263 71 871 9892",
  addressLines: ["14382 Kuwadzana Extension", "Harare", "Zimbabwe"],
} as const;

export const COMPANY_ADDRESS = COMPANY.addressLines.join(", ");
export const COMPANY_PHONE_HREF = `tel:${COMPANY.phoneE164}`;
