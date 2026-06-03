// src/pages/Home.tsx

import React from "react";
import Hero from "../components/Hero";
import ConnectedOperationsSection from "../components/ConnectedOperationsSection";
import TechStackCarousel from "../components/TechStackCarousel";
import SystemsShowcase from "../components/SystemsShowcase";
import WhyPedzaworksSection from "../components/WhyPedzaworksSection";
import FinalCallToActionSection from "../components/FinalCallToActionSection";

const Home: React.FC = () => (
  <>
    <main>
      <Hero />
      <ConnectedOperationsSection />
      <TechStackCarousel />
      <SystemsShowcase />
      <WhyPedzaworksSection />
      <FinalCallToActionSection />
    </main>
  </>
);

export default Home;
