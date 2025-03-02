import { getDictionary } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["contact"]["info"];
}

export default function ContactInfo({ dict }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div className="flex items-start space-x-4 overflow-x-hidden">
          <Mail className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">{dict.email.title}</h3>
            <p className="text-muted-foreground">{dict.email.subtitle}</p>
            <p className="mt-1">{dict.email.value}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">{dict.phone.title}</h3>
            <p className="text-muted-foreground">{dict.phone.subtitle}</p>
            <p className="mt-1">{dict.phone.value}</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">{dict.visit.title}</h3>
            <p className="text-muted-foreground">{dict.visit.subtitle}</p>
            <p className="mt-1">{dict.visit.value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}