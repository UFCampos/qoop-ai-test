import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    body: string;
    rating: number;
  };
  variants: Variants;
}

export default function TestimonialCard({ testimonial, variants }: TestimonialCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-destructive-foreground mb-4 line-clamp-4">&quot;{testimonial.body}&quot;</p>
          <div className="flex items-center mt-auto">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">Verified Customer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}