import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/plans";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <ContactSection/>
    </main>
  );
}
