import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingPlanCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended: boolean;
    cta: string;
  };
  variants: Variants;
}

export default function PricingPlanCard({ plan, variants }: PricingPlanCardProps) {
  return (
    <motion.div
      variants={variants}
      className={`flex ${plan.recommended ? "mt-[-20px] mb-[-20px]" : ""}`}
    >
      <Card
        className={`w-full border ${plan.recommended ? "border-primary shadow-lg" : ""} relative flex flex-col`}
      >
        {plan.recommended && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
          </div>
        )}
        <CardHeader className={`${plan.recommended ? "pt-8" : "pt-6"}`}>
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <div className="mt-2">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground ml-1">/month</span>
          </div>
          <CardDescription className="mt-2">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full text-lg ${
              plan.recommended ? "bg-primary hover:bg-primary/90 font-bold" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            }`}
            size="lg"
          >
            {plan.cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}