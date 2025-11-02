"use client"

import { useLanguage } from "@/contexts/language-context"
import { locales, localeNames } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "@/components/icons"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  const handleLocaleChange = (newLocale: string) => {
    try {
      setLocale(newLocale as any)
    } catch (error) {
      console.error('Failed to change locale:', error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary touch-target">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        {locales.map((loc) => (
          <DropdownMenuItem 
            key={loc} 
            onClick={() => handleLocaleChange(loc)} 
            className={`cursor-pointer touch-target ${locale === loc ? "bg-accent font-semibold" : ""}`}
          >
            {localeNames[loc]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
