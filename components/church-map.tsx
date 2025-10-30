'use client'

import { useLanguage } from '@/contexts/language-context'

interface ChurchMapProps {
  className?: string
}

export function ChurchMap({ className = "" }: ChurchMapProps) {
  const { t } = useLanguage()

  return (
    <div className={`w-full h-96 rounded-lg overflow-hidden border shadow-lg ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.6234567890123!2d11.5819805!3d48.1351253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMarienplatz%2C%2080331%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sde!4v1698765432109!5m2!1sen!2sde"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${t.footer.churchName} - ${t.footer.contactInfo}`}
        className="w-full h-full transition-all duration-300 hover:shadow-xl"
      />
    </div>
  )
}
