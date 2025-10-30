"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon as Calendar, Users, Heart, BookOpen } from '@/components/icons'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()

  const sermons = [
    {
      id: 1,
      title: "Light in the Darkness",
      date: "2025-10-20",
      speaker: "Pastor John",
      image: "/placeholder.svg?key=xfi8g",
    },
    {
      id: 2,
      title: "Walking in Faith",
      date: "2025-10-13",
      speaker: "Pastor Sarah",
      image: "/placeholder.svg?key=935qi",
    },
    {
      id: 3,
      title: "God's Grace",
      date: "2025-10-06",
      speaker: "Pastor Michael",
      image: "/placeholder.svg?key=3ge6l",
    },
  ]

  const upcomingEvents = [
    { date: "Nov 3", title: "Sunday Service", time: "10:00 AM" },
    { date: "Nov 5", title: "Bible Study", time: "7:00 PM" },
    { date: "Nov 10", title: "Youth Meeting", time: "6:00 PM" },
    { date: "Nov 17", title: "Prayer Night", time: "7:30 PM" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/front-exterior-view.png"
          alt="Light of Hope"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-serif text-5xl font-bold text-white drop-shadow-lg md:text-7xl">{t.home.heroTitle}</h2>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-j0ENYkkw11KcKw5pnQQH7jeY2rIARR.jpg"
                alt="Church Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-primary">{t.home.aboutTitle}</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.home.aboutDescription}
            </p>
            <Link href="/about">
              <Button variant="outline" className="mt-4">
                {t.home.learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h3 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{t.home.sermonsTitle}</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <BookOpen className="mb-2 h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-serif text-xl font-semibold">{sermon.title}</h4>
                  <p className="mb-1 text-sm text-muted-foreground">{sermon.speaker}</p>
                  <p className="text-sm text-muted-foreground">{sermon.date}</p>
                  <Button variant="ghost" size="sm" className="mt-4 text-primary">
                    {t.home.watchSermon}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{t.home.eventsTitle}</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Calendar View 1 */}
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-serif text-xl font-semibold">{t.home.calendarMonth}</h4>
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                <div key={`day-${idx}`} className="font-semibold text-muted-foreground">
                  {day}
                </div>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`rounded p-2 ${
                    [3, 10, 17, 24].includes(day)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events List */}
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-serif text-xl font-semibold">{t.home.upcomingEventsTitle}</h4>
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
                  <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <span className="text-xs font-semibold">{event.date.split(" ")[0]}</span>
                    <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">{event.title}</h5>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="mb-8 text-center font-serif text-3xl font-bold text-primary">{t.home.churchGallery}</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/main-hall-interior.png"
              alt="Main hall interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/bell-tower-interior.png"
              alt="Bell tower interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/bell-tower.png"
              alt="Bell tower exterior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/wardrobe-room.png"
              alt="Wardrobe room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/ceiling-view.png"
              alt="Ceiling view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="/front-door-view.png"
              alt="Front door view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-primary py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="mb-4 font-serif text-2xl font-bold text-primary-foreground">{t.home.supportMinistry}</h3>
          <p className="mb-6 text-primary-foreground/90">
            {t.home.supportText}
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Heart className="h-5 w-5" />
            {t.home.donateButton}
          </Button>
        </div>
      </section>

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
