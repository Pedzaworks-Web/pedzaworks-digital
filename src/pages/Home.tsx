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
      title="Operational Software Systems & Digital Infrastructure"
      description="Pedzaworks Digital Solutions builds operational software systems, workflow platforms, automation tools, and connected digital infrastructure for modern organizations."
      url="https://www.pedzaworks.com/"
      keywords={[
        "operational software systems",
        "workflow automation",
        "digital infrastructure",
        "custom software development",
        "IoT integration",
      ]}
      twitterSite="@pedzaworks"
      twitterCreator="@pedzaworks"
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pedzaworks Digital Solutions",
        url: "https://www.pedzaworks.com/",
        logo: "https://www.pedzaworks.com/og-image.jpg",
        description:
          "Pedzaworks builds operational software systems, workflow platforms, and connected digital infrastructure.",
      }}
    />

    <main>
      <Hero />
      <ConnectedOperationsSection />
      <SystemsShowcase />
      <TechStackCarousel />
      <WhyPedzaworksSection />
      <FinalCallToActionSection />
    </main>
  </>
);

export default Home;
