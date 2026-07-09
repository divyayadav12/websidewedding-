import AboutHeroBlock from "@/components/blocks/AboutHeroBlock";
import AboutBioBlock from "@/components/blocks/AboutBioBlock";
import AboutApproachGrid from "@/components/blocks/AboutApproachGrid";
import CtaSection from "@/components/blocks/CtaSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <AboutHeroBlock />
      <AboutBioBlock />
      <AboutApproachGrid />
      <CtaSection />
    </main>
  );
}
