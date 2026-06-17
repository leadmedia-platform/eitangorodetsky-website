import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CareerHighlights from "@/components/home/CareerHighlights";
import FeaturedWriting from "@/components/home/FeaturedWriting";
import WhatIDo from "@/components/home/WhatIDo";
import ProofBar from "@/components/home/ProofBar";
import SocialProof from "@/components/home/SocialProof";
import Section from "@/components/shared/Section";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: { absolute: "Eitan Gorodetsky — AI-native marketing operator" },
  description:
    "I run an AI-native marketing operation and write about what it takes to build one — memory, integration, codified workflows, and governance. 15 years in iGaming, tech and digital.",
  alternates: {
    canonical: "https://eitangorodetsky.com",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerHighlights />
      <WhatIDo />
      <FeaturedWriting />
      <ProofBar />
      <Section id="newsletter">
        <NewsletterCTA source="home" />
      </Section>
      <SocialProof />
    </>
  );
}
