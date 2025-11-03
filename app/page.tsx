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

  const upcomingEvents = t.home.upcomingEvents.map((event, index) => ({
    ...event,
    image: [
      "/church-sermon-light-rays.jpg",
      "/church-faith-walking.jpg",
      "/dramatic-sunrise-light-rays-through-clouds-golden-.jpg",
      "/church-sermon-light.jpg"
    ][index]
  }))

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
                <Link href="/contact">{t.nav.submitRequest}</Link>
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
                    {t.home.viewDetails}
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
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">{t.home.eventsCalendarTitle}</h4>
              <div className="text-lg font-semibold text-muted-foreground">{t.home.calendarMonth}</div>
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
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">{t.home.upcomingEventsTitle}</h4>
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
                      <span>{t.home.learnMore}</span>
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
                    <h4 className="font-semibold mb-2">{t.home.modalSpeaker}</h4>
                    <p className="text-sm text-primary font-medium">
                      {selectedSermon.speaker}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">{t.home.modalAboutSermon}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedSermon.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 w-full">
                    {t.home.modalJoinButton}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedSermon(null)} className="w-full sm:w-auto">
                    {t.home.modalCloseButton}
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
                    <h4 className="font-semibold mb-2">{t.home.modalAboutEvent}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-2">{t.home.modalSpeaker}</h4>
                    <p className="text-sm text-primary font-medium">
                      {selectedEvent.speaker}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1">
                    {t.home.modalJoinButton}
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                    {t.home.modalCloseButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
