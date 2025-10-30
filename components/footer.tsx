'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'
import { Mail, Phone, MapPin } from '@/components/icons'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Информация о церкви */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t.footer.churchName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.home.aboutDescription}
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t.footer.quickLinks}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/about" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.aboutUs}
              </Link>
              <Link 
                href="/schedule" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.scheduleServices}
              </Link>
              <Link 
                href="/events" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.nav.events}
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t.footer.contactUs}
              </Link>
            </nav>
          </div>

          {/* Контактная информация */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t.footer.contactInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href={`tel:${t.footer.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href={`mailto:${t.footer.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.footer.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {t.footer.address}
                </span>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t.nav.contact}
            </h3>
            <div className="w-full h-48 rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.1234567890123!2d4.9041389!3d52.3675734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3c6b1234%3A0x1234567890abcdef!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Копирайт */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              {t.footer.copyright} {t.footer.churchName}. {t.footer.allRightsReserved}.
            </div>

            {/* Социальные сети */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {t.footer.followUs}:
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://t.me/lightofhopechurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors button-hover"
                  aria-label="Telegram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/lightofhopechurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors button-hover"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/lightofhopechurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors button-hover"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
