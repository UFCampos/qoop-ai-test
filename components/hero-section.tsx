"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale"
                style={{
                    backgroundImage: "url('/coworkers.jpg')",
                }}
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-zinc-800/65" />
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
                <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Transform Your Digital Experience
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-white/80 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elevate your online presence with our cutting-edge platform designed to help you stand out in today's
                        competitive market.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-full transition-all duration-300 hover:scale-105"
                        >
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

