import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variants: Variants;
}

export default function FeatureItem({ icon: Icon, title, description, variants }: FeatureItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all duration-300"
      variants={variants}
    >
      <div className="p-3 rounded-full bg-primary/10 mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}