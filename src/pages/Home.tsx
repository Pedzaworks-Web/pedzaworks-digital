import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ConnectedOperationsSection from "../components/ConnectedOperationsSection";
import TechStackCarousel from "../components/TechStackCarousel";
import SystemsShowcase from "../components/SystemsShowcase";
import WhyPedzaworksSection from "../components/WhyPedzaworksSection";
import FinalCallToActionSection from "../components/FinalCallToActionSection";

const Home: React.FC = () => (
  <>
    <SEO
      title="Pedzaworks Digital Solutions | Custom Software & Automation, Zimbabwe"
      description="Pedzaworks builds custom software, workflow automation, business platforms, websites, and IoT systems for organisations in Zimbabwe and across Africa."
      url="https://www.pedzaworks.com/"
      keywords={[
        "custom software development Zimbabwe",
        "software company Harare",
        "workflow automation",
        "business software",
        "web development Zimbabwe",
        "IoT solutions",
      ]}
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.pedzaworks.com/#webpage",
        url: "https://www.pedzaworks.com/",
        name: "Pedzaworks Digital Solutions | Custom Software & Automation, Zimbabwe",
        isPartOf: { "@id": "https://www.pedzaworks.com/#website" },
        about: { "@id": "https://www.pedzaworks.com/#organization" },
        primaryImageOfPage: "https://www.pedzaworks.com/og-image.jpg",
      }}
    />

    <Hero />
    <ConnectedOperationsSection />
    <SystemsShowcase />
    <TechStackCarousel />
    <WhyPedzaworksSection />
    <FinalCallToActionSection />
  </>
);

export default Home;
