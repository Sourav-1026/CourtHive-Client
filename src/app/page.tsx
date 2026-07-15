import AvailableCourts from "@/components/AvailableCourts";
import Banner from "@/components/Banner";
import CategoriesSection from "@/components/homepage/CategoriesSection";
import FaqSection from "@/components/homepage/FaqSection";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import HowItWorksSection from "@/components/homepage/HowItWorksSection";
import StatsSection from "@/components/homepage/StatsSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <AvailableCourts />
      <CategoriesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
