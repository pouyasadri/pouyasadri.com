import { getHomePage } from "@/infrastructure/composition";
import { SiteHeader } from "@/presentation/components/layout/SiteHeader";
import { SiteFooter } from "@/presentation/components/layout/SiteFooter";
import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { WorkSection } from "@/presentation/components/sections/WorkSection";
import { AboutSection } from "@/presentation/components/sections/AboutSection";
import { ServicesSection } from "@/presentation/components/sections/ServicesSection";
import { ProcessSection } from "@/presentation/components/sections/ProcessSection";
import { ReviewsSection } from "@/presentation/components/sections/ReviewsSection";
import { ResultsSection } from "@/presentation/components/sections/ResultsSection";
import { StudioSection } from "@/presentation/components/sections/StudioSection";
import { PricingSection } from "@/presentation/components/sections/PricingSection";
import { TeamSection } from "@/presentation/components/sections/TeamSection";
import { RecognitionSection } from "@/presentation/components/sections/RecognitionSection";
import { FaqSection } from "@/presentation/components/sections/FaqSection";
import { JournalSection } from "@/presentation/components/sections/JournalSection";
import { ContactSection } from "@/presentation/components/sections/ContactSection";

export default async function HomePage() {
  const content = await getHomePage();

  return (
    <>
      <SiteHeader
        brand={content.brand}
        nav={content.nav}
        cta={content.headerCta}
      />
      <main>
        <HeroSection brand={content.brand} hero={content.hero} />
        <WorkSection work={content.work} />
        <AboutSection about={content.about} />
        <ServicesSection services={content.services} />
        <ProcessSection process={content.process} />
        <ReviewsSection reviews={content.reviews} />
        <ResultsSection results={content.results} />
        <StudioSection studio={content.studio} />
        <PricingSection pricing={content.pricing} />
        <TeamSection team={content.team} />
        <RecognitionSection recognition={content.recognition} />
        <FaqSection faq={content.faq} />
        <JournalSection journal={content.journal} />
        <ContactSection contact={content.contact} />
      </main>
      <SiteFooter brand={content.brand} footer={content.footer} />
    </>
  );
}
