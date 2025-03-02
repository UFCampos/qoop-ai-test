"use client";

import { motion } from "framer-motion";
import PricingPlanCard from "./PricingPlanCard";
import SectionHeader from "./SectionHeader";
import { getDictionary } from "@/lib/dictionary";

interface PricingSectionProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["pricing"];
}

export default function PricingSection({dict} : PricingSectionProps) {
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
          {dict.plans.map((plan, index) => (
            <PricingPlanCard key={index} plan={{
              name: plan.name,
              price: plan.price,
              description: plan.description,
              features: plan.features,
              recommended: index === 1,
              cta: plan.cta
            }} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
