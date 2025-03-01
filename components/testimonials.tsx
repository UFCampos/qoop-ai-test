"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useFetchTestimonials } from "@/hooks/useFetchTestimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

export default function TestimonialsSection() {
  const { testimonials, loading, error } = useFetchTestimonials();

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
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-destructive">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m0-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <p className="text-lg font-semibold">Oops! Something went wrong.</p>
              <p className="mt-2">Error: {error}</p>
              <p className="mt-2">Either your network may have issues or our servers are down. Please try again later or contact us.</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-primary text-white rounded-md"
            >
              Refresh page
            </button>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} variants={itemVariants} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
