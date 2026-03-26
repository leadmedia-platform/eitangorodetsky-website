import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CareerHighlights from "@/components/home/CareerHighlights";
import FeaturedStories from "@/components/home/FeaturedStories";
import WhatIDo from "@/components/home/WhatIDo";
import ProofBar from "@/components/home/ProofBar";
import SocialProof from "@/components/home/SocialProof";

export const metadata: Metadata = {
  title: { absolute: "Eitan Gorodetsky — Senior Marketing & Operations Leader" },
  description:
    "Senior Marketing & Operations Executive with 15+ years across iGaming, Tech & Digital. Building growth engines, leading people, finding what's hidden.",
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
      <FeaturedStories />
      <ProofBar />
      <SocialProof />
    </>
  );
}
