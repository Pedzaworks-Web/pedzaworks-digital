// src/pages/PrivacyPolicy.tsx
import LegalPage, { type LegalSection } from "../components/LegalPage";

import { COMPANY, COMPANY_PHONE_HREF } from "../lib/company";

const CONTACT_EMAIL = COMPANY.email;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    body: (
      <>
        <p>
          Pedzaworks Digital Solutions (Private) Limited ("Pedzaworks", "we", "us", "our") is a
          software engineering company incorporated in Zimbabwe (Company
          Registration No. 78154A0212026) and based in Harare. We operate
          the website at <strong>www.pedzaworks.com</strong> (the "Site").
        </p>
        <p>
          This Privacy Policy explains what personal information we collect
          through the Site and when you communicate with us, how we use it, and
          the choices and rights you have. It is written with reference to the
          Zimbabwe Cyber and Data Protection Act [Chapter 12:07] and general
          international good practice.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <p>
          When you use our contact form, request a demo, email us, or call us,
          you may provide:
        </p>
        <ul>
          <li>Your name and organisation name</li>
          <li>Your email address and phone number</li>
          <li>Preferred meeting dates and times</li>
          <li>
            Project details, such as the type of project and a description of
            your operations, workflows, or systems
          </li>
        </ul>
        <p>
          Please do not include sensitive personal information (for example,
          health, financial account, or identity document details) in project
          enquiries.
        </p>

        <h3>Information collected automatically</h3>
        <p>
          Like most websites, our hosting provider automatically records
          standard technical information when you visit, such as your IP
          address, browser type, device type, referring page, and the date and
          time of your request. This is used to deliver, secure, and maintain
          the Site.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to your enquiries and schedule demos or consultations</li>
          <li>Prepare proposals and deliver services you request</li>
          <li>Communicate with you about an existing or prospective project</li>
          <li>Operate, secure, and improve the Site</li>
          <li>Comply with legal obligations and protect our legal rights</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for
          automated decision-making that has legal or similarly significant
          effects on you.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    body: (
      <p>
        We process your information on the basis of your consent (for example,
        when you submit an enquiry), to take steps at your request before
        entering into a contract, to perform a contract with you, to meet legal
        obligations, or for our legitimate interests in running and securing
        our business, where those interests are not overridden by your rights.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Third-Party Services",
    body: (
      <>
        <p>
          The Site does not use advertising or tracking cookies. It relies on a
          small number of third-party services to function:
        </p>
        <ul>
          <li>
            <strong>Vercel</strong> — hosts and delivers the Site and processes
            server logs.
          </li>
          <li>
            <strong>Google Fonts</strong> — serves the typefaces used on the
            Site. Your browser connects to Google's servers to load them, which
            shares your IP address with Google.
          </li>
        </ul>
        <p>
          Your browser may store limited data locally to make the Site work
          properly. If we introduce analytics or other cookies in future, we
          will update this policy.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    body: (
      <>
        <p>We only share personal information:</p>
        <ul>
          <li>
            With service providers who help us operate the Site and our
            business (such as hosting and email providers), under appropriate
            confidentiality obligations
          </li>
          <li>When required by law, regulation, or a valid legal request</li>
          <li>To protect the rights, safety, or property of Pedzaworks or others</li>
          <li>
            As part of a merger, acquisition, or sale of business assets, with
            notice to you where required
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    body: (
      <p>
        Some of our service providers store or process data outside Zimbabwe.
        Where this happens, we take reasonable steps to ensure your information
        receives an adequate level of protection, consistent with applicable
        data protection law.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <p>
        We keep enquiry and project information only for as long as needed for
        the purposes described in this policy — typically for the duration of
        our discussions or engagement and a reasonable period afterwards for
        record-keeping, legal, and accounting purposes. We then delete or
        anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable technical and organisational measures to protect
        personal information, including encrypted (HTTPS) connections to the
        Site and restricted access to the information we hold. No method of
        transmission or storage is completely secure, so we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>Ask what personal information we hold about you and get a copy</li>
          <li>Ask us to correct inaccurate or incomplete information</li>
          <li>Ask us to delete your information</li>
          <li>Object to or ask us to restrict certain processing</li>
          <li>Withdraw consent at any time, where processing relies on consent</li>
          <li>
            Lodge a complaint with the Postal and Telecommunications Regulatory
            Authority of Zimbabwe (POTRAZ), the data protection authority
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need
          to verify your identity before responding.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        The Site is intended for businesses and organisations and is not
        directed at children under 18. We do not knowingly collect personal
        information from children. If you believe a child has given us their
        information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The "Last updated"
        date at the top of this page shows when it was last changed. Material
        changes will be highlighted on the Site.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about this policy or your information can be sent to:</p>
        <p>
          <strong>{COMPANY.legalName}</strong>
          <br />
          Company Reg. No. {COMPANY.registrationNumber}
          {COMPANY.addressLines.map((line) => (
            <span key={line}>
              <br />
              {line}
            </span>
          ))}
          <br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          Phone: <a href={COMPANY_PHONE_HREF}>{COMPANY.phoneDisplay}</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="2026-11-19"
      seoTitle="Privacy Policy"
      seoDescription="How Pedzaworks Digital Solutions collects, uses, and protects personal information submitted through our website and enquiries."
      url="https://www.pedzaworks.com/privacy-policy"
      intro={
        <p>
          Your privacy matters to us. This policy describes how we handle the
          information you share when you visit our website or get in touch
          about a project.
        </p>
      }
      sections={sections}
      related={{ label: "Terms of Service", to: "/terms-of-service" }}
    />
  );
}
