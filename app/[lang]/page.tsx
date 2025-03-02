import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter";
import PricingSection from "@/components/plans";
import TestimonialsSection from "@/components/testimonials";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <HeroSection dict={dict.hero}/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <PricingSection/>
      <ContactSection/>
      <NewsletterSection/>
      <Footer/>
    </main>
  );
}
