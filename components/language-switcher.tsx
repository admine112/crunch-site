"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { locales, localeNames } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Globe, ChevronDown, Check } from "@/components/icons"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLocaleChange = (newLocale: string) => {
    console.log('Changing locale to:', newLocale)
    try {
      setLocale(newLocale as any)
      setIsOpen(false)
    } catch (error) {
      console.error('Failed to change locale:', error)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary touch-target flex items-center gap-1 px-3 py-2 h-auto"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium hidden sm:inline">{localeNames[locale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <span className="sr-only">Change language</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 min-w-[140px] bg-popover border border-border rounded-md shadow-lg z-50 py-1 animate-slideDown">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors cursor-pointer ${
                locale === loc ? "bg-accent font-semibold" : ""
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="flex-1 text-left">{localeNames[loc]}</span>
              {locale === loc && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
