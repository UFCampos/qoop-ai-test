"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Shield, BarChart, Users, LucideIcon } from "lucide-react";
import FeatureItem from "./FeatureItem";
import SectionHeader from "./SectionHeader";
import { getDictionary } from "@/lib/dictionary";

// Map feature titles to their respective icons
const iconMap: Record<string, LucideIcon> = {
  "Lightning Fast Performance": Zap,
  "Enterprise-Grade Security": Shield,
  "Advanced Analytics": BarChart,
  "Collaborative Workspace": Users,
  // Spanish translations
  "Rendimiento Ultrarrápido": Zap,
  "Seguridad de Nivel Empresarial": Shield,
  "Análisis Avanzado": BarChart,
  "Espacio de Trabajo Colaborativo": Users,
};

interface FeaturesSectionProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["features"]
}
export default function FeaturesSection({ dict }: FeaturesSectionProps) {
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
          title={dict.title}
          subtitle={dict.subtitle}
        />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {dict.items.map((feature, index) => {
            const icon = iconMap[feature.title];
            return (
              <FeatureItem
                key={index}
                icon={icon}
                title={feature.title}
                description={feature.description}
                variants={itemVariants}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
