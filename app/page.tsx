import HeroSection from "@/components/home/HeroSection";
import FeaturedStories from "@/components/home/FeaturedStories";
import WhatIDo from "@/components/home/WhatIDo";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import SocialProof from "@/components/home/SocialProof";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedStories />
      <WhatIDo />
      <NewsletterCTA />
      <SocialProof />
    </>
  );
}
