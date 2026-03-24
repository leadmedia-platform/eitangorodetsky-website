import HeroSection from "@/components/home/HeroSection";
import CareerHighlights from "@/components/home/CareerHighlights";
import FeaturedStories from "@/components/home/FeaturedStories";
import WhatIDo from "@/components/home/WhatIDo";
import ProofBar from "@/components/home/ProofBar";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import SocialProof from "@/components/home/SocialProof";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CareerHighlights />
      <WhatIDo />
      <FeaturedStories />
      <ProofBar />
      <NewsletterCTA />
      <SocialProof />
    </>
  );
}
