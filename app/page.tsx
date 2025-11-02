"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon as Calendar, Heart, BookOpen, X, Clock, MapPin, ChevronLeft, ChevronRight } from '@/components/icons'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [selectedSermon, setSelectedSermon] = useState<any>(null)
  const [fullscreenImage, setFullscreenImage] = useState<number | null>(null)
  const [isContentVisible, setIsContentVisible] = useState(true)

  const galleryImages = [
    { src: "/main-hall-interior.png", alt: "Main hall interior" },
    { src: "/bell-tower-interior.png", alt: "Bell tower interior" },
    { src: "/bell-tower.png", alt: "Bell tower exterior" },
    { src: "/wardrobe-room.png", alt: "Wardrobe room" },
    { src: "/ceiling-view.png", alt: "Ceiling view" },
    { src: "/front-door-view.png", alt: "Front door view" },
  ]

  // Prevent content from disappearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const openFullscreen = (index: number) => {
    setFullscreenImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (fullscreenImage !== null) {
      setFullscreenImage((fullscreenImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (fullscreenImage !== null) {
        if (e.key === 'Escape') closeFullscreen()
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'ArrowRight') nextImage()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [fullscreenImage])

  const sermons = [
    {
      id: 1,
      title: t.home.sermonTitles.lightInDarkness,
      date: "2025-10-20",
      speaker: t.home.pastorNames.pastorJohn,
      image: "/church-sermon-light.jpg",
      description: t.home.sermonDescriptions.lightInDarkness
    },
    {
      id: 2,
      title: t.home.sermonTitles.walkingInFaith,
      date: "2025-10-13",
      speaker: t.home.pastorNames.pastorSarah,
      image: "/church-faith-walking.jpg",
      description: t.home.sermonDescriptions.walkingInFaith
    },
    {
      id: 3,
      title: t.home.sermonTitles.godsGrace,
      date: "2025-10-06",
      speaker: t.home.pastorNames.pastorMichael,
      image: "/dramatic-sunrise-light-rays-through-clouds-golden-.jpg",
      description: t.home.sermonDescriptions.godsGrace
    },
  ]

  const upcomingEvents = [
    { 
      id: 1,
      date: "Nov 3", 
      title: "Недільне богослужіння", 
      time: "10:00", 
      description: "Приєднуйтесь до нас на недільне богослужіння з проповіддю та спільним поклонінням.",
      location: "Головний зал церкви",
      speaker: "Пастор Іван",
      image: "/church-sermon-light-rays.jpg"
    },
    { 
      id: 2,
      date: "Nov 5", 
      title: "Вивчення Біблії", 
      time: "19:00", 
      description: "Глибоке вивчення Святого Письма та обговорення в малих групах.",
      location: "Кімната для занять",
      speaker: "Пастор Марія",
      image: "/church-faith-walking.jpg"
    },
    { 
      id: 3,
      date: "Nov 10", 
      title: "Молодіжна зустріч", 
      time: "18:00", 
      description: "Час спілкування, ігор та духовного зростання для молоді.",
      location: "Молодіжний зал",
      speaker: "Пастор Олексій",
      image: "/dramatic-sunrise-light-rays-through-clouds-golden-.jpg"
    },
    { 
      id: 4,
      date: "Nov 17", 
      title: "Ніч молитви", 
      time: "19:30", 
      description: "Особливий час молитви та поклоніння для всієї громади.",
      location: "Головний зал церкви",
      speaker: "Пастор Іван",
      image: "/church-sermon-light.jpg"
    },
  ]

  if (!isContentVisible) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="flex flex-col" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
        <Image
          src="/front-exterior-view.png"
          alt="Light of Hope Church"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            console.log('Hero image failed to load')
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white drop-shadow-lg mb-4 px-2">{t.home.hero}</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow max-w-2xl mx-auto px-4">{t.home.tagline}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-j0ENYkkw11KcKw5pnQQH7jeY2rIARR.jpg"
                alt="Church Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h3 className="mb-4 md:mb-6 font-serif text-2xl sm:text-3xl font-bold text-primary">{t.home.aboutTitle}</h3>
            <p className="mb-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {t.home.aboutDescription}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Link href="/about">{t.home.learnMore}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/contact">{t.home.joinButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="mb-6 md:mb-8 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">{t.home.sermonsTitle}</h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <BookOpen className="mb-2 h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h4 className="mb-2 font-serif text-lg sm:text-xl font-semibold">{sermon.title}</h4>
                  <p className="mb-1 text-sm text-muted-foreground">{sermon.speaker}</p>
                  <p className="mb-2 text-sm text-muted-foreground">{sermon.date}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-3 sm:mt-4 text-primary w-full sm:w-auto"
                    onClick={() => setSelectedSermon(sermon)}
                  >
                    Детальніше →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h3 className="mb-6 md:mb-8 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">{t.home.eventsTitle}</h3>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Calendar View */}
          <Card className="p-4 sm:p-6 order-2 lg:order-1 shadow-lg border-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
            <div className="mb-6 text-center">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">Події</h4>
              <div className="text-lg font-semibold text-muted-foreground">Листопад 2025</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                <div key={`day-${idx}`} className="text-center text-xs font-semibold text-muted-foreground p-2">
                  {day}
                </div>
              ))}
              
              {/* Empty cells for start of month */}
              {[...Array(2)].map((_, i) => (
                <div key={`empty-${i}`} className="p-2"></div>
              ))}
              
              {/* Calendar days */}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                const isEventDay = [3, 10, 17, 24].includes(day)
                return (
                  <div
                    key={day}
                    className={`relative p-2 text-center text-sm font-medium cursor-pointer transition-all rounded-lg ${
                      isEventDay
                        ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {day}
                    {isEventDay && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </Card>

          {/* Upcoming Events List */}
          <Card className="p-4 sm:p-6 order-1 lg:order-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700">
            <div className="mb-6 text-center">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">Майбутні події</h4>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-600 shadow-md hover:shadow-lg transition-all cursor-pointer border-l-4 border-primary"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex flex-col items-center justify-center min-w-[60px] bg-primary text-primary-foreground rounded-lg p-3">
                    <span className="text-xs font-semibold">{event.date.split(" ")[0]}</span>
                    <span className="text-xl font-bold">{event.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-base text-gray-800 dark:text-white mb-1">{event.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{event.time}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Детальніше →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h3 className="mb-6 md:mb-8 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">{t.home.churchGallery}</h3>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-lg cursor-pointer ${
                index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              onClick={() => openFullscreen(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {fullscreenImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={galleryImages[fullscreenImage].src}
              alt={galleryImages[fullscreenImage].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white h-10 w-10 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {fullscreenImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Sermon Details Modal */}
      {selectedSermon && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedSermon(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold text-primary">{selectedSermon.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedSermon(null)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedSermon.date}</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Спікер:</h4>
                    <p className="text-sm text-primary font-medium">
                      {selectedSermon.speaker}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Про що буде проповідь:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedSermon.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 w-full">
                    Приєднатися
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedSermon(null)} className="w-full sm:w-auto">
                    Закрити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-md w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl font-bold text-primary">{selectedEvent.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedEvent(null)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Опис події:</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">Спікер:</h4>
                    <p className="text-sm text-primary font-medium">
                      {selectedEvent.speaker}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1">
                    Приєднатися
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                    Закрити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Light of Hope Church. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary transition-colors hover:text-primary/80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="text-primary transition-colors hover:text-primary/80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" className="text-primary transition-colors hover:text-primary/80">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
