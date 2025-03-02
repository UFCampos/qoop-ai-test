"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { getDictionary } from "@/lib/dictionary";

interface ContactSectionProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["contact"];
}

export default function ContactSection({ dict }: ContactSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 flex justify-center overflow-x-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {dict.title}
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo dict={dict.info}/>
          <ContactForm dict={dict.form}/>
        </div>
      </div>
    </section>
  );
}
