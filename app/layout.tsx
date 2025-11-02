import type React from "react"
import type { Metadata, Viewport } from "next"

import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import { HtmlLang } from "@/components/html-lang"
import { LoadingAnimation } from "@/components/loading-animation"
import { ServiceAnnouncementPopup } from "@/components/service-announcement-popup"
import "./globals.css"
import "./mobile-optimizations.css"

import { Libre_Baskerville, IBM_Plex_Mono } from 'next/font/google'

// Initialize fonts - optimized to 2 fonts
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap', // ✅ Оптимизация загрузки шрифтов
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap', // ✅ Оптимизация загрузки шрифтов
})

// ✅ Полные метаданные для SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://lightofhopechurch.com'),
  title: {
    default: "Light of Hope Church - Where Faith Meets Future",
    template: "%s | Light of Hope Church"
  },
  description: "Welcome to Light of Hope Church. Join us for worship, sermons, and community events. Experience God's love in our welcoming community.",
  keywords: ["church", "worship", "sermons", "community", "faith", "hope", "Christianity", "prayer", "bible study"],
  authors: [{ name: "Light of Hope Church" }],
  creator: "Light of Hope Church",
  publisher: "Light of Hope Church",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['uk_UA', 'nl_NL'],
    url: 'https://lightofhopechurch.com',
    siteName: 'Light of Hope Church',
    title: 'Light of Hope Church - Where Faith Meets Future',
    description: 'Join us for worship, sermons, and community events. Experience God\'s love in our welcoming community.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Light of Hope Church',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Light of Hope Church - Where Faith Meets Future',
    description: 'Join us for worship, sermons, and community events.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#a67c52' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'religion',
}

// ✅ Viewport конфигурация
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#a67c52' },
    { media: '(prefers-color-scheme: dark)', color: '#c0a080' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${ibmPlexMono.variable}`}>
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        {/* ✅ Preconnect для оптимизации */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ✅ DNS prefetch для внешних ресурсов */}
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="font-mono antialiased">
        <LoadingAnimation />
        <ErrorBoundary>
          <LanguageProvider>
            <HtmlLang />
            <ServiceAnnouncementPopup />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
