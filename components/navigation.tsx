"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "/Aarchi_Mann_Resume.pdf", external: true },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-foreground"
        >
          Aarchi Mann
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[13px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 pb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
