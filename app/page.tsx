import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsSection/>
    </main>
  );
}
