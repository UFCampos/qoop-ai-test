import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useContactForm } from "@/hooks/useContactForm";
import { getDictionary } from "@/lib/dictionary";

interface ContactFormProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["contact"]["form"];
}
export default function ContactForm({ dict }: ContactFormProps) {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useContactForm(dict);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{dict.name.label}</Label>
          <Input
            id="name"
            name="name"
            placeholder={dict.name.placeholder}
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{dict.name.error}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{dict.email.label}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={dict.email.placeholder}
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.includes("required")
                ? dict.email.error
                : dict.email.invalid}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{dict.message.error}</Label>
          <Textarea
            id="message"
            name="message"
            placeholder={dict.message.placeholder}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{dict.message.error}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? dict.sending : dict.submit}
        </Button>
      </form>
    </motion.div>
  );
}
