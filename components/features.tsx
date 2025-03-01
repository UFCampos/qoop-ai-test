"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Shield, BarChart, Users } from "lucide-react";
import FeatureItem from "./FeatureItem";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Our platform is optimized for speed, ensuring your users have a seamless experience every time.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Rest easy knowing your data is protected with our state-of-the-art security protocols.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our comprehensive analytics dashboard and reporting tools.",
  },
  {
    icon: Users,
    title: "Collaborative Workspace",
    description: "Enable your team to work together efficiently with our intuitive collaboration features.",
  },
];

export default function FeaturesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
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
          title="Powerful Features"
          subtitle="Everything you need to succeed in the digital landscape"
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
