"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Search, User, MapPin } from "@/components/icons"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: "/about", label: t.nav.about },
    { href: "/schedule", label: t.nav.sermons },
    { href: "/events", label: t.nav.events },
    { href: "/contact", label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-j0ENYkkw11KcKw5pnQQH7jeY2rIARR.jpg"
                alt="Light of Hope Church Logo"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-xl font-bold tracking-wide text-primary">LIGHT OF HOPE CHURCH</h1>
              <p className="font-serif text-xs italic text-muted-foreground">{t.home.tagline}</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-serif text-sm font-medium transition-colors hover:text-primary relative pb-1",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-primary">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary">
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Location</span>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
