import { motion, Variants } from "framer-motion";
import { Star, Loader2, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { SentimentAnalysis } from "@/app/actions/testimonialAnalysis";
import { getDictionary } from "@/lib/dictionary";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    body: string;
    rating: number;
    sentiment?: SentimentAnalysis;
  };
  analyzing: boolean;
  variants: Variants;
  dict: Awaited<ReturnType<typeof getDictionary>>["testimonials"];
}

export default function TestimonialCard({ testimonial, analyzing, variants, dict }: TestimonialCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>
            {analyzing ? (
              <Badge variant="secondary" className="animate-pulse">
                <Loader2 className="h-3 w-3 animate-spin mr-1" />
                {dict.aiAnalysis.analyzing}
              </Badge>
            ) : testimonial.sentiment ? (
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="secondary" className="flex items-center gap-1 cursor-help">
                    <MessageSquare className="h-3 w-3" />
                    {dict.aiAnalysis.analysis}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="text-wrap max-w-[200px]">
                  <p>{testimonial.sentiment.text}</p>
                  <p className="text-sm text-muted-foreground text-wrap">{testimonial.sentiment.sentiment}</p>
                </TooltipContent>
              </Tooltip>
            ) : null}
          </div>
          <p className="text-muted-foreground mb-4 line-clamp-4">&quot;{testimonial.body}&quot;</p>
          <div className="flex items-center mt-auto">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{dict.verified}</p>
            </div>
            {testimonial.sentiment && (
              <div className="ml-auto text-2xl">
                {testimonial.sentiment.sentiment === "positive" && "😊"}
                {testimonial.sentiment.sentiment === "neutral" && "😐"}
                {testimonial.sentiment.sentiment === "negative" && "😞"}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}