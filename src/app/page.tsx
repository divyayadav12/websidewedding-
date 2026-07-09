import HeroSection from "@/components/blocks/HeroSection";
import AboutPreview from "@/components/blocks/AboutPreview";
import PortfolioGrid from "@/components/blocks/PortfolioGrid";
import ApproachSection from "@/components/blocks/ApproachSection";
import TestimonialsGrid from "@/components/blocks/TestimonialsGrid";
import CtaSection from "@/components/blocks/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <HeroSection />
      <AboutPreview />
      <PortfolioGrid />
      <ApproachSection />
      <TestimonialsGrid />
      <CtaSection />
    </main>
  );
}
