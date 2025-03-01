import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
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
            <h3 className="font-bold">Email Us</h3>
            <p className="text-muted-foreground">Our friendly team is here to help.</p>
            <p className="mt-1">hello@example.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">Call Us</h3>
            <p className="text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-1">+1 (555) 000-0000</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-bold">Visit Us</h3>
            <p className="text-muted-foreground">Come say hello at our office.</p>
            <p className="mt-1">123 Main Street, San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}