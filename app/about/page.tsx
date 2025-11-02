"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { Mail, Phone, CalendarIcon as Calendar } from "@/components/icons"

type Pastor = {
  id: number
  name: string
  role: string
  image: string
  bio: string
  email: string
  phone: string
  joinedYear: number
  specialties: string[]
}

export default function AboutPage() {
  const { t, locale } = useLanguage()
  const [selectedPastor, setSelectedPastor] = useState<Pastor | null>(null)

  const pastors: Pastor[] = t.about.pastors

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">{t.about.title}</h1>
            <p className="text-lg sm:text-xl text-foreground/80">{t.home.tagline}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-j0ENYkkw11KcKw5pnQQH7jeY2rIARR.jpg"
                alt="Church Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="mb-4 md:mb-6 font-serif text-2xl sm:text-3xl font-bold text-primary">
            {locale === "uk" ? "Наша місія" : locale === "nl" ? "Onze Missie" : "Our Mission"}
          </h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed text-muted-foreground">{t.about.mission}</p>
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            {t.about.missionDescription}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 md:mb-12 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">{t.about.coreValuesTitle}</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">{t.about.biblicalTruth}</h3>
                <p className="text-muted-foreground">{t.about.biblicalTruthDesc}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">{t.about.authenticCommunity}</h3>
                <p className="text-muted-foreground">
                  {t.about.authenticCommunityDesc}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">{t.about.globalImpact}</h3>
                <p className="text-muted-foreground">
                  {t.about.globalImpactDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="mb-8 md:mb-12 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">{t.about.pastorsTitle}</h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pastors.map((pastor, index) => {
            // Используем реальные фото пасторов
            const pastorImages = [
              '/pastor1.png',
              '/pastor-3-woman.png',
              '/pastor2.png',
              '/pastor-4-woman.png'
            ]
            return (
              <Card
                key={pastor.id}
                className="cursor-pointer overflow-hidden transition-all hover:shadow-lg card-hover"
                onClick={() => setSelectedPastor(pastor)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 w-full bg-gradient-to-br from-primary/10 to-secondary/20">
                  <Image 
                    src={pastorImages[index] || pastor.image || "/placeholder.svg"} 
                    alt={pastor.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="mb-1 font-serif text-lg sm:text-xl font-semibold">{pastor.name}</h3>
                  <p className="text-sm text-primary">{pastor.role}</p>
                  <Button variant="ghost" size="sm" className="mt-3 sm:mt-4 button-hover w-full sm:w-auto">
                    {t.about.learnMore}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 md:mb-12 text-center font-serif text-2xl sm:text-3xl font-bold text-primary">
            {locale === "uk" ? "Останні події" : locale === "nl" ? "Recente gebeurtenissen" : "Recent Events"}
          </h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="overflow-hidden card-hover">
              <div className="relative h-48 w-full">
                <Image
                  src="/church-sermon-light-rays.jpg"
                  alt="Sunday Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 text-xs text-primary font-semibold">
                  {locale === "uk" ? "10 Листопада 2025" : locale === "nl" ? "10 November 2025" : "November 10, 2025"}
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  {locale === "uk" ? "Недільне богослужіння" : locale === "nl" ? "Zondagse eredienst" : "Sunday Service"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "uk" ? "Натхненна проповідь про віру та надію в сучасному світі" : locale === "nl" ? "Inspirerende preek over geloof en hoop in de moderne wereld" : "Inspiring sermon about faith and hope in the modern world"}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <div className="relative h-48 w-full">
                <Image
                  src="/church-faith-walking.jpg"
                  alt="Youth Gathering"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 text-xs text-primary font-semibold">
                  {locale === "uk" ? "5 Листопада 2025" : locale === "nl" ? "5 November 2025" : "November 5, 2025"}
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  {locale === "uk" ? "Молодіжна зустріч" : locale === "nl" ? "Jongerenbijeenkomst" : "Youth Gathering"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "uk" ? "Вечір спілкування, музики та молитви для молоді" : locale === "nl" ? "Avond van gemeenschap, muziek en gebed voor jongeren" : "Evening of fellowship, music and prayer for youth"}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <div className="relative h-48 w-full">
                <Image
                  src="/dramatic-sunrise-light-rays-through-clouds-golden-.jpg"
                  alt="Charity Event"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 text-xs text-primary font-semibold">
                  {locale === "uk" ? "1 Листопада 2025" : locale === "nl" ? "1 November 2025" : "November 1, 2025"}
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold">
                  {locale === "uk" ? "Благодійний захід" : locale === "nl" ? "Liefdadigheidsevenement" : "Charity Event"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "uk" ? "Допомога нужденним у нашій спільноті" : locale === "nl" ? "Hulp aan behoeftigen in onze gemeenschap" : "Helping those in need in our community"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pastor Modal */}
      <Dialog open={!!selectedPastor} onOpenChange={() => setSelectedPastor(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPastor && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{selectedPastor.name}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={selectedPastor.image || "/placeholder.svg"}
                      alt={selectedPastor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="font-semibold text-primary">{selectedPastor.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{t.about.joined} {selectedPastor.joinedYear}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">{t.about.about}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{selectedPastor.bio}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">{t.about.specialties}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPastor.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 border-t pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${selectedPastor.email}`} className="hover:underline">
                          {selectedPastor.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${selectedPastor.phone}`} className="hover:underline">
                          {selectedPastor.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
