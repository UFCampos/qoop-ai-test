"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useFetchTestimonials } from "@/hooks/useFetchTestimonials";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { useRef } from "react";
import { type getDictionary } from "@/lib/dictionary";
import image from "@/public/office-laptop.webp";

interface TestimonialProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["testimonials"];
  lang: "en" | "es";
}
export default function TestimonialsSection({ dict, lang }: TestimonialProps) {
  const { testimonials, loading, error, analyzingIds } = useFetchTestimonials(lang);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'] 
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
console.log(scrollYProgress, 'SCROLL')
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
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6" ref={container}>
        <motion.div
          className="absolute bottom-100 left-100 w-full h-full flex justify-center items-center -z-10"
          style={{ y }}
          onScroll={() => {console.log('scroll', y)}}
        >
          <Image
            src={image}
            alt="Office Laptop"
            width={600}
            height={500}
            className="object-cover"
          />
        </motion.div>
        <SectionHeader
          title={dict.title}
          subtitle={dict.subtitle}
        />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-lg">{dict.loading}</span>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">
            <p>{dict.error.split('. ')[0]}: {error}</p>
            <p>{dict.error.split('. ')[1]}</p>
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
                dict={dict}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
