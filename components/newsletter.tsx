"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { getDictionary } from "@/lib/dictionary";

interface NewsletterSectionProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["newsletter"];
}

export default function NewsletterSection({ dict }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast(dict.success, {
        description: "You've successfully subscribed to our newsletter.",
      });
    }, 1500);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground flex justify-center">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {dict.title}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            {dict.subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mt-6 space-y-2"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder={dict.placeholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                className={`bg-primary-foreground text-foreground ${
                  error ? "border-red-500" : ""
                }`}
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? dict.subscribing : dict.button}
              </Button>
            </div>
            {error && (
              <p className="text-red-300 text-sm">
                {error.includes("required")
                  ? dict.error.required
                  : dict.error.invalid}
              </p>
            )}
            <p className="text-xs text-primary-foreground/70 mt-2">
              {dict.privacy}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
