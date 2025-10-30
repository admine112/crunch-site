'use client'

import { useLanguage } from '@/contexts/language-context'
import { useEffect } from 'react'

export function HtmlLang() {
  const { locale } = useLanguage()

  useEffect(() => {
    // ✅ Динамически обновляем lang атрибут HTML элемента
    document.documentElement.lang = locale
  }, [locale])

  return null
}
