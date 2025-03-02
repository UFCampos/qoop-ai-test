import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsletterSection from "@/components/newsletter";
import PricingSection from "@/components/plans";
import TestimonialsSection from "@/components/testimonials";
import { type Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <HeroSection dict={dict.hero}/>
      <FeaturesSection dict={dict.features}/>
      <TestimonialsSection dict={dict.testimonials} lang={lang}/>
      <PricingSection dict={dict.pricing}/>
      <ContactSection dict={dict.contact}/>
      <NewsletterSection dict={dict.newsletter}/>
      <Footer dict={dict.footer}/>
    </main>
  );
}
