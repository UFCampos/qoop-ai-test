"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { getDictionary } from "@/lib/dictionary"

interface FooterProps {
  dict: Awaited<ReturnType<typeof getDictionary>>["footer"]
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  const sections = [
    {
      title: dict.company.title,
      links: [
        { href: "#", label: dict.company.links.about },
        { href: "#", label: dict.company.links.careers },
        { href: "#", label: dict.company.links.press },
        { href: "#", label: dict.company.links.blog },
      ],
    },
    {
      title: dict.product.title,
      links: [
        { href: "#", label: dict.product.links.features },
        { href: "#", label: dict.product.links.pricing },
        { href: "#", label: dict.product.links.integrations },
        { href: "#", label: dict.product.links.faq },
      ],
    },
    {
      title: dict.resources.title,
      links: [
        { href: "#", label: dict.resources.links.documentation },
        { href: "#", label: dict.resources.links.guides },
        { href: "#", label: dict.resources.links.support },
        { href: "#", label: dict.resources.links.api },
      ],
    },
    {
      title: dict.legal.title,
      links: [
        { href: "#", label: dict.legal.links.privacy },
        { href: "#", label: dict.legal.links.terms },
        { href: "#", label: dict.legal.links.cookies },
        { href: "#", label: dict.legal.links.licenses },
      ],
    },
  ]

  return (
    <footer className="w-full py-12 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold">{section.title}</h3>
              <nav className="flex flex-col space-y-2">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
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
            <p className="text-sm text-muted-foreground">{dict.copyright.replace("{year}", currentYear.toString())}</p>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
