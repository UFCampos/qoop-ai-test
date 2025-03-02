"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggleButton"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <footer className="w-full py-12 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Press
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Product</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Integrations
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                API
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Licenses
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Company, Inc. All rights reserved.</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
