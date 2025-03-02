"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useFetchTestimonials } from "@/hooks/useFetchTestimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

export default function TestimonialsSection() {
  const { testimonials, loading, error, analyzingIds } = useFetchTestimonials();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from our satisfied customers"
        />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-lg">Loading testimonials...</span>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            <p>Error: {error}</p>
            <p>Please try again later.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                analyzing={analyzingIds.has(testimonial.id)}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
