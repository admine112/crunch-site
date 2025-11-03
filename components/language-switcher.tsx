"use client"

import { useLanguage } from "@/contexts/language-context"
import { locales, localeNames } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "@/components/icons"

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
        <Button variant="ghost" size="sm" className="text-primary touch-target flex items-center gap-1 px-3 py-2 h-auto">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium hidden sm:inline">{localeNames[locale]}</span>
          <ChevronDown className="h-3 w-3" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {locales.map((loc) => (
          <DropdownMenuItem 
            key={loc} 
            onSelect={() => handleLocaleChange(loc)} 
            className={`cursor-pointer touch-target ${locale === loc ? "bg-accent font-semibold" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>{localeNames[loc]}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
