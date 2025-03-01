"use client";

import { motion } from "framer-motion";
import PricingPlanCard from "./PricingPlanCard";
import SectionHeader from "./SectionHeader";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small projects",
    features: ["Up to 5 projects", "Basic analytics", "24/7 email support", "1GB storage"],
    recommended: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
      "Team collaboration tools",
    ],
    recommended: true,
    cta: "Try Pro",
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom solutions",
      "Unlimited storage",
      "Advanced security features",
      "API access",
    ],
    recommended: false,
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background flex justify-center">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that works best for you and your team"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingPlanCard key={index} plan={plan} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
