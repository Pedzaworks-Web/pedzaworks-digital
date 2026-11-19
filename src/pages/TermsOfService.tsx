// src/pages/TermsOfService.tsx
import { Link } from "react-router-dom";
import LegalPage, { type LegalSection } from "../components/LegalPage";

const CONTACT_EMAIL = "admin@pedzaworks.com";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms of Service ("Terms") govern your use of the website at{" "}
          <strong>www.pedzaworks.com</strong> (the "Site"), operated by
          Pedzaworks Digital Solutions Private Limited ("Pedzaworks", "we", "us", "our"). By
          accessing or using the Site, you agree to these Terms. If you do not
          agree, please do not use the Site.
        </p>
        <p>
          If you use the Site on behalf of an organisation, you confirm that
          you are authorised to accept these Terms for that organisation.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Our Services",
    body: (
      <>
        <p>
          The Site provides information about our software development,
          workflow automation, business platform, website, IoT, and connected
          infrastructure services.
        </p>
        <p>
          Any project or engagement with Pedzaworks is governed by a separate
          written agreement, proposal, or statement of work. If that agreement
          conflicts with these Terms, the agreement takes precedence for that
          engagement.
        </p>
      </>
    ),
  },
  {
    id: "use-of-site",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Site for any unlawful, fraudulent, or harmful purpose</li>
          <li>
            Attempt to gain unauthorised access to the Site, its servers, or
            related systems
          </li>
          <li>
            Interfere with or disrupt the Site, including by introducing
            malware or placing excessive load on it
          </li>
          <li>
            Scrape, copy, or harvest content or contact details from the Site
            by automated means without our permission
          </li>
          <li>
            Submit false, misleading, or someone else's information through our
            forms
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries and Submissions",
    body: (
      <>
        <p>
          Information you submit through our contact or demo request forms is
          used to respond to you and is handled in line with our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          Submitting an enquiry does not create a contract or obligate either
          party to proceed with a project. Any ideas or feedback you share
          voluntarily may be used by us to improve our services, without
          obligation to you, unless we have agreed otherwise in writing (for
          example, under a non-disclosure agreement).
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content on the Site — including text, graphics, logos, images,
          design, and code — is owned by or licensed to Pedzaworks and is
          protected by intellectual property laws. You may view and print
          pages for your own informational, non-commercial use.
        </p>
        <p>
          You may not reproduce, modify, distribute, or republish Site content
          without our prior written consent. Third-party names and logos shown
          on the Site belong to their respective owners.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: (
      <p>
        The Site may link to third-party websites such as LinkedIn, GitHub, or
        Google Maps. We do not control and are not responsible for their
        content, policies, or practices. Your use of those sites is at your
        own risk and subject to their terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The Site and its content are provided "as is" and "as available" for
        general information only. While we aim to keep information accurate
        and up to date, we make no warranties, express or implied, about its
        completeness, accuracy, reliability, or availability. Project
        examples, case descriptions, and outcomes are illustrative and do not
        guarantee similar results.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Pedzaworks is not liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits, data, or business, arising from your use of or
        inability to use the Site. Nothing in these Terms excludes liability
        that cannot be excluded under applicable law.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to indemnify and hold Pedzaworks harmless from any claims,
        losses, or expenses (including reasonable legal fees) arising from
        your breach of these Terms or misuse of the Site.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of Zimbabwe. Any dispute arising
        from these Terms or your use of the Site will be subject to the
        jurisdiction of the courts of Zimbabwe, and the parties will first try
        to resolve it in good faith through discussion.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. The "Last updated" date
        at the top of this page shows when they were last changed. Continued
        use of the Site after changes are posted means you accept the revised
        Terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>Questions about these Terms can be sent to:</p>
        <p>
          <strong>Pedzaworks Digital Solutions Private Limited</strong>
          <br />
          Harare, Zimbabwe
          <br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <br />
          Phone: <a href="tel:+263718719892">+263 71 871 9892</a>
        </p>
      </>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="2026-11-19"
      seoTitle="Terms of Service"
      seoDescription="The terms that govern use of the Pedzaworks Digital Solutions website and enquiries about our software and connected infrastructure services."
      url="https://www.pedzaworks.com/terms-of-service"
      intro={
        <p>
          Please read these Terms carefully. They set out the rules for using
          our website and explain how enquiries relate to any project
          agreement with us.
        </p>
      }
      sections={sections}
      related={{ label: "Privacy Policy", to: "/privacy-policy" }}
    />
  );
}
