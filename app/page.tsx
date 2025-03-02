import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter";
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
      <NewsletterSection/>
      <Footer/>
    </main>
  );
}
