import FAQsTwo from "@/components/faqs-2";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import CarouselSection, { CarouselSize } from "@/components/carousel";

export default function Home() {
  return <div>
    <HeroSection />
    <StatsSection />
    <CarouselSection/>
    <Features />
    <IntegrationsSection />
    <FAQsTwo />
    <FooterSection />

    </div>;
}
